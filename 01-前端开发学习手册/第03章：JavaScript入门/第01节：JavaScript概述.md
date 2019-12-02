# 第01节：JavaScript概述

### 一、JavaScript概述

1995年，JavaScript问世，主要目的是处理表单验证。起初命名为LiveScript，后来因为java语言盛行，更名为JavaScript，目的是希望借着Java的火爆流行起来（JavaScript的开发者一定想不到JavaScript在20多年后的今天会如此盛行）。

1997年，欧洲计算机制造商协会发布了ECMAScript，在接下来的几年里，web浏览器厂商就开始将ECMAScript作为JavaScript实现的标准。

2009年，Node.js问世，JavaScript这门语言逐步在后台占据一席之地，目前，前端开发的大量工具都基于node.js。

2015年，ECMAScript2015正式发布，使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

### 二、JavaScript是做什么的
我们把JS理解为，页面的化妆术。我们就是化妆者，通过JS，我们可以把一个页面全我们想要的意思进行渲染，执行相应的功能，生成相应的效果，比如，显示当前系统时间，比如，显示实时信息的更新。
术语一点说，JS是一种页面脚本，通过执行程序脚本片段，我们可以对页面及页面上的元素进行操作，实现特定的功能与效果。有一些东西，我们用高级编程语言是实现不了的，而用JS，可能几行代码就可搞定。比如，显示当前系统时间等。

### 三、第一个JavaScript程序
学习所有编程语言编写第一个程序的时候，都习惯性地编写“hello world”程序，学习JavaScript也是一样。作为我们编写的第一个JavaScript程序，我们将代码写在html这个文档中，body标签里写想要的效果代码,JavaScript放在``<script></script>``这个标签里
代码如下所示：
``` javascript
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script>
		alert("hello world");
	</script>
</body>
</html>
```

### 四、console.log的简单描述
前端开发者可以在js代码的任何部分调用console.log，然后你就可以在浏览器的开发者控制台里，看到这个函数调用的那一瞬间你指定的变量或表达式的值。

最基本的调用方法：

``` js
console.log('123');
// 123
  
console.log('1', '2', '3');
// 1 2 3
  
console.log('1\n2\n3\n');
// 1
// 2
// 3
```
我们可以通过上面的方式进行单个变量（表达式）、多个变量以及换行输出