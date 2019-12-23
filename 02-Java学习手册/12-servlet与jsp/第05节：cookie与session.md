# 第05节：cookie与seesion

上一节我们学习了注解写法，本节我们学习cookie与seesion。

### 一、为什么要使用cookie？  

http协议是无状态的，也就是说我们访问同一个网站的a页面和b页面，这两次访问是毫无关系的。但是如果我们访问一个电商网站，在登录页输入我们的用户名和密码，在购物车页面就可以看到我们希望买的商品了，既然http协议是无状态的，那么网站是如何知道登录页和购物车页是有关联的呢，这就需要用到cookie了。

### 二、怎么使用cookie？

在javax.servlet.http包下有个名为Cookie的类，通过该类就可以向客户端设置cookie数据了。  
下面是代码的写法。可以参考一下

``` java
//        1.创建Cookie对象   ("name","value")
        Cookie c =new Cookie("msg","hello");
//        2.发送Cookie
        response.addCookie(c);
//        3.获取cookie
        Cookie[] cs =request.getCookies();
        //获取数据遍历打印在控制台
        if(cs !=null){
            for (Cookie c: cs){
                String name =c.getName();
                String value =c.getValue();
                System.out.println(name+":"+value);
            }
```

### 三、案例演示

cookie存储在我们的浏览器中，当我们访问一个路径，例如 /test/cookie01 我们后台可以给这次响应添加个cookie，然后我们再次访问这个网站 /test 的其他页面，例如/test/cookie02，就都会带着这个cookie了，示例代码如下所示，我们分别在两个Servlet类中设置cookie和读取cookie：

创建CookieDemo01类
``` java
/**
 * 添加客户端请求中携带的Cookie
 */
package com.xiaozhoubg;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/test/cookie01")//绑定访问网址
public class CookieDemo01 extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //创建cookie
        Cookie cookie1 = new Cookie("username","xiaozhoubg");
        Cookie cookie2 = new Cookie("password","123456");


        //将Cookie添加到相应中
        response.addCookie(cookie1);
        response.addCookie(cookie2);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doPost(request,response);
    }
}

```

创建CookieReceive类

``` java
package com.xiaozhoubg;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 接收客户端请求中携带的Cookie
 *
 */
@WebServlet("/test/cookie02")//绑定访问网址

public class CookieReceive extends HttpServlet {
    private static final long serialVersionUID = 1L;


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Cookie[] cookie = request.getCookies();
        for(Cookie c : cookie){
            System.out.println("name="+c.getName());
            System.out.println("value="+c.getValue());
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}
```

我们先进入网址http://localhost:8080/test/cookie01。这时候网页会带上cookie。下图是谷歌浏览器查看cookie方法。

![浏览器中的cookie](..\images\1205_chcookie.png)

接下来再进入网址http://localhost:8080/test/cookie02。这时候会在IDEA的控制台打印出获取到的cookie。

``` xml
name=password
value=123456
```

### 四、cookie拓展

#### cookie除了默认绑定之外我们还可以手动设置其绑定路径：

``` java
package com.xiaozhoubg;

import javax.servlet.ServletException;
        import javax.servlet.annotation.WebServlet;
        import javax.servlet.http.Cookie;
        import javax.servlet.http.HttpServlet;
        import javax.servlet.http.HttpServletRequest;
        import javax.servlet.http.HttpServletResponse;
        import java.io.IOException;
/**
 * 添加客户端请求中携带的Cookie
 *
 */
@WebServlet("/test/cookie01")//绑定访问网址
public class CookieDemo01 extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //创建cookie
        Cookie cookie1 = new Cookie("username","xiaozhoubg");
        Cookie cookie2 = new Cookie("password","123456");


        //将Cookie添加到相应中
        response.addCookie(cookie1);
        response.addCookie(cookie2);

        //手动设置绑定路径
        cookie1.setPath(request.getContextPath() + "/aaa");
        cookie2.setPath(request.getContextPath() + "/aaa");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doPost(request,response);
    }
}
```

此时会将绑定路径设置为：http://localhost:8080/aaa 即访问的url中包含aaa路径时才会携带cookie数据。

#### 设置cookie的有效时长

默认情况下， Cookie 是保存在浏览器的缓存中的，关闭浏览器后Cookie也就消失了。  
开发者可以通过设置Cookie的有效时长，将Cookie写入到客户端硬盘文件中。  

可以通过下面的方法设置有效时长  

``` java
public void setMaxAge(int expiry)
```

其中expiry的单位为秒，整型。  

大于 0，则表示要将 Cookie 写入到硬盘文件中。  
小于 0，则表示 Cookie 存放在浏览器缓存中，与不设置时长等效。  
等于 0，则表示 Cookie产生后直接失效。  

### 五、代码案例

#### 利用cookie实现一个计数器

``` java
package com.xiaozhoubg;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/test/cookie03")//绑定访问网址
public class CookieDemo02 extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //得到所有的Cookie
        Cookie[] coos=request.getCookies();
        //将计数值初始化
        int visits=0;
        for(int i=0;i<coos.length;i++)
        {
            Cookie coo=coos[i];
        //找到name值为"xiaozhoubg"的Cookie
            if(coo.getName().equals("xiaozhoubg"))
            {
        //得到计数值
                visits=Integer.parseInt(coo.getValue());
                break;
            }
        }
        //计数值增一
        visits++;
        //设置cookie
        Cookie coo=new Cookie("xiaozhoubg",visits+"");
        response.addCookie(coo);

        System.out.println("你已经光临本页"+visits+"次！");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doPost(request,response);
    }
}

```

