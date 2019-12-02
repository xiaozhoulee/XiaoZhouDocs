# 第07节:Session
上一节我们介绍了Cookie的作用及使用方式,本节我们来学习Session的定义,存储及销毁

### 一、学习目标
理解Session定义及使用方式，如何通过一些函数来进行Session的存储和销毁

### 二、PHP Session
PHP session 变量用于存储关于用户会话（session）的信息，或者更改用户会话（session）的设置。Session 变量存储单一用户的信息，并且对于应用程序中的所有页面都是可用的。

#### 1.PHP Session 变量
您在计算机上操作某个应用程序时，您打开它，做些更改，然后关闭它。这很像一次对话（Session）。计算机知道您是谁。它清楚您在何时打开和关闭应用程序。然而，在因特网上问题出现了：由于 HTTP 地址无法保持状态，Web 服务器并不知道您是谁以及您做了什么。

PHP session 解决了这个问题，它通过在服务器上存储用户信息以便随后使用（比如用户名称、购买商品等）。然而，会话信息是临时的，在用户离开网站后将被删除。如果您需要永久存储信息，可以把数据存储在数据库中。

Session 的工作机制是：为每个访客创建一个唯一的 id (UID)，并基于这个 UID 来存储变量。UID 存储在 cookie 中，或者通过 URL 进行传导。

#### 2.开始 PHP Session
在您把用户信息存储到 PHP session 中之前，首先必须启动会话。

提示：session_start() 函数必须位于 \<html> 标签之前和前一节Cookie一样

实例代码如下:

``` php
<?php session_start(); ?>
 
<html>
<body>
 
</body>
</html>
```

上面的代码会向服务器注册用户的会话，以便您可以开始保存用户信息，同时会为用户会话分配一个 UID。

#### 3.存储 Session 变量
存储和取回 session 变量的正确方法是使用 PHP $_SESSION 变量

实例代码如下:

``` php
<?php
session_start();
// 存储 session 数据
$_SESSION['views']=1;
?>
 
<html>
<head>
<meta charset="utf-8">
<title>晓舟报告(xiaozhou.com)</title>
</head>
<body>
 
<?php
// 检索 session 数据
echo "浏览量：". $_SESSION['views'];
?>
 
</body>
</html>

//输出:浏览量:1
```

在下面的实例中，我们创建了一个简单的计数器。isset() 函数检测是否已设置 "views" 变量。如果已设置 "views" 变量，我们累加计数器。如果 "views" 不存在，则创建 "views" 变量，并把它设置为 1

实例代码如下:

``` php
<?php
session_start();
 
if(isset($_SESSION['views']))
{
    $_SESSION['views']=$_SESSION['views']+1;
}
else
{
    $_SESSION['views']=1;
}
echo "浏览量：". $_SESSION['views'];
?>
```

#### 4.销毁 Session
如果您希望删除某些 session 数据，可以使用 unset() 或 session_destroy() 函数。

unset() 函数用于释放指定的 session 变量：

实例代码如下:

``` php
<?php
session_start();
if(isset($_SESSION['views']))
{
    unset($_SESSION['views']);
}
?>
```

您也可以通过调用 session_destroy() 函数彻底销毁 session：

``` php
<?php
session_destroy();
?>
```

提示:session_destroy() 将重置 session，您将失去所有已存储的 session 数据。

通过本节的学习讲解了什么是Session以及通过session_start()这个函数来为php代码开启Session对话，通过$_SESSION、unset()、session_destroy()这些函数来进行创建或摧毁Session

### 三、Cookie和Session的应用领域
* 1、cookie数据存放在客户的浏览器上，session数据放在服务器上。

* 2、cookie不是很安全，别人可以分析存放在本地的cookie并进行cookie欺骗，考虑到安全应当使用session。

* 3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能，考虑到减轻服务器性能方面，应当使用cookie。

* 4、可以考虑将登陆信息等重要信息存放为session，其他信息如果需要保留，可以放在cookie中。

### 四、作业
* 1.理解Session的定义及使用方法
* 2.熟练运用存储销毁Session相关的一些函数
* 3.了解Session与Cookie之间的区别