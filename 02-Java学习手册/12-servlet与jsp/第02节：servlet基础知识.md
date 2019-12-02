# 第02节：servlet基础知识

### 一、创建servlet类

上节我们了解了servlet概述和启动项目，本节我们来学习一下如何编辑servlet类

* 右键点击src目录 new => package 创建一个包（例如com.xiaozhoubg）
* 右键点击包目录 new => servlet创建之后代码如下所示。

``` java
package com.xiaozhoubg;

import java.io.IOException;


public class Servlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }
}

```

图中红色报错信息选择自动下载相关模块，如下图所示：
![add](..\images/1202_redadd.png)

* 同时修改web->WEB-INF->web.xml文件如下所示：

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <servlet>
        <servlet-name>Servlet</servlet-name>
        <servlet-class>com.xiaozhoubg.Servlet</servlet-class>
    </servlet>
<!-- 写入servle映射模块↓ -->
    <servlet-mapping>
        <servlet-name>Servlet</servlet-name>
        <!-- servlet-name 这个标签里面填写的是文件的名字 -->
        <url-pattern>/test</url-pattern>
        <!-- url-pattern 这个标签里填写的是servlet网页跳转地址 -->
    </servlet-mapping>
</web-app>
```

### 二、编辑servlet类

修改servlet类如下所示,可以处理常用的请求方法：

``` java
package com.xiaozhoubg;
import java.io.IOException;
public class Servlet extends javax.servlet.http.HttpServlet {
    // 接收post请求
    protected void doPost(javax.servlet.http.HttpServletRequest request,
    javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        doGet(request,response);
    }
    //接受get请求
    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        response.getWriter().write("hello servlet");
    }
    //接受put请求
    //接受delete请求
    //在开放中常用post和get请求，很少使用put和delete请求
}

```

启动项目，访问http://localhost:8080/test，可以看到网页中显示hello servlet。

<!-- ### 三、获取请求参数

通过request.getParameter()方法可以获取post请求和get请求的参数。

``` java
package com.xiaozhoubg;

import java.io.IOException;

public class Servlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        String p = request.getParameter("username");
        response.getWriter().write(p);
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        String p = request.getParameter("query");
        response.getWriter().write(p);
    }
}

``` -->

### 三、总结

本节我们利用servlet+tomcat启动了项目并且在网页上打印出了hello servlet。  

下一节我们学习jsp，学习jsp后我们再进一步学习servlet。