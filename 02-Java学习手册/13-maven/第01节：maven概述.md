# 第01节：maven概述


### 一、实际开发中遇到的问题


在实际开发或者学习中你可能遇到过下面的这些问题：

* 同样的代码，为什么在别人那里可以正常编译和运行，拷贝到我本地之后就报错了呢？
* 在使用其他技术的时候需要导入一些jar包，有可能你导入的这些jar包又依赖于另一个技术的jar包，你还需要导入这些jar包。
* 随着项目中使用技术的增多，项目中的jar包也越来越多，这样就会可能会存在一些jar包的冗余。
* 你自己编写了一款jar包，在公司内部有多个项目使用了这块jar包，倘若某天你发现该jar包存在bug，修正后你需要把这个jar包更新到所有相关的项目中。

### 二、什么是Maven？

Maven是Apache旗下一款开源自动化的项目管理工具，它使用java语言编写，同时Maven也是一款跨平台的项目管理工具。
Maven主要功能：

* 项目构建
在实际开发中，不仅仅是写完代码项目就算完成了，后面还有一些诸如：编译，打包，部署等工作要做，这些工作都可以使用maven来完成。
* 依赖管理
说的简单一点就是对jar包的管理，开发者不用再手动的下载所需要的jar包，而是将想要的jar包通过配置一个叫做pom.xml的文件中，之后maven会自动的下载相关的jar包。

### 三、安装Maven

1.下载  
你可以通过maven的官网下载：http://maven.apache.org/  
也可以到我的网盘中下载：https://pan.baidu.com/s/1rajzsTI  
注意：在安装前请确保机器上已经安装了jdk，并且jdk的版本最好是7以上的。  

2.解压  
将maven解压，解压的目录中最好不要含有空格、中文或者其他特殊符号。  
解压后目录如下：  
bin：maven的命令  
boot：含有一个类加载器，通常情况下不使用  
conf：maven的配置文件  
lib：maven的jar包，这里是maven运行时需要的jar包，并非用户在项目中的jar包  

3.配置maven环境变量  
添加一个系统变量：  
变量名：MAVEN_HOME  
变量值：填写你的maven的解压目录，我本地的是：D:\apache-maven-3.5.2  
之后在path中添加;%MAVEN_HOME%\bin  
如果是win7注意前面使用”;”与其他值隔开。如果是win10就不用加”;”了  

4.验证是否配置成功
在cmd中输入mvn -v
如果显示出当前mvn的版本号，则说明maven的安装成功
注意：如果你的cmd一直处于开启状态的话需要重启cmd

### maven配置

安装完成后分为

#### 默认配置

在maven的安装目录的conf文件夹下有一个settings.xml文件，打开后，可以看到有一项：

<!-- localRepository
   | The path to the local repository maven will use to store artifacts.
   |
   | Default: ${user.home}/.m2/repository
  <localRepository>/path/to/local/repo</localRepository>
  -->
改配置是默认注释掉的，其意思是默认情况下，maven仓库的目录地址是在你的${user.home}/.m2/repository文件中，我的地址是：C:\Users\Administrator.m2\repository。${user.home}表示的是你本地电脑的用户名。
你可以在下面自己写一个localRepository标签来为其指定一个目录。
maven仓库目录，就是maven将你项目中所用到的jar包下载的目录地址。

#### 用户配置

可能在你的Windows操作系统中有多个用户，你可以为每个用户设定一个该用户自己的maven仓库地址，即在该用户的的.m2文件夹下复制一份settings.xml文件，然后在文件中指定其仓库地址。  

但是如果设置了用户配置，则默认配置会失效。
