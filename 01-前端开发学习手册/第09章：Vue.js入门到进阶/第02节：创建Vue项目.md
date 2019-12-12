# 第01节：创建Vue项目

### 一、使用vue/cli创建Vue项目

在第七章我们已经介绍了如何使用npm命令全局安装node包，本章我们需要安装一个名为@vue/cli的包来创建我们的vue项目，安装代码如下所示：

``` bash
npm install -g @vue/cli
```

安装完成之后，在命令行可以使用Vue命令命令创建一个vue项目，具体命令如下所示

``` bash
vue create hello
```

安装过程需要连接国外服务器下载项目模板和依赖包，如果网速过慢可以在[配套示例代码]()中下载项目模板，然后使用cnpm下载依赖包。

创建完成之后，让命令行工具进入到hello目录中，然后执行下面的命令启动项目：

``` bash
npm run serve
```

项目启动后，会在8080端口开启一个服务器，我们直接访问http://localhost:8080/，就可以访问刚才创建的这个Vue项目了，如果成功访问会看到如下图所示的页面。

![Vue项目首页示意图](../images/0701_vue.jpg)

### 二、项目目录结构

创建的项目目录结构如下所示：

```
├─hello-world
│    ├─node_modules
│    ├─public
│    │   ├─favicon.ico
│    │   ├─index.html
│    ├─src
│    │   └─assets
│    │   │   └─logo.png
│    │   └─components
│    │   │   └─HelloWorld.vue
│    │   └─App.vue
│    │   └─main.js
│    ├─babel.config.js
│    ├─package.json
│    ├─README.md
```

#### 重要文件
* node_modules：存放项目依赖包
* public：存放静态文件(例如图片等)
* src：项目源文件，后续开发几乎都在这个目录下进行   
  * main.js为项目的入口文件
  * App.vue是单文件组件，下一节我们会详细介绍，这里需要知道的是，他是项目的根组件。

### 三、总结

通过本章的学习，我们掌握了如何安装vue/cli工具，并使用vue/cli工具创建Vue项目。下一节我们开始正式进入Vue的开发教程。