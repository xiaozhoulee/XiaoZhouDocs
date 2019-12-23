# 第03节：maven常用命令

### 一、maven 命令介绍

关于这部分内容了解即可，在maven中提供了一些命令，便于我们更便捷的去做一些事情，**在不使用开发工具的情况下需要在pom.xml文件所在的目录地址中去执行这些maven命令。**

* 非组合命令
  * Mvn compile  
    编译的命令
  
  * Mvn clean  
    清除命令，清除已经编译好的class文件，清除的是target目录中的文件
  
  * Mvn test  
    测试命令，该命令会将test目录中的源码进行编译
  
  * Mvn package  
    打包命令，会在target目录中生成打包的文件
  * Mvn install  
    安装命令，会将打好的jar包，安装到本地仓库
  
* 组合命令

  * Mvn clean compile  
    先清空再编译
  
  * mvn clean test命令
    cmd 中录入 mvn clean test命令
  * 组合指令，先执行clean，再执行test，通常应用于测试环节
  
  * mvn clean package命令
   cmd 中录入 mvn clean package命令
   组合指令，先执行clean，再执行package，将项目打包，通常应用于发布前
   执行过程：
  
  ``` html
    清理————清空环境
    编译————编译源码
    测试————测试源码
    打包————将编译的非测试类打包
  ```
  
  * mvn clean install命令  
  cmd 中录入 mvn clean install 查看仓库，当前项目被发布到仓库中
  组合指令，先执行clean，再执行install，将项目打包，通常应用于发布前
  执行过程：  

  ``` html
    清理————清空环境
    编译————编译源码
    测试————测试源码
    打包————将编译的非测试类打包
    部署————将打好的包发布到资源仓库中
    ```

### 二、总结

以上就是maven的常用命令，具体的如何利用maven编译打包部署项目等内容会在后面实例。