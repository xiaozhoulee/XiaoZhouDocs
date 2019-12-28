# 第01节：HTML与CSS概述

### 一、HTML概述

HTML的全称是【超文本标记语言】，，超级文本标记语言是标准通用标记语言下的一个应用，也是一种规范，一种标准，它一个标记语言通过标记符号来标记要显示的网页中的各个部分。网页文件本身是一种文本文件，[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第01节：HTML与CSS概述/demo01.html)

``` html
<!-- demo01.html -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title> 
</head>
<body>
	<p>我的第一个网页</p>
</body>
</html>

```

HTML主要控制网页的内容，通过在文本文件中添加标记符，可以告诉浏览器如何显示其中的内容（如：文字如何处理，画面如何安排，图片如何显示等）。浏览器按顺序阅读网页文件，然后根据标记符解释和显示其标记的内容，对书写出错的标记将不指出其错误，且不停止其解释执行过程，编制者只能通过显示效果来分析出错原因和出错部位。但需要注意的是，对于不同的浏览器，对同一标记符可能会有不完全相同的解释，因而可能会有不同的显示效果如下所示：

不同的标签具有不同的含义，HTML有上百个标签，有些是不常用的，有些甚至已经被废弃。很多初学者都会困惑，不知道自己到底要学习哪些标签。庆幸的是有了这本《前端开发学习手册》，只要掌握十几个标签，就能完成生动的网页。

在下一节我们会列举常用的HTML标签。

### 三、CSS概述

CSS全称【层叠样式表(英文全称：Cascading Style Sheets)】。刚才我们了解了，使用HTML可以设置网页中的内容（标准通用标记语言的一个应用）等文件样式的计算机语言，那么使用CSS就可以进一步装饰这些内容，录入设置文本的字体颜色，或是改变图片的尺寸等等。如下面的代码所示，CSS的代码是在style标签内部编写的。
[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第01节：HTML与CSS概述/demo02.html)
``` html
<!-- demo02.html -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		p{
			color:red;
		}
	</style>
</head>
<body>
	<p>我的第一个网页</p>
</body>
</html>
```

上面的代码我们可以将p标签的文字设置成红色。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。

关于CSS的更多内容，我们会在后续章节继续讨论。

### 四、练习

上节我们简单地概括了什么是HTML和CSS，接下来大家可以在vscode中编写上面的两个例子，步骤如下：

1. 打开vscode
2. 点击菜单 File => New File 创建文件。
3. 点击菜单 Save 保存成后缀为html的文件，例如index.html
4. 在文件中输入一个英文的感叹号（!），然后按tab键，就可以生成一个HTML文件的模板了。
5. 接下来按照上面的代码示例编写自己的网页。
6. 如果已经安装了open in browser插件，可以在html文件之上点击右键，然后选择open in default browser。用默认浏览器打开。

通过上面的六步，我们就可以访问我们自己的第一个网页了。


