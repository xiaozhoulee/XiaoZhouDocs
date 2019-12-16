# 第05节：servlet监听器

### 一、什么时监听器？

监听器和过滤器相似，既然既然它叫监听器，那它时监听什么的呢？  
servlet中的监听器是用于监听web常见对象HttpServletRequest,HttpSession,ServletContext。主要有下面三个作用：

* 1.监听web对象创建与销毁。
* 2.监听web对象的属性变化，添加、删除、修改。
* 3.监听session绑定javaBean操作，活化（从硬盘读取到内存）与钝化（从内存持久化到硬盘）操作。
* 监听web对象的创建与销毁
  * ServletContextListener
  * HttpSessionListener
  * ServletRequestListener
* 监听web对象的属性变化
  * ServletContextAttributeListener
  * HttpSessionAttributeListener
  * ServletRequestAttributeListener
* 监听session绑定javaBean操作
  * HttpsessionBindingListener
  * HttpSessionActivationListener
* 监听session绑定javaBean操作的监听器
  * HttpSessionBindingListener
  * HttpSessionActivationListener

### 二、监听器的创建和使用步骤

* 1.创建一个类，实现指定的监听器接口
* 2.重写接口中的方法
* 3.在web.xml文件中配置监听器

#### 监听对象的创建和销毁

下面演示监听HttpServletRequest对象的销毁和创建。  
1.创建一个类实现ServletRequestListener接口：

``` java
package com.listener;
import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;
public class MyRequestListener implements ServletRequestListener {
    @Override
    public void requestDestroyed(ServletRequestEvent sre) {
    }

    @Override
    public void requestInitialized(ServletRequestEvent sre) {
    }

}
```

2.重写接口中的方法：

``` java
public class MyRequestListener implements ServletRequestListener {
    @Override
    public void requestDestroyed(ServletRequestEvent sre) {
        System.out.println("request对象被销毁");
    }

    @Override
    public void requestInitialized(ServletRequestEvent sre) {
        System.out.println("request被创建");
    }

}
```

3.在web.xml文件中配置监听器

``` xml
    <listener>
        <listener-class>com.listener.MyRequestListener</listener-class>
    </listener>
```
当客户端发送请求时，就可以看见控制台打印出的”request对象被销毁”和”request被创建”。  

同理，在监听HttpSesssion对象的创建与销毁时，需要创建一个类实现HttpSessionListener接口并重写里面的方法。
什么情况下会销毁session：  

* 默认超时 30分钟
* 关闭服务器
* invalidate()方法
* setMaxInactiveInterval(int interval) 可以设置超时时间

在监听ServletContext对象的创建与销毁时，创建一个类实现ServletContextListener接口并重写里面的方法即可。

#### 监听属性的变化

以监听在HttpServletRequest对象中添加、修改、删除属性为例：  
1.创建一个类实现ServletRequestAttributeListener接口：  

``` java
package com.xiaozhoukj;

import javax.servlet.ServletRequestAttributeEvent;
import javax.servlet.ServletRequestAttributeListener;

public class MyRequestAttributeListener implements ServletRequestAttributeListener {

    @Override
    public void attributeAdded(ServletRequestAttributeEvent srae) {
    }

    @Override
    public void attributeRemoved(ServletRequestAttributeEvent srae) {
    }

    @Override
    public void attributeReplaced(ServletRequestAttributeEvent srae) {
    }


}
```

2.重写接口中的方法：  

``` java
package com.xiaozhoukj;

import javax.servlet.ServletRequestAttributeEvent;
import javax.servlet.ServletRequestAttributeListener;

public class MyRequestAttributeListener implements ServletRequestAttributeListener {

    @Override
    public void attributeAdded(ServletRequestAttributeEvent srae) {
        System.out.println("向request中添加了一个属性");
        System.out.println("属性名："+srae.getName());
        System.out.println("属性值："+srae.getValue());
    }

    @Override
    public void attributeRemoved(ServletRequestAttributeEvent srae) {
        System.out.println("从request中删除了一个属性");
        System.out.println("属性名："+srae.getName());
        System.out.println("属性值："+srae.getValue());
    }

    @Override
    public void attributeReplaced(ServletRequestAttributeEvent srae) {
        System.out.println("修改了request中的一个属性");
        System.out.println("属性名："+srae.getName());
        System.out.println("属性值："+srae.getValue());
    }
}
```

3.在web.xml文件中注册监听器：  

``` xml
 <listener>
        <listener-class>com.xiaozhoukj.MyRequestAttributeListener</listener-class>
    </listener>
```

4.创建index.jsp:

``` jsp
  <body>
  <%
    request.setAttribute("name", "xiaozhoukj");
    request.setAttribute("name", "admin");
    request.removeAttribute("name");
  %>
  </body>
```

当客户端访问index.jsp时，在控制台可以看到下面内容：  

``` html
向request中添加了一个属性
属性名：name
属性值：xiaozhoukj
修改了request中的一个属性
属性名：name
属性值：admin
从request中删除了一个属性
属性名：name
属性值：admin
```

