# 第05节：css选择器进阶

### 一、选择器进阶内容概述

上一节我们已经掌握了常用css选择器和css属性，本节我们进一步扩展css选择器的内容包括内容如下：

* 层级选择器
* 组合选择器
* 伪类选择器
* 伪元素选择器
* 选择器权重

#### 层级选择器
  
找到指定html元素内的某个元素

``` css
.sport li{
    color:red
}
.sport > li{
    color:red
}
```

#### 组合选择器

上一章我们已经学习了部分常用的选择器，并且了解了一些常用属性，本章我们来进一步学习css选择器和常用属性

* selector1,selector2:选择器1和选择器2用逗号分隔，表示选择两个选择器选择的全部元素。示例代码如下。[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第05节：CSS选择器进阶/demo01.html)
``` css
.info1,.info2{
    color:red;
}
```

#### 伪类选择器

* :hover：伪类选择器，可以设置鼠标指针位于其上的元素样式,示例代码如下所示。[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第05节：CSS选择器进阶/demo02.html)

``` css
.box:hover{
    background-color: red;
}
```

* :link：伪类选择器，选择所有未被访问的链接
* :visited：伪类选择器，选择所有已经被访问的链接

示例代码如下所示。[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第05节：CSS选择器进阶/demo03.html)

``` css
a:link{
    color:red;
}
a:visited{
    color:yellow;
}
```

#### 伪元素选择器

* :before：伪元素选择器，在每个内容之前插入内容
* :after：伪元素选择器，在每个内容之后插入内容

示例代码如下所示。[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第05节：CSS选择器进阶/demo04.html)

``` css
h1:before{
    content:"before";
    border:1px solid red;
}
h1:after{
    content:"after";
    border:1px solid blue;
}
```

:before和:after选择器可以分别在元素前后插入内容，并定义插入内容的样式，content属性后边就是要插入的内容（后续课程会使用:before和:after选择器实现元素清除浮动）

### 二、选择器权重

到目前为止我们已经可以熟练掌握css选择器了，但是考虑一个问题，如果两个不同的选择器都找到了同一个元素，并且设置不同的样式，那么这个元素的样式应该被哪个选择器所指定呢，这就涉及到了选择器权重的问题，示例代码如下所示。[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第05节：CSS选择器进阶/demo05.html)

``` css
#content{
    width:100px;
    height:100px;
    background-color: #0f0;
}
.box{
    width:100px;
    height:100px;
    background-color: #f00;
}
```

在代码中，我们使用class选择器将div定义成红色，用id选择器将元素定义为绿色，最终元素为id选择器设置的样式，可以看出id选择器的权重大于class选择器的权重。这里大家应该记住，id选择器权重最大，其次是class选择器，最后是元素选择器。再看下面的例子。[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第05节：CSS选择器进阶/demo06.html)

``` css
.box1{
    width:100px;
    height:100px;
    background-color: #0f0;;
}
.box2{
    width:100px;
    height:100px;
    background-color: #f00;
}
```

在上面的代码中，我们使用两个class选择器定义一个div，最终div的样式被第二个选择器设置，这是因为两个选择器权重如果相同，最后面的选择器设置的内容会覆盖前面的内容。

### 三、选择器总结

这本学习手册只介绍了很少一部分选择器，但是几乎可以满足90%以上的工作需求。在后续的学习与工作中，如果有更多的选择器需求，可以查看CSS文档。

[CSS教程](https://www.w3school.com.cn/css/index.asp)

[CSS3教程](https://www.w3school.com.cn/css3/index.asp)

