# 第01节：Java简介

从本节开始我们就跨入到Java之路了，那么我们为什么学习Java呢？一个网页项目区分前台与后台，前台是html，css，js。后台就可以用Java实现效果，目的是利用JavaWEB，做出网页后端的效果。  
众多后台语言中选择Java
如果有JS或Vue一定基础的同学再学Java会相对更简单一些。

### 一、Java语言发展史

学习之前同学们先来了解一下Java的漫长发展史吧。  
Java这门语言是由James Gosling创建的，现在Java有Oracle公司运营。  

Java是一种广泛使用的计算机编程语言，拥有跨平台、面向对象、泛型编程的特点，广泛应用于企业级Web应用开发和移动应用开发。  

1994年夏天，互联网和浏览器的出现不仅给广大互联网的用户带来了福音，也给Oak语言带来了新的生机。Gosling立即意识到，这是一个机会，于是对Oak进行了小规模的改造，到了1994年秋，小组中的Naughton和Jonathan Payne完成了第一个Java语言的网页浏览器：WebRunner.Sun公司实验室主任Bert Sutherland 和技术总监Eric Schmict 观看了该浏览器的演示，对该浏览器的效果给予了高度评价。当时的Oak这个商品已经被注册，于是只得将Oak更名为Java。  

Sun公司在1995年年初发布了Java语言，Sun公司直接把Java放到互联网上，免费给大家使用，甚至连源代码也不保密，也放到互联网上向所有人公开。  

几个月后，让所有人都吃惊的事情发生了：Java成了互联网上最热门的宝贝。竟然有10万多人次访问了Sun公司的网页，下载了Java语言。然后，互联网上立即就有了数不清的Java小程序（也就Applet）,演示着各种小动画、小游戏等。Java 语言终于眼眉吐气了 ，成为了一种广为人知的编程语言。

### 二、Java版本介绍

JavaSE有很多个版本。  
JavaSE由1.4版本升级到1.5版本时，更名为JavaSE 5.0。后续没有个版本都是按照这个命名方式，现在最新版本是JavaSE13。

* JavaSE 1.4
* JavaSE 5.0(1.5更名为5.0)
* JavaSE 6.0
* JavaSE 7.0
* JavaSE 8.0
* JavaSE 9.0
* JavaSE 10.0
* JavaSE 11.0
* JavaSE 12.0
* JavaSE 13.0

JavaSE主要包括如下内容，后续章节会逐一讲解：

* 基本语法
* 面向对象
* 集合
* IO
* 反射
* 泛型
* 异常
* 多线程
* 正则表达式

### 三、JavaEE概述

Java EE是 J2EE的一个新的名称，之所以改名，目的还是让大家清楚J2EE只是Java企业应用.随着WEB和EJB容器概念诞生，使得软件应用业开始担心SUN的伙伴们是否还在Java平台上不断推出翻新的标准框架
JavaEE提供了企业级的解决方案，学习JavaEE之前要打好JavaSE的基础，JavaEE包括：

* jdbc
* servlet
* jsp

### 四、Java语言的特点

* 分布式 
* 面向对象
* 跨平台
* Java程序运行在Java虚拟机（JVM）中。所以只要在不同平台上安装JVM，他们都能运行相同的Java程序。
* 结构中立 
* 高性能 
* 开源
* 多线程

### 五、搭建Java环境之JDK

JDK是Java Development Kit 的缩写，中文称为Java开发工具包，由SUN公司提供。它为Java程序开发提供了编译和运行环境，所有的Java程序的编写都依赖于它。使用JDK可以将Java程序编写为字节码文件，即.class文件。

### 六、总结

同学们初学Java看到基本概念，可能会有一些心乱迷糊，没有关系，当我们大致学完Java内容，了解体系以后，再回头看这些概念时，就会通透了。  

编写Java文件JDK是必不可少的，否则无法将Java项目启动起来，所以下一节我们来学习JDK的环境搭建。
