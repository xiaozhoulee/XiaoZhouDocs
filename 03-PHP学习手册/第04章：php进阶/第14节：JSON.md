# 第14节:JSON
上一节我们学习了php过滤器的扩展案例，本节我们将为大家介绍如何使用 PHP 语言进行编码和解码以及 JSON 对象

### 一、学习目标
如何将数据JSON格式，以及通过相关函数来进行对JSON数据的编码或解码，与函数的语法及参数

### 二、PHP JSON
#### 1.环境配置
在 php5.2.0 及以上版本已经内置 JSON 扩展。

#### 2.JSON 函数
|函数|描述|
|---|---|
|json_encode|对变量进行 JSON 编码|
|json_decode|对 JSON 格式的字符串进行解码，转换为 PHP 变量|
|json_last_error|返回最后发生的错误|

#### 3.json_encode
PHP json_encode() 用于对变量进行 JSON 编码，该函数如果执行成功返回 JSON 数据，否则返回 FALSE 

语法：
``` php
string json_encode ( $value [, $options = 0 ] )
```

参数：
* 1、value: 要编码的值。该函数只对 UTF-8 编码的数据有效。
* 2、options:由以下常量组成的二进制掩码：JSON_HEX_QUOT, JSON_HEX_TAG, JSON_HEX_AMP, JSON_HEX_APOS, JSON_NUMERIC_CHECK,JSON_PRETTY_PRINT, JSON_UNESCAPED_SLASHES, JSON_FORCE_OBJECT

以下实例演示了如何将 PHP 数组转换为 JSON 格式数据

实例如下所示：

``` php
<?php
   $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
   echo json_encode($arr);
?>

//输出：{"a":1,"b":2,"c":3,"d":4,"e":5}
```
通过 json_encode()这个函数把数组转换为JSON格式的数据

以下实例演示了如何将 PHP 对象转换为 JSON 格式数据

实例代码如下：

``` php
<?php
   class Emp {
       public $name = "";
       public $hobbies  = "";
       public $birthdate = "";
   }
   $e = new Emp();
   $e->name = "sachin";
   $e->hobbies  = "sports";
   $e->birthdate = date('m/d/Y h:i:s a', "8/5/1974 12:20:03 p");
   $e->birthdate = date('m/d/Y h:i:s a', strtotime("8/5/1974 12:20:03"));

   echo json_encode($e);
?>

//输出：{"name":"sachin","hobbies":"sports",、、"birthdate":"08\/05\/1974 04:20:03 pm"}
```
实例化对象给对象传递参数，然后通过 json_encode()这个函数把对象转换为JSON格式的数据

#### 4.json_decode
PHP json_decode() 函数用于对 JSON 格式的字符串进行解码，并转换为 PHP 变量。

语法：

``` php
mixed json_decode ($json_string [,$assoc = false [, $depth = 512 [, $options = 0 ]]])
```

参数：
* 1、json_string: 待解码的 JSON 字符串，必须是 UTF-8 编码数据
* 2、assoc: 当该参数为 TRUE 时，将返回数组，FALSE 时返回对象。
* 3、depth: 整数类型的参数，它指定递归深度
* 4、options: 二进制掩码，目前只支持 JSON_BIGINT_AS_STRING 。

以下实例演示了如何解码 JSON 数据：

实例如下所示：

``` php
<?php
   $json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';

   var_dump(json_decode($json));
   var_dump(json_decode($json, true));
?>

/*输出：

object(stdClass)#1 (5) {
    ["a"] => int(1)
    ["b"] => int(2)
    ["c"] => int(3)
    ["d"] => int(4)
    ["e"] => int(5)
}

array(5) {
    ["a"] => int(1)
    ["b"] => int(2)
    ["c"] => int(3)
    ["d"] => int(4)
    ["e"] => int(5)
}

*/
```
通过 json_decode() 这个函数进行解码把一个 JSON 格式的字符串解码成一个对象或数组形式的变量

通过本节的学习我们学习到了可以通过json_encode()这个函数来对数据进行编码并转换为JSON格式的数据，通过json_decode()这个函数对JSON格式的数据进行解码，如果是true则返回数组，为false则返回对象。

### 三、作业
* 1.理解JSON格式的定义、语法以及通过函数来对数据进行编码或解码
* 2.手动编写本节相关案例，加深印象
* 3.熟练运用本节相关知识点以及可以独自书写语法及相关案例