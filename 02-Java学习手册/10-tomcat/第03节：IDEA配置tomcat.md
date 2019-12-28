# 第03节：IDEA配置tomcat

上一节我们在目录中启动了tomcat，本节我们在IDEA项目中配置tomcat，这样以后我们在IDEA中启动tomcat会更方便。

### 一、tomcat环境变量配置

在IDEA配置之前，首先我们先配置tomcat环境变量，让以后运行更方便。  

1.安装完成后，右击“我的电脑”，点击“属性”，选择“高级系统设置，点击“环境变量”。  

![hjbl](..\images/1103_hj1.jpg)

2.在“系统变量”中添加系统变量  

CATALINA_BASE，CATALINA_HOME；  

变量名：CATALINA_BASE  
变量值：D:\winwxy\apache-tomcat-8.5.34-windows-x64 <!-- 你的Tomcat安装目录 -->  
变量名：CATALINA_HOME  
变量值：D:\winwxy\apache-tomcat-8.5.34-windows-x64  
![hjbl](..\images/1103_hj2.png)  
点击确定  

3.此处还需修改ClassPath和Path的变量值。  

在ClassPath的变量值中加入：%CATALINA_HOME%\lib\servlet-api.jar;（注意加的时候在原变量值后加英文状态下的“;”）  

![hjbl](..\images/1103_hj3.png)  

在Path的变量值中加入：%CATALINA_HOME%\bin;%CATALINA_HOME%\lib（注意加的时候在原变量值后加英文状态下的“;”）  

![hjbl](..\images/1103_hj4.png)  

点击确定，Tomcat就配置好了。  

4.此处需要验证一下。  

点击"开始"->"运行"，键入"cmd"（或快捷键win+R）；键入命令: startup，出现以下信息，说明环境变量配置成功；  

![hjbl](..\images/1103_hj5.png)  

可以看到我们配置了环境变量以后可以在cmd命令行中启动tomcat了。

### 二、在IntelliJ IDEA配置Tomcat

1.点击Run---EDit Configurations...

![pz](..\images/1103_pz.png)  

2.点击左侧“+”号，找到Tomcat Server---Local（若是没有找到Tomcat Server 可以点击最后一行 34 items more）  

![pz](..\images/1103_pz2.png)  
![pz](..\images/1103_pz3.png)  

3.在Tomcat Server -> Unnamed -> Server -> Application server项目下，点击 Configuration ，找到本地 Tomcat 服务器，再点击 OK按钮。
![pz](..\images/1103_pz4.png)  

至此，IntelliJ IDEA就成功配置Tomcat。

### 三、总结

到这里咱们的IDEA软件成功配置上了tomcat，下面的章节会用到IDEA启动tomcat的，下一章节学习的内容是servlet与jsp。