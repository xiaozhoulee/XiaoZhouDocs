# 第01节：创建Vue项目

### 一、使用vue/cli创建vue项目

在第六章我们已经介绍了全局安装NPM包，本章我们需要安装一个名为@vue/cli的包来创建我们的vue项目，安装代码如下所示：

``` bash
npm install -g @vue/cli
```

然后执行下面的命令创建一个vue项目

``` bash
vue create hello-world
```

创建开始会有一个选项，我们直接选择默认即可。

创建的过程中需要联网，npm会自动下载所有的依赖包。

项目安装完成之后，我们进入到项目中执行下列命令，启动项目

``` bash
npm run serve
```

项目启动后，会在8080端口开启一个服务器，我们直接访问http://localhost:8080/，就可以访问刚才创建的这个Vue项目了，如果成功访问会看到如下图所示的页面。

![Vue项目首页示意图](../images/0701_vue.jpg)

### 二、项目目录结构说明

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