# 第04节：servlet过滤器

### 一、什么是servlet过滤器

过滤器和其它语言的拦截器有些像，如果用现实生活中举例子的话，可以这样理解：  
一个男生去找女生玩，到了女生家门前敲门，打开门的确是女生的妈妈，然后女生的妈妈说：“滚”。  
在上面的一段话中，我们就可以把女生的妈妈理解为拦截器。男生相当于用户，女生相当于web应用。  
用户(男生)请求访问web应用(女生),却被拦截器(女生的妈妈)验证后拒绝访问。

还有一种可能，男生去找女生玩，路上碰见了男生自己的妈妈，然后男生的妈妈给了男生1000块钱并且跟他说：“给你钱，好好玩。”  
在上面的一段话中我们可以理解为，用户(男生)请求访问web应用(女生),通过拦截器(男生的妈妈)验证后允许访问。

### 二、为什么要学习过滤器？

Servlet 过滤器可以动态地拦截请求和响应，以变换或使用包含在请求或响应中的信息。  

(1) 当用户对Web应用的请求到达之前，过滤器进行拦截和处理，然后再交给被请求的部分  

(2) 在Web应用将数据返回到用户之前，过滤器进行拦截和处理，然后再交给用户  
  
### 三、过滤器的生命周期

* 过滤器可以有 0个或多个，顺序按照web.xml中声明的先后顺序进行处理（可以理解为多面墙，请求到来时先通过A墙，再通过B墙；响应发送时，先通过B墙，再通过A墙）

* 所有过滤器都要实现 javax.servlet.Filter接口，这个接口中包括3个方法  
(1) init()  

生成过滤器对象时调用，主要完成初始化工作  

(2) destroy()  

过滤器对象被销毁时调用，释放过滤器对象所占用的资源  

(3) doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain)  

完成过滤功能。 处理request可以完成作用1， 处理response可以完成作用2， 调用FilterChain的doFilter()方法可以调用下一个过滤器的doFilter()方法，直到无过滤器可调用，处理请求的Servlet或JSP  

### 四、代码示例：

``` java
@WebFilter(
        filterName = "Filter",
        value = {"/*"}
)
public class MyFilter implements javax.servlet.Filter {
    public void destroy() {
        System.out.println("销毁");

    }

    public void doFilter(javax.servlet.ServletRequest req, javax.servlet.ServletResponse resp, javax.servlet.FilterChain chain) throws javax.servlet.ServletException, IOException {
        System.out.println("过滤请求");
        //通过过滤器继续访问资源
        chain.doFilter(req, resp);
        System.out.println("过滤响应");
    }

    public void init(javax.servlet.FilterConfig config) throws javax.servlet.ServletException {
        System.out.println("初始化");
    }

}

```

* 注意:在Filter的doFilter方法内如果没有执行chain.doFilter(req, resp);这段代码，那么也就没有过滤响应了。

``` java
@WebFilter(
        filterName = "Filter",
        value = {"/*"}
)

```

* filterName表示文件名称
* value表示全路径匹配，Filter的全路径匹配只支持/*，不支持/  

将项目部署到tomcat并启动成功之后，会在控制台中看到下面信息：  
初始化  

访问项目，会在控制台中看到下面信息：  
过滤请求  
过滤响应  

正常关闭tomcat，会在控制台中看到下面信息：
销毁  

通过上面的操作，可以得出Filter的生命周期如下：  

* 当服务器启动，会创建Filter对象，并调用init方法，只调用一次.  
* 当访问资源时，路径与Filter的拦截路径匹配，会执行Filter中的doFilter方法，这个方法是真正拦截操作的方法.  
* 当服务器关闭时，会调用Filter的destroy方法来进行销毁操作.  
一个Filter的生命周期跟servlet有些类似，需要经历初始化—>doFilter—>销毁三个过程。  
* doFilter方法里的chain.doFilter(req, resp);这条代码被执行了才能继续往下走。
也就是说必须执行这段代码才能过滤响应

### 四、案例及作业

为了能让大家更深刻的学会过滤器使用方法，这里给大家布置一项作业：

> 1.访问/user.jsp 时过滤器判断年龄是否满18岁，如果满18岁则可以继续访问，否则重定向到test.jsp(登录失败)。

[案例链接](https://github.com/xiaozhoulee/java-examples/tree/master/12-servlet%E4%B8%8Ejsp/%E7%AC%AC07%E8%8A%82%EF%BC%9A%E8%BF%87%E6%BB%A4%E5%99%A8/untitled10)

---

答案解析：  

第一题

1. 创建user和test的jsp文件。内容自己随便写。

![jsp目录](..\images/1207_demoimg.png)

2. 创建Filter文件

![create](..\images/1207_create.png)

``` java

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

@WebFilter(
        filterName = "Filter",
        value = {"/user.jsp"}
)
public class MyFilter implements javax.servlet.Filter {

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException, IOException {
        //获取浏览器传过来的参数
        String age = req.getParameter("age");
        //通过过滤器继续访问资源
        if(age>=18){//判断age是否大于等于18的方法
            chain.doFilter(req, resp);
            System.out.println("过滤响应");

        }else {
            // 重定向到test.jsp
            req.getRequestDispatcher("/test.jsp").forward(req,resp);

        }
    }
}
```

### 五、总结

以上就是servlet过滤器了，下节我们学习servlet监听器。