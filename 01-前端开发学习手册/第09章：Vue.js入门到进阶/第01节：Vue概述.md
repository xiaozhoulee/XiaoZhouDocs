# 第01节：安装和引入Vue.js

### 一、vue概述

目前前端开发最火热的三大框架分别是React、Angular和Vue。

Angular是谷歌公司开发的前端框架，在国外的用户比国内用户多很多，国内始终是不温不火的状态。

React和Vue在或内比较常见，可能是因为Vue简单易用，而且是由华人开发，所以Vue在国内的受众非常多。从本章我们开始学习Vue的相关知识，最后的教务管理系统也会使用Vue框架来开发。

### 二、第一个Vue项目

有两种方法可以在自己的项目中引入Vue：

* 第一种是像引入jQuery一样，引入Vue.js文件。
* 第二种是以Node为基础，构建基于Vue的web项目。

在真实的项目开发中，都会使用第二种开发方式，本节我们先以第一种-引入Vue.js文件方式起步。

``` html
<body>
    <div id="app">
    <!-- 双花括号用于绑定data里面的属性值 -->
        <h1>{{message}}</h1>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                message:"hello world"
            }
        })
    </script>
</body>
```

我们再来看一下上面的代码，它包含了一个vue程序最基本的结构：

首先，我们在html中定义了一个id为app的容器，然后我们在js创建一个Vue的实例，通过el属性指定这个容器，从而实现让js接管html.

每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的：

``` js
var vm = new Vue({
  // 选项
})
```

* 在构造函数Vue中，我们需要传入一个“选项对象”来进一步描述vue实例的行为。
* el属性是选择器，对应html中的容器
* data属性是数据，可以指定vue实例中的数据，并将其绑定到html中

在html标签的文本中，可以使用双花括号绑定data中的属性。

### 三、绑定属性

``` html
<body>
    <div id="app">
        <h1 v-bind:title="message">鼠标停留在这个H1标签上，可以看到title</h1>
        <h1 :title="message">鼠标停留在这个H1标签上，可以看到title</h1>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                message:"hello world"
            }
        })
    </script>
</body>
```

### 四、绑定事件

``` html
<body>
    <div id="app">
        <button v-on:click="fun">按钮</button>
        <button @click="fun">按钮</button>
        <button>按钮</button>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            methods:{
                fun(){
                    alert("hello world")
                }
            }
        })
    </script>
</body>
```

### 五、总结

通过本章的学习，我们对Vue.js有了初步的了解。从下一章开始，我们讲解如何使用Vue-cli工具创建基于Vue的web应用。