通过代码中的注释可以理解。  
这就是cookie了，然后学习session。

### 六、什么是session？

在WEB开发中，服务器可以为每个客户端浏览器创建一个session对象，默认情况下一个浏览器独占一个session对象。在实际应用当中，服务器程序可以把一些敏感数据写到用户浏览器独占的session中可以提高安全性，当用户使用浏览器访问其它程序时，其它程序可以从用户的session中取出该用户的数据，为用户服务。

session和cookie的主要区别是：  

* session存储在服务器端  
* cookie存储在客户端  

### 七、如何使用session？

在javax.servlet.http包下有个HttpSession类，通过该类就可以操作session。  
获取Session对象的方式：通过调用request对象中的getSession()方法就可以获取Session对象了，不需要像cookie那样手动new创建。  

#### Session中常用的方法：

* public void setAttribute(String name, Object value)
  该方法用于向 Session 的中放入一个键值对。
* public Object getAttribute(String name)
  该方法用于从 Session 中根据名字获取值。
* public void removeAttribute(String name)
  该方法用于从Session中删除数据。

#### 代码示例：

创建一个名为SessionTest01的servlet用来接收用户传入的数据并放到session对象中：  

``` java
package com.xiaozhoubg;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
@WebServlet("/SessionTest01")
public class SessionTest01 extends HttpServlet {
    //示例代码
    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        String name = request.getParameter("name");
        HttpSession session = request.getSession();
        session.setAttribute("name", name);

        response.getWriter().write("set session");
    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}
```

创建一个名为SessionTest02的servlet从session对象中取得之前用户传入的数据：

``` java
package com.xiaozhoubg;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/SessionTest02")
public class SessionTest02 extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        String name = (String)session.getAttribute("name");
        response.getWriter().write(name);
    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
```

首先访问第一个servlet，在url中写上name的数据：  
http://localhost:8080/SessionTest01?name=xiaozhoukj  
再访问第二个servlet：  
http://localhost:8080/SessionTest02  
在网页中可以看到传入的name数据  
  
再打开另外一个浏览器直接访问第二个servlet：
http://localhost:8080/SessionTest02  
此时控制台中打印的结果是null

##### 这说明Web开发中的 Session机制会为每个浏览器分配了一个 Session。即一个浏览器一个 Session，不同的Session之间的数据不能共享。

### 八、session工作原理  

服务器会为每个浏览器分配一个session，每个浏览器只能访问自己的session对象，可http协议是无状态的，那服务器是如何识别这些浏览器的呢？
服务器对Session对象是以Map的形式进行管理的，每创建一个session对象，服务器都会向该Map中的 key放入一个32位长度的随机串，这个随机串称为JSessionID， 之后将该session对象的引用放入到map的value中。
session放入到Map之后，服务器还会自动将”JSESSIONID”作为 name，32位长度的随机串作为value，放到cookie中并发送到客户端。该cookie会默认放到浏览器的缓存中，只要浏览器不关闭就一直存在。
当浏览器第二次向服务器发送请求时会携带该cookie，服务器接收到之后会根据JSessionID从Map中找到与之对应的session对象。

#### 九、Session的失效  

若某个Session 在指定的时间范围内一直未被访问，那么 Session 将超时，即将失效。在 web.xml 中可以通过标签设置 Session 的超时时间，单位为分钟。默认 Session 的超时时间为 30 分钟。这个时间并不是从 Session 被创建开始计时的生命周期时长，而是从最后一次被访问开始计时，在指定的时长内一直未被访问的时长。

``` xml
 <!-- 设置失效时间为60分钟 -->
 <session-config>
      <session-timeout>60</session-timeout>
 </session-config>
 ```

可以在servlet中调用session中的invalidate()方法使session失效：

``` xml
//使session失效
session.invalidate();
```

<!-- #### 数据空间范围对比
在 JavaWeb 编程的 API 中，存在三个可以存放数据的空间范围对象，这三个对象中所
存储的数据作用范围，由大到小分别为：
ServletContext—>HttpSession—>HttpServletRequest
ServletContext，即application，置入其中的数据是整个web应用范围的，可以完成跨会话
共享数据。
HttpSession，置入其中的数据是会话范围的，可以完成跨请求共享数据。
HttpServletRequest，置入其中的数据是请求范围的，可以完成跨 Servlet 共享数据。
但这些 Servlet 必须在同一请求中。
对于这三个域属性空间对象的使用原则是，在可以保证功能需求的前提下，优先使用小
范围的。这样不仅可以节省服务器内存，还可以保证数据的安全性。   -->

### 十、总结

<<<<<<< HEAD
以上就是cookie和seession的讲解了，[点击查看本节代码案例](https://github.com/xiaozhoulee/java-examples/tree/master/12-servlet%E4%B8%8Ejsp/%E7%AC%AC05%E8%8A%82%EF%BC%9Acookie%E4%B8%8Esession/javaee%20cs)
=======
以上就是cookie和seession的讲解了，[点击查看本节代码案例](https://github.com/xiaozhoulee/java-examples/tree/master/12-servlet%E4%B8%8Ejsp/%E7%AC%AC%E5%9B%9B%E8%8A%82%EF%BC%9Acookie%E4%B8%8Esession/javaee%20cs)
>>>>>>> liaofeng
