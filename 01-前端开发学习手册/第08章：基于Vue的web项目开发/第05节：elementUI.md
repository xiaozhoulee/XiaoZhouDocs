# 第 06 节：elementUI

### 一、element-ui 简介

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。 Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时， Vue 也完全能够为复杂的单页应用提供驱动。  
Element-UI 一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库  
官方文档地址： [http://element-cn.eleme.io/#/zh-CN/component/installation)

### 二、安装 elementUI

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。  
在项目的根目录打开命令行输入：

```
npm i element-ui -S
```

### 三、elementUI 的组件示例
[案例链接](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/07-基于Vue的web项目开发/第05节%EF%BC%9Aelement/组件示例
)  
首先在项目的 main.js 中配置以下内容（main.js 文件在项目的根目录）：

```js
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

new Vue({
  el: "#app",
  render: h => h(App)
});
```

必须配置以后才能实现想要的效果

 [Element 组件链接链](https://element.eleme.cn/#/zh-CN/component/icon)

![style_img](../images/0705_style.png)

在 Element 官方组件里找到想要的样式，拷贝进自己的项目组件中
```html
<template>
  <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </el-row>

  <el-row>
    <el-button plain>朴素按钮</el-button>
    <el-button type="primary" plain>主要按钮</el-button>
    <el-button type="success" plain>成功按钮</el-button>
    <el-button type="info" plain>信息按钮</el-button>
    <el-button type="warning" plain>警告按钮</el-button>
    <el-button type="danger" plain>危险按钮</el-button>
  </el-row>

  <el-row>
    <el-button round>圆角按钮</el-button>
    <el-button type="primary" round>主要按钮</el-button>
    <el-button type="success" round>成功按钮</el-button>
    <el-button type="info" round>信息按钮</el-button>
    <el-button type="warning" round>警告按钮</el-button>
    <el-button type="danger" round>危险按钮</el-button>
  </el-row>

  <el-row>
    <el-button icon="el-icon-search" circle></el-button>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <el-button type="success" icon="el-icon-check" circle></el-button>
    <el-button type="info" icon="el-icon-message" circle></el-button>
    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
    <el-button type="danger" icon="el-icon-delete" circle></el-button>
  </el-row>
</template>
```

第三步:展示完成效果
![Image text](../images/0705_icon.png)

### 四、学生列表
下面是vue+elementUI写的一个学生列表，可以当作一个参考  
[案例参考](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/07-基于Vue的web项目开发/第05节%EF%BC%9Aelement/学生列表
)