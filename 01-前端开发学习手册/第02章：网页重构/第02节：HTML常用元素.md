# 第02节：html常用元素

### 一、HTML语法

我们通过上一节的一个例子来说说HTML的语法，代码如下所示：[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第02节：HTML常用元素/demo01.html)

``` html
<!DOCTYPE html>              <!-- 文档声明 -->
<html lang="en">             <!-- html开始标签 -->
<head>                         <!-- head开始标签 -->
    <meta charset="UTF-8">       <!-- meta标签只有开始标签 -->
    <title>Document</title>      <!-- title标签的开始和结束标签写在了同一行 -->
    <style>                      
		p{                     /*style内部为样式，语法与html不同*/
			color:red;
		}
	</style>
</head>                        <!-- head结束标签 -->
<body>                         <!-- body开始标签 -->
    <p>我的第一个网页</p>
</body>                        <!-- body结束标签 -->
</html>                      <!-- html结束标签 -->
```

通过上面的案例，我们可以知道HTML语法的以下四个特征：

* 大部分HTML标签都是成对出现的，【开始标签】是一对尖括号中间写入标签名，而【结束标签】相对于【开始标签】会在标签名之前添加一个斜杠。
* 有些标签只有【开始标签】，没有【结束标签】。例如meta标签。
* 开始标签中可以填写一些其他信息，例如meta中的charset="UTF-8"，这叫做HTML标签的【属性】，用来进一步描述标签的信息。
* HTML标签可以相互嵌套，例如body标签中嵌套了p标签，而body标签本身又在最外层的html标签中。

了解了上面四点，基本就掌握了HTML语法，但是还有两个地方我们并没有说，一个是第一行的【文档声明】和style标签中的语法。

关于【文档声明】这里不做详细讨论，有兴趣可以到百度查阅一下文档声明的历史演变过程，如果没有兴趣，也不影响咱们后续的学习。

关于style标签之内的内容，涉及到CSS的语法知识，我们会在本章第04节继续讨论。

### 二、常用的HTML标签

本节我们来了解常用的HTML标签，虽然HTML标签有上百个之多，但是我们只要掌握下面十几个，就可以完成丰富的网页。而且我们在后续的项目开发当中，也是仅仅只使用这十几个标签而已。

#### 标题标签

在网页中我们经常会看到一篇文章的标题，或是文章中某一段落的标题。像这样的标题，我们使用标题标签h*（*代表着1-6六个数字）示例代码如下所示。[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第02节：HTML常用元素/demo02.html)

``` html
<h1>一级标题标签</h1>
<h2>二级标题标签</h2>
<h3>三级标题标签</h3>
<h4>四级标题标签</h4>
<h5>五级标题标签</h5>
<h6>六级标题标签</h6>
```

如果整个网页只有一篇文章，那么这篇文章的主标题我们可以使用h1标签。副标题可以使用h2标签。文章中的小标题，我们可以使用h3或h4标签。分别表示三级标题和四级标题。h5和h6这种更低级的标题，用到的情况不是特别多。

#### 段落标签

在网页中，一篇文章会有很多段落型的文字，这些段落我们使用p标签表示，代码如下所示。[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第02节：HTML常用元素/demo03.html)

``` html
<h3>前端开发学习心得</h3>

<p>本章通过实例向您演示最常用的 HTML 标签，学习 HTML 最好的方式就是边学边做实验。代码写得多永远比看得多更重要，不断地练习才能不断地成长！</p>

<p>HTML和CSS只是前端学习的入门小菜，JavaScript才是前端工程师的试金石。打下良好的JavaScript基础，才能在后续的学习中得心应手。</p>
```

#### 列表标签

网页中的列表是非常常见的，HTML中的列表包括有序列表，无序列表，描述列表，这里我们只例举无序列表，在后续的开发中，我们也几乎都是在使用无需列表。[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第02节：HTML常用元素/demo04.html)

``` html
<h3>你喜欢的水果是什么？</h3>
<ul>
    <li>香蕉</li>
    <li>苹果</li>
    <li>鸭梨</li>
</ul>
```

