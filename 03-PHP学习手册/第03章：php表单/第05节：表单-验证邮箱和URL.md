# 第05节:表单-验证邮件和URL
上一节学习了设置表单页面的必需字段及报错信息显示，本节我们将介绍如何验证名称、邮件及URL地址是否符合规范

### 一、学习目标
通过正则表达式来验证名称、邮箱、URL地址是否和法，如不合法将输出报错信息

### 二、PHP-验证名称
以下代码将通过简单的方式来检测 name 字段是否包含字母和空格，如果 name 字段值不合法，将输出错误信息

实例代码如下：

``` php
$name = test_input($_POST["name"]);
if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
  $nameErr = "只允许字母和空格"; 
}
```

提示:
preg_match — 进行正则表达式匹配。

从test_input函数(用户输入的值)里面取出name元素赋值给$name这个变量中，判断如果$name中的内容与这个这则表达式不匹配则返回报错信息："只允许字母和空格"

### 三、PHP-验证邮件
以下代码将通过简单的方式来检测 e-mail 地址是否合法。如果 e-mail 地址不合法，将输出错误信息

实例代码如下：

``` php
$email = test_input($_POST["email"]);
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
  $emailErr = "非法邮箱格式"; 
}
```
和验证名成过程类似，不同的是根据的正则表达式更换了及判断的是email中的数据

### 三、PHP-验证 URL
以下代码将检测URL地址是否合法 (以下正则表达式运行URL中含有破折号:"-")， 如果 URL 地址不合法，将输出错误信息

实例代码如下：

``` php
$website = test_input($_POST["website"]);
if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
  $websiteErr = "非法的 URL 的地址"; 
}
```
通过用户输入的URL地址进行判断，判断如果用户输入的值不匹配这个正则表达式则返回报错信息

### 四、PHP-验证 Name, E-mail, 和 URL
代码如下所示:

``` php
<?php
// 定义变量并默认设置为空值
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["name"])) {
      $nameErr = "Name is required";
      } else {
         $name = test_input($_POST["name"]);
         // 检测名字是否只包含字母跟空格
         if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
         $nameErr = "只允许字母和空格"; 
         }
     }
   
   if (empty($_POST["email"])) {
      $emailErr = "Email is required";
   } else {
      $email = test_input($_POST["email"]);
      // 检测邮箱是否合法
      if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
         $emailErr = "非法邮箱格式"; 
      }
   }
     
   if (empty($_POST["website"])) {
      $website = "";
   } else {
      $website = test_input($_POST["website"]);
      // 检测 URL 地址是否合法
     if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
         $websiteErr = "非法的 URL 的地址"; 
      }
   }

   if (empty($_POST["comment"])) {
      $comment = "";
   } else {
      $comment = test_input($_POST["comment"]);
   }

   if (empty($_POST["gender"])) {
      $genderErr = "性别是必需的";
   } else {
      $gender = test_input($_POST["gender"]);
   }
}
?>
```

先定义可以用到的变量的值为空，通过if判断验证用户提交数据的方式是否为post，如果不是则重新输入，如果是则判断传过来的数据当中有没有涉及到的参数，如果没有参数则返回报错信息，有参数则把数据给到test_input函数中并检测是否是想要的格式

通过本节的学习我们学习到了如何用正则表达式去判断数据是否是我们想要的格式如不是则返回报错信息

### 五、作业
* 1.熟练运用正则表达式判断数据格式
* 2.手写案例代码，加深印象
* 3.以正则表达式的形式判断日期时间 格式：yyyy-mm-dd hh:ii:ss，正确则把数据传入到test_input()函数中，错误则返回报错信息

日期时间格式的正则表达式：
``` php
'/^(\d{4})-(0?\d{1}|1[0-2])-(0?\d{1}|[12]\d{1}|3[01])\s(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/'
```