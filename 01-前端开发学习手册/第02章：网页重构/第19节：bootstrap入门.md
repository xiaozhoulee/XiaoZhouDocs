# 第19节：bootstrap入门

### 一、bootstrap概述

Bootstrap 是一个用于快速开发 Web 应用程序和网站的前端框架。使用Bootstrap，可以使我们的开发更快捷方便

在使用bootstrap之前，先来说说bootstrap的优势。

* 提供漂亮的UI组件，让不懂设计的前端工程师也能做出漂亮的网页。
* 提供便捷的响应式布局功能，让开发者用更少的代码实现响应式页面。
* 是世界上流行的构建响应式移动优先站点的框架，具有BootstrapCDN和模板启动页面

### 二、下载bootstrap

* bootstrap中js插件依赖于jquery，所以在这之前必须安装jquery。
在package.json中添加一行代码：“jquery”: “^2.2.3”
```
"dependencies": {
   "element-ui": "^2.0.5",
   "vue": "^2.5.2",
   "vue-router": "^3.0.1",
   "jquery": "^2.2.3"
 }
```
* 在build文件webpack.base.conf.js中添加一行数据：
```
//注：...代表省略自有的，
//必定事先声明webpack，不然下面会不识别webpack
const webpack = require('webpack')
...
module.exports = {
    resolve: {
        ...
        alias: {
          ...
          'jquery': 'jquery' 
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "windows.jQuery": "jquery"
        })
    ],
    ...
}
```
* 在main.js中加入：import $ from ‘jquery’
使用npm install jquery@2.2.3 –save-dev这样jquery就安装完成了。

* 通过 npm 进行安装: npm install bootstrap@3.3.0 –save-dev


* 在需要的页面引入

mport 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap/dist/js/bootstrap.min.js'

最后npm run dev启动项目，就ok啦。


#### 包含的内容

Bootstrap 提供了两种形式的压缩包，在下载下来的压缩包内可以看到以下目录和文件，这些文件按照类别放到了不同的目录内，并且提供了压缩与未压缩两种版本。
### 三、重用的UI组件

#### 下拉菜单

代码如下:
``` html
<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Dropdown
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
```
#### 按钮

``` html
<div class="btn-group" role="group" aria-label="...">
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Middle</button>
  <button type="button" class="btn btn-default">Right</button>
</div>
```
#### 导航栏

``` html
<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#">Home</a></li>
  <li role="presentation"><a href="#">Profile</a></li>
  <li role="presentation"><a href="#">Messages</a></li>
</ul>
```
### 四、栅格系统
* Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。它包含了易于使用的预定义类，还有强大的mixin 用于生成更具语义的布局。

#### 简介
* 栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。下面就介绍一下 Bootstrap 栅格系统的工作原理：

* “行（row）”必须包含在 .container （固定宽度）或 .container-fluid （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
* 通过“行（row）”在水平方向创建一组“列（column）”。
* 你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。
* 类似 .row 和 .col-xs-4 这种预定义的类，可以用来快速创建栅格布局。Bootstrap 源码中定义的 mixin 也可以用来创建语义化的布局。
* 通过为“列（column）”设置 padding 属性，从而创建列与列之间的间隔（gutter）。通过为 .row 元素设置负值 margin 从而抵消掉为 .container 元素设置的 padding，也就间接为“行（row）”所包含的“列（column）”抵消掉了padding。
* 负值的 margin就是下面的示例为什么是向外突出的原因。在栅格列中的内容排成一行。
栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 .col-xs-4 来创建。
* 如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。
* 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 .col-md-* 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 .col-lg-* 不存在， 也影响大屏幕设备。
### 五、总结

本节主要介绍了bootstrap的常用功能，查阅bootstrap文档可以了解全部功能。

[bootstrap文档地址](https://v3.bootcss.com/)

