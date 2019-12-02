# 第01节：JDBC概述

本章我们来学习jdbc操作数据库

### 一、什么是JDBC？

JDBC是java database connectivity的缩写，是SUN公司提供的一套操作数据库的标准规范。JDBC提供一些操作数据的API，开发者可以在java中使用这些API操作数据库，实现对表中数据的增删改查操作，**JDBC相当于java和数据库之间的一座桥梁。**
SUN公司制定了JDBC标准，各大数据库厂商会提供数据库驱动现这个标准，这样java才可以通过JDBC来操作实现了这个标准的数据库。如果将JDBC看做是接口的话，数据库厂商提供的数据库驱动就是这个接口的实现类。各个数据库厂商会将各自的数据库驱动打成jar包对外发布，开发者在使用时需要下载与当前数据库匹配的数据库驱动jar包。

### 二、为什么使用JDBC

我们为什么使用JDBC呢？
JDBC规范让Java程序和数据库驱动实现了松耦合，使切换不同的数据库变得更加简单。  
 ![介绍图](..\images/1001_gf1.png)

### 三、JDBC的四个核心接口

DriverManager:用于注册驱动并创建符合该驱动的数据库的连接。
Connection: 表示与数据库创建的连接对象，即一个connection对应着一个会话，相当于在mysql workbench中打开了一个连接。
Statement: 操作数据库sql语句的对象，有个两个实现类：Statement和PreparedStatement（常用）。
ResultSet: 从数据库中查询的结果集。

基本上通过使用上面4个接口就能使用java实现对数据库的增删改查了。  

![接口](..\images/1001_gf2.png)

### 四、总结

本节我们了解了JDBC的概念，下节我们学习以下链接数据库的代码写法。
