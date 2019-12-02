# 第02节：安装tomcat

上节我们介绍了服务器，本节我们就来安装常用的web服务器软件tomcat，让服务器启动吧！  

### 一、tomcat安装方法

tomcat是开源的web服务器，由java语言编写，可以去tomcat官网：[http://tomcat.apache.org/](http://tomcat.apache.org/) 中下载。  
或者去网盘中下载：[http://pan.baidu.com/s/1c18VOwo](http://pan.baidu.com/s/1c18VOwo)。  
其中建议大家使用免安装版的tomcat，在网盘下载后直接解压即可，解压目录最好不要带有中文和空格。

#### tomcat版本

tomcat版本对应着SERVLET/JSP规范和JDK版本。  

TOMCAT版本|SERVLET/JSP规范|JDK版本
|----|----|----|
tomcat9.X|4.0/TBD|8+
tomcat8.X|3.1/2.3|7+
tomcat7.X|3.0/2.2|6+

### 二、tomcat的启动

下载好tomcat后解压tomcat  

双击tomcat解压目录下的bin\startup.bat即可启动tomcat。  
停止tomcat：双击tomcat解压目录下的bin\shutdown.bat即可停止tomcat。  
测试tomcat是否启动成功: 在浏览器中输入：http://localhost:8080/ 如果加载出Apache Tomcat的页面，即说明启动成功。  
如果在启动tomcat时报出了

``` java
java.net.BindException: Address already in use: bind
```

则说明tomcat端口号被占用了。导致这个问题出现的原因有两个：  

* 启动了两个tomcat  
解决办法：在任务管理器中找到进程名称为java的，手动杀死进程。（如果有多个进程名称是java的，注意不要杀错了，选择tomcat的杀掉）。  
* 端口号8080被其他应用程序占用  
解决办法：修改tomcat的默认端口号，打开conf目录下的server.xml文件，找到下面代码，将8080修改为别的端口号之后，例如修改为8888，再次启动tomcat。

``` java
  Connector port="8080" protocol="HTTP/1.1"
             connectionTimeout="20000"
             redirectPort="8443" 
```

### 三、tomcat文件目录介绍

* bin
存放启动和关* 闭等Tomcat脚本文件
* conf
配置文件
* lib
存放Tomcat服务器的支撑jar包
* logs
存放日志文件
* temp
存放Tomcat运行时产生的临时文件
* webapps
web应用所在目录，供外界访问的web资源存放的目录
* work
tomcat工作目录

### 四、总结

本节我们安装了tomcat，并且成功在目录中启动了tomcat，并且了解了tomcat的目录文件。下一节我们通过IDEA配置一下tomcat，使tomcat可以在IDEA中启动。