ul标签可以表示无序列表，列表中的元素用li标签表示，这里需要注意的是：

* li标签一定要写在列表之中，不能单独使用。
* ul标签内只存放li标签，不要把其他标签也放入ul当中（如果需要在列表中添加图片或链接，可以写在li中，而不是ul中）。

#### 超链接标签

网页中的超链接用a标签表示，代码如下所示：[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第02节：HTML常用元素/demo05.html)

``` html
<a href="http://baidu.com">跳转到百度</a>
<a href="demo01.html">跳转到demo01.html文件</a>
<a href="#footer">跳转到页尾</a>
```

本节开头我们已经提到了HTML标签的【属性】，【属性】用来进一步描述标签。例如上面的三个例子，我们可以使用href属性设置不同的a标签链接到不同的位置。

关于href属性的值有示例代码中的三种设置方式，使用方法如下所述：

1. 跳转到其他网站，网址前要写http://或https://。
2. 跳转到当前网站(或本机文件),可以直接填写相对路径或绝对路径。
3. 可以通过设置锚点的方式，让网页跳转到当前页面的指定位置。

在实际开发中，我们经常会将超链接放在列表中，代码如下:[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第02节：HTML常用元素/demo06.html)

``` html
<ul>
    <li><a href="http://baidu.com">百度</a></li>
    <li><a href="http://163.com">网易</a></li>
    <li><a href="http://qq.com">腾讯</a></li>
</ul>
```

#### 图片标签

网页中的图片可以使用img标签表示，代码如下所示：[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第02节：HTML常用元素/demo07.html)

``` html
<img src="images/logo.png" alt="文件无法显示">
```

img标签涉及到两个重要的属性：

* src属性可以指定要显示的图片源文件的路径；路径分为绝对路径和相对路径。

相对路径就是：指目标相对于当前文件的路径，网页结构设计中多采用这种方法来表示目标的路径。相对路径有多种表示方法，其表示的意义不尽相同。

绝对路径:是指完整的网址
* alt属性中可以设置文本，当图片无法正常显示的时候，图片位置会显示alt属性中的文本信息。

#### div标签

div标签在网页中没有明确的语义，可以说它是一个【无语义标签】，div标签常常用来作为一个容器存放其他标签，是一个很重要的布局工具，在后续的章节中，我们会经常使用它，本节大家只做了解即可。

``` html
<div>这是一个容器</div>
```

#### span标签

span标签与div标签类似，同样是一个【无语义标签】，通常用来存放文本内容。示例代码如下：

``` html
<h1>我最新欢的颜色是蓝色</h1>
<h1>我最新欢的颜色是<span>蓝色</span></h1>
```

在上面的第一行代码中，所有的文本都存放在h1标签当中，我们只能给这些文字统一设置样式。如果我们希望只给蓝色设置样式，那么就需要用到第二行的写法。这样我们就可以单独给蓝色两个字设置样式了。

如果需要单独设置文字的样式，又没有什么特别的语义，那么就需要用到span标签。

#### link标签

link标签最常用的用途是用于链接样式表，也就是外部的css文件，在实际开发中，css是需要与html分开的，我们一般用link标签引用。示例代码如下：

``` html 
<head>
<link rel="stylesheet" type="text/css" href="theme.css" />
</head>
```
* 注释：link标签只能存在于 head 部分。

### 三、常用的属性

在上面的内容中，我们已经说过a标签的href属性和img标签的src属性和alt属性，接下来我们再说两个常用的属性。[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第02节：HTML常用元素/demo08.html)

``` html
<div id="top">id属性就是标签的身份证</div>
<div class="box">class属性可以给标签分类</div>
<div class="box">class属性可以给标签分类</div>
<div class="box">class属性可以给标签分类</div>
```

id属性就像标签的身份证一样，不能重复，例如我们已经编写了一个id为top的属性，那么后续的标签中就不能再有id为top的标签。我们可以通过id找到HTML文档中的唯一元素，并设置其样式（第04节我们讲解如何使用css选择器找到指定元素）。

class属性可以将HTML标签分类，我们可以通过box属性找到所有class值为box的HTML标签。

