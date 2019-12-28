# 第02节：安装Node

### 一、Node概述

Node是JavaScript语言的运行环境，我们此前编写的JavaScript程序都是运行在浏览器中的，浏览器中的JavaScript引擎会将JavaScript代码解释成可执行的程序，浏览器安装在客户端（即前端），所以我们可以说此前编写的程序都是前端程序。

Node可以让JavaScript程序运行在服务器端（即后端），所以有了Node，我们就可以使用JavaScript语言开发从前端到后端开发整个web应用。

> 使用Node开发整个后台仅适合小型项目，随着业务的增加，对系统的稳定性，扩展性都有了更高的要求，对于稍微大一些的项目，选择java这种语言及相关成熟的技术栈更加适合。

> 目前在项目中使用Node作为中间层比较常见，也就是大家说的大前端，使用Node做服务器渲染，虽然程序运行在服务器端，但是只处理前端的业务。

### 二、安装Node

在windows环境下安装Node非常简单，下载地址如下所示：

[Node下载地址](http://nodejs.cn/download/)

下载完成之后，双击安装包，然后一直【下一步】就可以了。

![Node安装示意图](../images/0601_node.png)


安装完成之后，打开命令行工具，输入下列命令：

``` bash
node -v
```

如果可以显示Node的版本号，说明Node已经安装成功，效果如下所示：

### 三、npm

#### 检测npm是否安装成功

npm是Node的包管理器，我们在开发web项目的过程中，通常会依赖很多第三方模块。通过npm可以更方便地管理这些第三方模块。我们也可以使用node下载一些常用的库或框架，例如之前学过的jQuery和bootstrap。我们还可以使用npm安装一些工具，例如本节要将的http-server和后续要使用的vue/cli。

在使用npm之前，我们先来看看npm是否安装成功。

在上面安装Node的同时，我们其实已经安装了npm，直接打开命令行即可，输入如下命令

``` bash
npm -v
```

果可以看到npm的版本号，说明NPM安装成功。

#### npm初始化项目

接下来我们来讲解如何使用npm，首先使用npm初始化一个项目，步骤如下：

1. 创建一个名为server的目录
2. 在这个目录下开启命令行工具
3. 输入如下命令

``` 
npm init
```

执行上述命令之后，命令行引导输入项目相关的信息，包括如下内容

``` 
package name: (server)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\Users\Administrator\Desktop\server\package.json:


```

如果不希望做出额外的配置，可以一直回车，都选择默认选项，输入完成之后，会在当前目录下创建一个package.json文件，内容如下所示：

``` json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

#### package.josn文件

* 文件说明
```
package name:                   你的项目名字叫啥  
version:                        版本号  
description:                    对项目的描述  
entry point:                    项目的入口文件（一般你要用那个js文件作为node服务，就填写那个文件）  
test command:                   项目启动的时候要用什么命令来执行脚本文件（默认为node app.js）  
git repository:                 如果你要将项目上传到git中的话，那么就需要填写git的仓库地址（可以不写）  
keywirds：                      项目关键字（可以不写）  
author:                         作者  
license:                        发行项目需要的证书（可以不写）  
```

这个文件是npm的配置文件，我们就是通过这个文件来管理项目的依赖。

#### 下载依赖

接下来我们就在这个目录下安装一个项目依赖包，安装我们之前学习过的bootstrap，代码如下所示

``` 
npm install bootstrap --save
```

安装完成后，会发现项目中有两处变化

1. package.json文件，可以看到文件多处了一个dependencies属性，用来记录所有项目依赖。
2. 项目中多处一个node_modules目录，用来存放项目依赖文件


``` json
"dependencies": {
 "bootstrap": "^4.4.1"
}
```

>这里需要注意的是，如果不输入--save，仍然可以成功下载依赖，但是不会将依赖的继续写入package.json文件。

这说明我们成功在配置文件中添加了项目依赖。dependencies属性不只包含了需要的依赖包，还包含了依赖包对应的版本，如果没有特殊说明，我们下载的依赖是npm服务器上的最新版本，也可以通过@符号来指定需要下载的版本，代码如下所示：

``` bash
npm install bootstrap@3.1.1 --save
```

通过上面的命令，我们可以下载3.1.1版本的bootstrap。


#### 下载全部依赖

由于依赖包的文件过大，内容过多，所以我们在部署项目的时候，不会把所有的依赖文件都上传到服务器（关于服务器的内容，我们会在下一节讲解）。package.json文件内dependencies属性中会记录项目中的所有依赖，我们只要将package.json文件上传到服务器，就可以直接下载所有依赖。

例如我们将上面安装bootstrap的项目配置文件（package.json）拷贝到另一个目录server2，然后让命令行切换到server2目录。这时，server2中只有一个package.json文件，然后我们在命令行中执行下面命令

``` bash
npm install
```

npm会自动下载package.json文件内dependencies属性中包含的所有依赖。


#### 全局安装的作用

在上面的内容中，已经讲解了如何在当前项目中安装依赖，我们还可以使用npm来执行全局安装，执行全局安装之后，我们就可以进一步使用全局安装的命令，例如全局安装http-server，代码如下：

``` bash
npm install http-server -g
```

输入-g即为全局安装，全局安装之后http-server之后，我们可以使用http-server命令开启一个服务器

``` bash
http-server
```

关于服务器与http-server的知识，我们会在下一节继续讲解。

#### cnpm

由于npm的服务器在国外，所有国内很多地区使用npm下载依赖会特别费时。cnpm是淘宝提供的npm国内镜像，很好地解决了下载依赖包费时的问题。通过下面的命令可以安装cnpm。

``` 
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

安装完成之后，下载依赖可以使用cnpm命令，还是一下载bootstrap为例。

``` 
cnpm install bootstrap --save
```

大家如果亲自动手操作一遍，一定会发现，下载速度快了很多，所以，在以后所有学习和工作中，都推荐大家使用cnpm下载项目依赖。

### 五、课后练习

1. 安装node，并在命令行中输出node和npm的版本号。
2. 使用npm init命令初始化一个项目，并在项目中安装jQuery和bootstrap，并将依赖关系添加到package.json文件中。
3. 拷贝练习题第2题的package.json文件至一个空目录中，然后在此目录执行npm install安装所有package.json文件中的项目依赖。