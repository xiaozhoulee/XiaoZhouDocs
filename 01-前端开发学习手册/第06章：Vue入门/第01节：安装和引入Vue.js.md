# 第01节：安装和引入Vue.js

### 一、vue概述

为了让本文档的内容更为简介，这里就不再复述vue的基本概念和作用了。大家只要知道两点：

1. 在真正的项目开发过程中，我们通常把项目代码写在.vue和.js文件中，然后通过webpack打包我们的代码。
2. 对于初学者打包的过程会引入额外的复杂度。所以为了让我们更容易入门，可以暂时先在html文件中引入vue.js文件，这样可以让我们更简洁地了解vue的基础特性。

### 二、下载和引入vue.js文件

[下载地址](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/script)

我们可以像引入jQuery一样引入vue.js文件。[demo02](https://github.com/xiaozhoulee/xiaozhou-examples/blob/master/05-Vue入门/第01章%EF%BC%9Avue的基本概念%EF%BC%88一%EF%BC%89/demo02.html
)

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









