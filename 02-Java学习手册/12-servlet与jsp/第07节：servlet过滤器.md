# 第04节：servlet过滤器

### 一、servlet过滤器是什么？

Servlet 过滤器可以动态地拦截请求和响应，以变换或使用包含在请求或响应中的信息。  

(1) 当用户对Web应用的请求到达之前，过滤器进行拦截和处理，然后再交给被请求的部分  

(2) 在Web应用将数据返回到用户之前，过滤器进行拦截和处理，然后再交给用户  
  
### 运行时简介

* 过滤器可以有 0个或多个，顺序按照web.xml中声明的先后顺序进行处理（可以理解为多面墙，请求到来时先通过A墙，再通过B墙；响应发送时，先通过B墙，再通过A墙）

* 所有过滤器都要实现 javax.servlet.Filter接口，这个接口中包括3个方法  
(1) init()  

生成过滤器对象时调用，主要完成初始化工作  

(2) destroy()  

过滤器对象被销毁时调用，释放过滤器对象所占用的资源  

(3) doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain)  

完成过滤功能。 处理request可以完成作用1， 处理response可以完成作用2， 调用FilterChain的doFilter()方法可以调用下一个过滤器的doFilter()方法，直到无过滤器可调用，处理请求的Servlet或JSP  

代码示例：

``` java
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

* 注意:在Filter的doFilter方法内如果没有执行doFilter(request, response)方法，那么服务器中的资源是不会被访问到的。

``` xml
<filter>
        <filter-name>MyFilter</filter-name>
        <filter-class>com.boyikj.MyFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>MyFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
```

表示全路径匹配，Filter的全路径匹配只支持/*，不支持/  

将项目部署到tomcat并启动成功之后，会在控制台中看到下面信息：  
初始化  

访问项目，会在控制台中看到下面信息：  
过滤请求  
过滤响应  

正常关闭tomcat，会在控制台中看到下面信息：
销毁  

通过上面的操作，可以得出Filter的生命周期如下：  

当服务器启动，会创建Filter对象，并调用init方法，只调用一次.  
当访问资源时，路径与Filter的拦截路径匹配，会执行Filter中的doFilter方法，这个方法是真正拦截操作的方法.  
当服务器关闭时，会调用Filter的destroy方法来进行销毁操作.  
一个Filter的生命周期跟servlet有些类似，需要经历初始化—>doFilter—>销毁三个过程。  

#### dispatcher 标签
在 filter-mapping 中还有一个子标签 dispatcher ，用于设置过滤器所过滤的请求类型。
其有四种取值：REQUEST、FORWARD、INCLUDE、ERROR，默认是REQUEST
* FORWARD
若请求是由一个 Servlet 通过 RequestDispatcher 的 forward()方法所转发的， 那么这个请求将被值为 FORWARD 的 Filter 拦截。即当前 Filter 只会拦截由RequestDispatcher 的 forward()方法所转发的请求。其它请求均不拦截。
* INCLUDE
当前 Filter 只会拦截由 RequestDispatcher 的 include()方法所转发的请求。其它请求均不拦截
* ERROR
在 web.xml 中可以配置错误页面 error-page ，当发生指定状态码的错误后，会跳转到指定的页面。而这个跳转同样是发出的请求。若的值设置为 EEROR，则当前过滤器只会拦截转向错误页面的请求，其它请求不会拦截。

以上就是servlet过滤器了。下节我们学习一下servlet监听器