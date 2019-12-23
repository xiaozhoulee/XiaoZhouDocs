# 第03节：jsp基础

### 一、什么是jsp？

上节我们学习了编辑servlet类，我们再看一下目录，会发现，在web目录下还存在着JSP文件，JSP是什么呢？本节我们就来学习JSP  

JSP全称是Java Server Pages，是一种动态网页技术，JSP其实就是在html中插入了java代码和JSP标签之后形成的文件，文件名以.jsp结尾

### 二、jsp工作流程

将JSP文件转换为.java文件并将其编译为.class文件的过程都是由tomcat完成的，在tomcat内部有一个翻译引擎，当JSP页面第一次被访问时由翻译引擎转换为.java文件并编译出.class文件。之后再运行该class文件。
在JSP中的html代码都会翻译到servlet中的out.write()中。

### 三、第一个jsp程序

接下来带大家写第一个jsp程序。

首先使用IDEA创建一个servlet项目，然后将index.jsp文件修改如下，然后启动服务器，就可以看到当前的时间了。

``` jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.*" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>
  <h1>显示时间</h1>
  <%
    Date d = new Date();
    out.write(d.toLocaleString());
  %>
  </body>
</html>
```

大家可以看出来，JSP页面和html页面是很相似的，但是jsp中还包含着java代码。

### 四、jsp基本语法

* 注释

``` jsp
<!-- html注释：可以在客户端Elements显示 -->
<%-- jsp注释：不能在客户端Elements显示 --%>
```

* 嵌入java代码

``` jsp
<%
    Date d = new Date();
    out.write(d.toLocaleString());
%>
<%! private int a = 10; %>
<%!
    public void m1(){
        System.out.println("m1方法");
    }
%>
<% m1();%>

<% int a = 1024;%>
<%= a %>
<%= "monkey1024" %>
```

* <%= %>  
该标签中的内容可以直接在JSP中输出变量、常量等，里面的内容是不用分号结尾的，会被JSP引擎直接翻译到_jspService方法中的out.write()方法中输出  

* <%! %>  
如果想要在JSP中声明方法或静态代码块等内容的话可以使用该标签，在该标签中不能直接编写普通的Java语句，一般情况下不建议使用这个标签，因为JSP是在单线程环境下运行的，所以在这部分中的变量可能会有线程安全问题

### 五、jsp中的内置对象

为了便于开发者的使用，在JSP引擎将JSP翻译为.java文件时，会提供9个与web开发相关的对象被称为JSP中9个内置对象，开发者在JSP中可以直接使用这些对象调用的方法，这九个内置对象的引用名分别是：pageContext，request,session,application,response,config,out,page,exception。  
![dx](..\images/1203_dx.png)  
通过查看源码可以看到这些对象的定义。  
有的内置对象咱们已经用过了，比如out输出流对象。
而有些内置对象开发中基本不会使用。
![dx](..\images/1203_ym.png)  

* pageContext
页面上下文，通过该对象中的setAttribute和getAttribute方法设置访问范围只在当前页面中有效的数据，不过在当前页面范围中，数据都是可以直接使用的，所以该对象不常用
* out
该类型继承了IO流中的Writer，所以out是一个输出流对象，使用方法上跟PrintWriter类似。
* page
通过源码中可以看到，将this赋值给page，所以该对象就是servlet自己，在实际应用中不常使用
* exception
该对象通常配合page指令使用，后面再详解
* application
该对象和下面的对象的使用方法跟servlet中的一样
* request
* response
* session
* config
  
在开发或学习中，如果需要使用上面的这些java对象时，无需自己创建，直接拿来使用就是了。这九个JSP的内置对象一定要记住，有时面试的时候会问到。

<!-- 在jsp技术中，有些变量是需要声明之后才能应用的，而有些变量不需要在jsp的脚本语言里声明就能够使用的，被称为jsp页面的内置对象，内置对象有request、response、session、application；下面逐个进行介绍。   -->

<!-- 一、request对象  

顾名思义，request是处理请求信息的对象；用户和服务器之间进行交互是通过遵守“http协议”进行的，“http协议”又叫“请求与响应”协议，当用户通过在浏览器地址栏里输入服务器的地址和页面的名字来请求该页面时，就向服务器发送了一个请求，这个请求里包含了客户的请求信息，被封装在request对象里，通过request对象的响应方法来调取信息；  

（1）、request对象获取用户的提交信息  

当用户用form表单向服务器提交信息时，该信息会被tomcat封装在request对象里；request通过getRequest()方法来获取这些信息，getRequest（）也是request对象许多方法中最常用的方法，下面用例子来进行说明：  

``` jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.*" %>
<!DOCTYPE html PUBLIC"-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/htm14/loose.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF -8">
  <title>Insert title here</title>
</head>
<body>
<form action="" method="get" name="form1">
  <input type="text" name="text1" size="30">
  <input type="submit" name="sub1"value="提交">
</form>
<%String str1=request.getParameter("text1");
  try {
    double m = Double.parseDouble(str1);
    double n = Math.sqrt(m);
    out.println(str1 + "的平方跟是：" + n);
  }catch(Exception e){out.println( "请排入一个要计算开方的整数");}
%>
</body>
</html>
```
![n](../images/1203_inp.jpg)  
注意:此处代码的第18行必须加入异常处理，因为当第一次打开页面时变量str1为空值，此时不能作类型转换。  

*  getProtocol():获取请求使用的通信协议；
*  getServletPath():获取请求的jsp页面所在的目录；
*  getContentLength():获取http请求的长度；
*  getmethod():获取表单提交信息的方式；
*  getHeader(String s):获取请求中头的一个值；
*  getHeaderNames():获取头名字的一个枚举；
*  getRemoteAddr():获取客户的IP地址；
*  getRemoteHost():获取客户机的名称（如果获取不到就获取IP地址）；
*  getServerName():获取服务器的名称；
*  getServerPort():获取服务器的端口号；
*  getParameterNames():获取表单提交的信息体部分中name参数值的一个枚举；

二、response对象  

和request对象相对应的是response对象，这个对象用来设置服务器对用户的回应信息；  

（1）改变contentType属性的值

在page指令中，contentType属性只能被赋值一次，但在动态的回应用户这方面是极不方便的，而通过response对象的setContentType（String s）方法就可以实现这一点，其中s可以取值为text/html,text/plain,image/gif,image/jpeg,image/x-xbitmap,image/pjpeg,application/x-shockwave-flash,application/vnd.ms-powerpoint,application/vnd.ms-excel,application/msword等，实例如下：
 -->

### 六、总结

通过本节，同学们了解了什么是jsp，并且学会了jsp基本语法，知道了jsp中包含着九种内置对象，至于一些不懂的内置对象使用方法，后续会讲解使用的。我们要记住九种内置对象，面试时可能会考。  

下一节我们学习servlet注解。