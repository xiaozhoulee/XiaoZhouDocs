# 第04节：servlet3.0添加的特性-注解

上一节我们学习了jsp的使用方法，本节我们学习servlet注解。

### 一、什么是servlet注解？它有什么好处？

在JavaEE6规范中添加了了Servlet3.0 规范，该规范中允许在定义 Servlet时使用注解，而不用在web.xml 进行注册了。  

通俗的说就是，咱们之前第02节的案例是在web.xml中配置跳转的，会很麻烦。而使用servlet3.0注解来跳转就很方便了。

### 二、servlet注解值介绍

使用@WebServlet()注解注册一个servlet，该注解中有多个属性，常用属性如下：  

属性名|类型|说明
|:--:|:--:|:--:|
urlPatterns | String [] |相当于web.xml中配置的url-pattern的值(里面填写跳转地址)
value | String [] |与urlPatterns意义相同，不能与urlPatterns属性同时使用
name|字符串|相当于servlet名称的值
<!-- loadOnStartup | int |相当于loadOnStartup，交替数值-1 -->
initParams | WebInitParam [] |相当于init-param标签。其类型为另一个注解(后面用到就会懂了)

### 三、实际应用

在代码中加入：  

``` java
@WebServlet(value={"/test","/abc/test"},
        name="testServlet")
```

回顾02节，配置web.xml那一步咱们可以直接使用注解的方法。

``` java

import javax.servlet.annotation.WebServlet;
import java.io.IOException;
    @WebServlet(value={"/test","/abc/test"},
            name="Servlet")
    public class Servlet extends javax.servlet.http.HttpServlet {
        // 接收post请求
        protected void doPost(javax.servlet.http.HttpServletRequest request,
        javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException,
        IOException {
            doGet(request,response);
        }
        //接受get请求
        protected void doGet(javax.servlet.http.HttpServletRequest request,
        javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException,
        IOException {
            response.getWriter().write("hello servlet");
        }
    //接受put请求
    //接受delete请求
    //在开放中常用post和get请求，很少使用put和delete请求
}
```

### 四、总结

本节咱们学习了注解的写法，以后咱们用注解的方法，不要在web.xml中注册配置。下一节学习cookie与seesion。