# 第04节：css选择器和常用属性

### 一、CSS基本语法

在前面两节我们主要讲解了HTML标签，本节开始讲解CSS的基本概念。

CSS(层叠样式表)控制着网页的样式，例如我们之前编写的HTML文件，文字的颜色都是默认的黑色，如果希望将文字设置成其他颜色，就需要CSS了，可以在HTML文件中填写如下代码，即可把一个h1标签的文字设置成红色。

``` html
<body>
<style>
    /* CSS注释：用来备注一些代码讲解，不会被当做代码执行。 */
    h1{
        color:red;
    }
</style>
<h1>我是一个标题</h1>
</body>
```

我们再来总结一下CSS的语法结构。

``` html
<style>
    /* selector：选择器，用来找到需要被设置样式的元素。 */
    /* property:属性名称 */
    /* value:属性值 */
    selector{  
        property:value;
    }
</style>
```

在第一个CSS案例中，h1是一个选择器，可以找到HTML文件中所有的h1标签，花括号中的color是属性名称，它决定我们可以修改元素的哪个样式，red就是属性值，它决定我们设置的样式到底是什么。

了解了基本语法之后，我们来编写一个有样式的html文件，将h1标签中的文字设置成红色，完整代码如下所示。[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第04节：CSS选择器和常用属性/demo01.html)

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        h1{       
            color:red;
        }
    </style>
</head>
<body>
    <h1>hello css</h1>
</body>
</html>
```

### 二、CSS选择器

上面我们已经介绍了，选择器用来找到需要被设置样式的元素，下面我们介绍常用的几种选择器。

* 元素选择器
* 类选择器
* id选择器
* 通配符选择器

#### 元素选择器：h1,div,img等等

元素选择器是直接通过标签的名字找到指定元素。例如下面的例子，可以将所有h1标签字体颜色设置为红色，将所有img标签的宽度设置为200像素，高度为100像素。
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        h1{
            color:red;
        }
        img{
            width:200px;
            height:100px;
        }
    </style>
</head>
<body>
    <h1>这是一个标题标签</h1>
    <img src="" alt="">
</body>
</html>
```
#### 类选择器

类选择器是通过html元素的class属性找到元素。选择器的语法是在class属性名前添加一个【.】。如下面的案例所示。此案例将所有class值为info的元素背景色设置为蓝色。

``` css
.info{
    background-color:blue;
    width:200px;
    height:100px;
}
```
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .info{
            background-color:blue;
            width:200px;
            height:100px;
        }
    </style>
    
</head>
<body>
    <div class="info"></div>
</body>
</html>
```
#### id选择器

id选择器是通过html元素的id属性找到元素。选择器的语法是在id属性名前面添加一个【#】。如下面的案例所示。此案例将所有id值为info的元素背景色设置为蓝色。

在学习id选择器的时候，大家可能会纠结一个问题，“什么时候用id选择器，什么时候用class选择器？”这个问题不同的公司有不同的标准，在本套电子书中，建议所有代码都使用class选择器，id选择器只做了解即可。

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        #info{
            width:200px;
            height:100px;
            background-color:blue;
        }
    </style>
</head>
<body>
    <div id="info"></div>
</body>
</html>
```
#### 通配符选择器

通配符选择器可以找到html元素中的所有元素，代码如下所示，此案例可以将所有元素的外边距和内边距都设置为0px。关于margin和padding两个属性，我们会在【第06节：盒子模型】中继续讲解。

``` css
* {
    margin:0px;
    padding:0px;
}
```
通配符选择器和其他的选择器不一样，它不需要特定的html标签它可以找到所有的标签。
**在实际工作中，通配符选择器因为性能问题，并不经常使用，一般只用来清除所有元素的内边距和外边距。**

### 三、CSS常用属性

CSS定义了大量的属性，学习的过程中，我们不必去记住每一个CSS属性。这里列举出学习初期常用的CSS属性，后续我们还会不断学习网页重构中常用的CSS属性。

> px是CSS中的单位，用来表示像素长度，1px就是一像素。CSS中的其他单位将在后续章节介绍。 [示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第04节：CSS选择器和常用属性/demo02.html)

``` css
/* class选择器，找到class值为box的元素 */
.box{
    border:1px solid red; /*1像素的实线红色边框*/
    width:500px;   /*设置宽度为500像素*/
    height:300px;  /*设置高度为300像素*/
    text-align:center;    /*文字水平居中*/
    line-height: 300px;   /*文字行高设置为300像素（与父级高度相同），可以实现文字垂直居中的效果*/
    background-color: yellow;  /*设置背景色为黄色*/
    font-size: 16px;  /*设置文字尺寸*/
    color:red:/*设置文字的颜色*/
}
```

了解了常用的样式之后，我们来看一个实际案例：

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .box{
            border:1px solid red;
            width:500px;
            height:300px;
            text-align:center;
            line-height: 300px;
            background-color: yellow;
            font-size: 16px;
            color:red:
        }
    </style>
</head>
<body>
    <div class="box">
        <p>这是一个p标签</p>
    </div>
</body>
</html>
```