#### 监听session绑定javabean

 监听ServletContext和HttpSession中的属性变化的操作同上。

 ttpSessionBindingListener监听器可以使javaBean对象在被绑定到会话或从会话中取消对它的绑定时得到通知。该监听器是由实体类来实现，需要注意的是该监听器的实现类不需要在web.xml文件中进行配置。

 1.创建Student类实现HttpSessionBindingListener接口：

 ``` java
 package com.boyikj;
import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;
public class Student implements HttpSessionBindingListener {
    @Override
    public void valueBound(HttpSessionBindingEvent event) {
    }
    @Override
    public void valueUnbound(HttpSessionBindingEvent event) {
    }
}

 ```

 2.重写接口中的方法

``` java
package com.boyikj;
import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;
public class Student implements HttpSessionBindingListener {
    private String name;
    private int age;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    @Override
    public void valueBound(HttpSessionBindingEvent event) {
        System.out.println("Student对象被添加到session中");
    }
    @Override
    public void valueUnbound(HttpSessionBindingEvent event) {
        System.out.println("Student对象从session中被删除了");
    }
}
```

3.在index.jsp中添加下面代码：  

``` jsp
<%
  Student s = new Student();
  session.setAttribute("student", s);
  session.removeAttribute("student");
%>
```

当客户端访问index.jsp时，会在控制台中看到下面信息：  

``` html
Student对象被添加到session中
Student对象从session中被删除了
```

#### 监听在 Session 中存放的指定类型对象的钝化与活化

HttpSessionActivationListener该监听器用于监听在 Session 中存放的指定类型对象的钝化与活化。  
钝化是指将内存中的数据写入到硬盘中，而活化是指将硬盘中的数据恢复到内存。当用  
户正在访问的应用或该应用所在的服务器由于种种原因被停掉，然后在短时间内又重启，此时用户在访问时 Session 中的数据是不能丢掉的，在应用关闭之前，需要将数据持久化到硬盘中，在重启后应可以立即重新恢复 Session 中的数据。这就称为 Session 的钝化与活化。  
那么 Session 中的哪些数据能够钝化呢？只有存放在 JVM 堆内存中的实现了 Serializable  
类的对象能够被钝化。也就是说，对于字符串常量、基本数据类型常量等存放在 JVM 方法  
区中常量池中的常量，是无法被钝化的。  
对于监听 Session 中对象数据的钝化与活化，需要注意以下几点：  

* 实体类除了要实现 HttpSessionActivationListener 接口外，还需要实现 Serializable 接口。
* 钝化指的是 Session 中对象数据的钝化，并非是 Session 的钝化。所以 Session 中有几个可以钝化的对象，就会发生几次钝化。
* HttpSessionActivationListener 监听器是不需要在 web.xml 中注册的。
* 服务器重启用户session信息保存和恢复（服务器维护需要）  
1.创建Person类实现HttpSessionActivationListener和Serializable接口：  

``` java
package com.boyikj;
import  java.io.Serializable;
import javax.servlet.http.HttpSessionActivationListener;
import javax.servlet.http.HttpSessionEvent;

public class Person implements HttpSessionActivationListener, Serializable {
    private String name;
    private int age;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }

}

```

2.重写HttpSessionActivationListener接口中的方法：
``` java 
package com.boyikj;
import  java.io.Serializable;
import javax.servlet.http.HttpSessionActivationListener;
import javax.servlet.http.HttpSessionEvent;

public class Person implements HttpSessionActivationListener, Serializable {
    private String name;
    private int age;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public void sessionWillPassivate(HttpSessionEvent se) {
        System.out.println("钝化"+se.getSession().getId());
    }
    @Override
    public void sessionDidActivate(HttpSessionEvent se) {
        System.out.println("活化"+se.getSession().getId());
    }

}
```

3.在index.jsp编写以下内容

``` jsp
 <%
    Person p = new Person();
    session.setAttribute("person", p);
  %>
```

将数据持久化到硬盘中，

4.在项目中的META-INF目录下创建一个content.xml的文件，在里面写上下面内容：

``` xml
<Context>
    <Manager className="org.apache.catalina.session.PersistentManager" maxIdleSwap="1">
        <Store className="org.apache.catalina.session.FileStore" directory="d:/a"/>
    </Manager>
</Context>  
```

通过上面的设置，可以将session钝化和活化。
启动tomcat访问index.jsp文件(默认访问地址就是index.jsp)，之后正常关闭tomcat后可以看见控制台输出”钝化”。再次启动tomcat，可以看到控制台输出”活化”。  

让服务器启动的时候读取或者配置server.xml(   <Host name="localhost"  appBase="webapps")改平台

#### 解析xml文件

自定义xml文件

``` xml
<context path="/项目名" docbase=" webroot右键+location(E:\javaEcilpose\onlineWeb\WebRoot)">
<manager classname="org.apache.catalina.session.PersistentManager"   saveOnRestart="true"(是否保存) maxActiveSessions="1" (最大的session)>
<Store className="org.apache.catalina.session.FileStore"(不能变化的) directory="d:/a"(数据存储的路径)>
```

自定义xml文件结束

### 三、总结

以上内容就是servlet监听器了，下一节学习的内容是servlet上传文件。