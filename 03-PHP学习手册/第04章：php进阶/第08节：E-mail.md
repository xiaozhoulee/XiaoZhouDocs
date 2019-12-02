# 第08节:E-mail
上一节我们学习了Session的定义及应用领域，本节讲解的是如何通过客户端来发送电子邮件

### 一、学习目标
学习mail()这个函数当中的语法及相关参数，怎样允许php发送电子邮件，以及如何通过form表单发送电子邮件至目的地的邮箱中

### 二、PHP 发送电子邮件
PHP 允许您从脚本直接发送电子邮件。

### 三、PHP mail() 函数
PHP mail() 函数用于从脚本中发送电子邮件。

语法:

``` php
mail(to,subject,message,headers,parameters)
```

|参数|描述|
|---|---|
|to|必需。规定 email 接收者。|
|subject|必需。规定 email 的主题。提示：该参数不能包含任何新行字符。|
|message|必需。定义要发送的消息。应使用 LF (\n) 来分隔各行。每行应该限制在 70 个字符内。|
|headers|可选。规定附加的标题，比如 From、Cc 和 Bcc。应当使用 CRLF (\r\n) 分隔附加的标题。|
|parameters|	可选。对邮件发送程序规定额外的参数。|

提示：PHP 运行邮件函数需要一个已安装且正在运行的邮件系统(如：sendmail、postfix、qmail等)。所用的程序通过在 php.ini 文件中的配置设置进行定义。

#### 1.如何设置php.ini文件允许发送电子邮件
##### 1、需求
要使邮件函数可用，PHP 需要已安装且正在运行的邮件系统。要使用的程序是由 php.ini 文件中的配置设置定义的。

##### 2、安装
Mail 函数是 PHP 核心的组成部分。无需安装即可使用这些函数。

##### 3、Runtime 配置
Mail 函数的行为受 php.ini 文件中的设置的影响。

Mail 配置选项：

|名称|默认|描述|可更改|
|---|---|---|---|
|SMTP|"localhost"|Windows 专用：SMTP 服务器的 DNS 名称或 IP 地址。|PHP_INI_ALL|
|smtp_port|"25"|Windows 专用：SMTP 端口号。自 PHP 4.3 起可用。|PHP_INI_ALL|
|sendmail_from|NULL|Windows 专用：规定在由 PHP 发送的电子邮件中使用的 "from" 地址。|PHP_INI_ALL|
|sendmail_path|NULL|Unix 系统专用：规定 sendmail 程序的路径（通常 /usr/sbin/sendmail 或 /usr/lib/sendmail）。|PHP_INI_SYSTEM|

更改XMAPP/php/php.ini文件,通过上面呈现的名称对应属性的值更改就可以完成电子邮件的提交了

### 四、PHP 简易 E-Mail
通过 PHP 发送电子邮件的最简单的方式是发送一封文本 email。

在下面的实例中，我们首先声明变量(\$to, \$subject, \$message, \$from, \$headers)，然后我们在 mail() 函数中使用这些变量来发送了一封 E-mail

实例如下所示:

``` php
<?php
$to = "xiaozhou@example.com";         // 邮件接收者
$subject = "参数邮件";                // 邮件标题
$message = "Hello! 这是邮件的内容。";  // 邮件正文
$from = "xiaozhouelse@example.com";   // 邮件发送者
$headers = "From:" . $from;         // 头部信息设置
mail($to,$subject,$message,$headers);
echo "邮件已发送";
?>
```

### 四、PHP Mail 表单
通过 PHP，您能够在自己的站点制作一个反馈表单。下面的实例向指定的 e-mail 地址发送了一条文本消息：

实例如下所示:

``` php
<html>
<head>
<meta charset="utf-8">
<title>晓舟报告(xiaozhou.com)</title>
</head>
<body>

<?php
if (isset($_REQUEST['email'])) { // 如果接收到邮箱参数则发送邮件
    // 发送邮件
    $email = $_REQUEST['email'] ;
    $subject = $_REQUEST['subject'] ;
    $message = $_REQUEST['message'] ;
    mail("xiaozhou@example.com", $subject,
    $message, "From:" . $email);
    echo "邮件发送成功";
} else { // 如果没有邮箱参数则显示表单
    echo "<form method='post' action='mailform.php'>
    Email: <input name='email' type='text'><br>
    Subject: <input name='subject' type='text'><br>
    Message:<br>
    <textarea name='message' rows='15' cols='40'>
    </textarea><br>
    <input type='submit'>
    </form>";
}
?>

</body>
</html>
```

实例解释：
* 1、首先，检查是否填写了邮件输入框
* 2、如果未填写（比如在页面被首次访问时），输出 HTML 表单
* 3、如果已填写（在表单被填写后），从表单发送电子邮件
* 4、当填写完表单点击提交按钮后，页面重新载入，可以看到邮件输入被重置，同时显示邮件发送成功的消息

通过本节的学习介绍了mail()这个函数的使用方式及参数与参数描述，以及如何允许表单发送e-mail，和怎样通过form表单去发送电子邮件，这个简易发送 e-mail 不安全，在下一节中，您将阅读到更多关于电子邮件脚本中的安全隐患，我们将为您讲解如何验证用户输入使它更安全。

### 五、作业
* 1.整理mail()函数的使用以及相关参数
* 2.手动编写案例代码，做到熟练运用
* 3.编写代码：把email发送至自己邮箱。内容为：我的E-mail，成功则返回true，失败则为false