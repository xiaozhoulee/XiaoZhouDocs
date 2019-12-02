# 第09节：css定位

### 一、定位的基本概念

在我们浏览网页的过程中，经常会发现网页中的元素重叠展示，例如一个数字列表压在了一张图片之上，或者浏览器右下角突然弹出的广告压到了其他元素之上，这些都需要使用css的定位才能实现，本节我们就讲解css定位相关的属性，定位可以分为三类，

* 绝对定位
* 相对定位
* 固定定位


### 二、css定位详解

我们可以通过position属性，将一个元素设置成定位元素，之后就可以通过top、left、bottom、right属性来设置元素的坐标。

#### 绝对定位

将一个元素设置下面的属性：

``` css
element{
    position:absolute;
}
```

元素就变成了一个绝对定位元素，实例代码如下所示。[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第09节：CSS定位/demo01.html)

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .box{
            width:100px;
            height:100px;
            background-color: #f00;
            border:1px solid #0f0;
        }
        .box2{
            position: absolute; /*设置绝对定位元素*/
            top:50px;           
            left:50px;
        }
    </style>
</head>
<body>
    <div class="box box1">1</div>
    <div class="box box2">2</div>
    <div class="box box3">3</div>
</body>
</html>
```

从上面代码的效果中，我们可以了解以下几点：

* 绝对定位元素脱离文档流，并不占位，box3与box1相邻。
* 原点在整个网页左上角的位置。
* 定位的坐标分别是top:50px;left:50px;这个值是元素左上角距离原定的距离。

#### 相对定位

将一个元素设置下面的属性：

``` css
element{
    position:relative;
}
```

元素就变成了一个相对定位元素，实例代码如下所示。[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第09节：CSS定位/demo02.html)

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .box{
            width:100px;
            height:100px;
            background-color: #f00;
            border:1px solid #0f0;
        }
        .box2{
            position: relative; /*设置相对定位元素*/
            top:50px;
            left:50px;
        }
    </style>
</head>
<body>
    <div class="box box1">1</div>
    <div class="box box2">2</div>
    <div class="box box3">3</div>
</body>
</html>
```

从上面代码的效果中，我们可以了解以下几点：

* 相对定位元素脱离文档流，元素占位，box3与box1不相邻，中间的间距就是相对定位元素的位置。
* 原点在其占位位置的左上角。
* 定位的坐标分别是top:50px;left:50px;这个值是元素左上角距离原定的距离。

#### 固定定位

将一个元素设置下面的属性：

``` css
element{
    position:fixed;
}
```

元素就变成了一个固定定位元素，实例代码如下所示。[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第09节：CSS定位/demo03.html)

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        body{
            height:1000px;
        }
        .box{
            width:100px;
            height:100px;
            background-color: #f00;
            border:1px solid #0f0;
        }
        .box2{
            position: fixed; /*设置固定定位元素*/
            top:50px;
            left:50px;
        }
    </style>
</head>
<body>
    <div class="box box1">1</div>
    <div class="box box2">2</div>
    <div class="box box3">3</div>
</body>
</html>
```

从上面代码的效果中，我们可以了解以下几点：

* 固定定位元素脱离文档流，并不占位，box3与box1相邻。
* 我们将body元素的高度设置成1000px，这样我们就可以通过滚轮控制网页显示的位置。
* 原点在浏览器当前窗口的左上角。
* 定位的坐标分别是top:50px;left:50px;这个值是元素左上角距离原定的距离。
* 当混轮滚动的时候，固定定位元素永远相对于窗户的位置定位。

#### 设置参照物

理解了上面三种定位方法，我们再来考虑开始提到的那个问题，如果我们希望将一个数字列表压在一张图片之上。居中显示在网页之上，我们将数字列表设置定位之后，坐标应该设置成多少呢？因为居中的图片与浏览器窗口的左边距是不固定的，所以没有办法设置成一个固定值，这个时候，我们就需要给定位元素设置参照物。

将父级元素设置position:relative;如果不指定top和left值，它的样式与非定位元素是一样的，然后在其内部设置一个绝对定位元素，该绝对定位元素的参照物就是其父级元素。代码如下所示。[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第09节：CSS定位/demo04.html)
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        *{
            margin:0px;
            padding:0px;
        }
        .pic-box{
            width:650px;
            height:420px;
            margin: 0 auto;
            border:1px solid red;
            position: relative;
        }
        .number-list{
            position: absolute;
            bottom:0px;
            right:0px;
        }
        .number-list li{
            list-style: none;
            float: left;
            background-color: #fff;
            text-align: center;
            width:20px;
            height:20px;
            line-height: 20px;
        }

    </style>
</head>
<body>
    <div class="pic-box">
        <img src="images/1.jpg" alt="">
        <ul class="number-list">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>
</body>
</html>
```

在上面的我们使用bottom和right设置坐标，则原点为父级参照物的右下角，这个与top和left设置坐标是有区别的。

### 三、练习

制作一个对联型广告，网页上线滚动，两侧的广告一直悬浮在网页左右两侧垂直居中的位置。






