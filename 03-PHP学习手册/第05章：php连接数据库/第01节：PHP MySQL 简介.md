# 第01节:PHP MYSQL 简介
上一章我们整体加强了对php多种进阶语法的概念及使用，本节我们来介绍一下mysql的简介以及里面的查询方法

### 一、学习目标

学习mysql可以做什么，以及他的特点，介绍了mysql数据库查询表的方法

### 二、MySQL简介

通过 PHP，您可以连接和操作数据库

MySQL 是跟 PHP 配套使用的最流行的开源数据库系统

如果想学习更多 MySQL 知识可以查看本站 [前端学习手册](http://www.xiaozhoubg.com/content/1) /MySQL这一章节中的内容。

#### 1.MySQL是什么

* MySQL 是一种在 Web 上使用的数据库系统
* MySQL 是一种在服务器上运行的数据库系统
* MySQL 不管在小型还是大型应用程序中，都是理想的选择
* MySQL 是非常快速，可靠，且易于使用
* MySQL 支持标准的 SQL
* MySQL 可以在一些平台上编译
* MySQL 是免费下载使用的
* MySQL 是由 Oracle 公司开发、发布和支持的

MySQL 中的数据存储在表中。表格是一个相关数据的集合，它包含了列和行。

在分类存储信息时，数据库非常有用。一个公司的数据库可能拥有以下表：

* Employees 员工
* Products  产品
* Customers 顾客
* Orders 命令

#### 2.PHP + MySQL

PHP 与 MySQL 的结合是跨平台的。（您可以在 Windows 上开发，在 Unix 平台上应用）

#### 3.查询

查询是一种询问或请求

通过 MySQL，我们可以向数据库查询具体的信息，并得到返回的记录集。

请看下面的查询（使用标准 SQL语句）：

``` php
mysql> set names utf8;
mysql> SELECT name FROM websites;
+---------------+
| name          |
+---------------+
| Google        |
| 淘宝        |
| 菜鸟教程  |
| 微博        |
| Facebook      |
| stackoverflow |
+---------------+
6 rows in set (0.00 sec)
```

代码解析：
语句 set names utf8;用于设定数据库编码，让中文可以正常显示。

上面的查询选取了 "websites" 表中 "name" 列的所有数据。

如需学习更多关于 SQL 的知识，请访问我们本站的 [前端学习手册](http://www.xiaozhoubg.com/content/1) /MySQL这一章节中的内容。

#### 4.下载 MySQL 数据库

如果您的 PHP 服务器没有 MySQL 数据库，可以在本站的[前端学习手册](http://www.xiaozhoubg.com/content/1) /MySQL这一章节中学习到下载 MySQL 的详细内容。

#### 5.关于 MySQL 数据库的事实

关于 MySQL 的一点很赞的特性是，可以对它进行缩减，来支持嵌入的数据库应用程序。也许正因为如此，许多人认为 MySQL 仅仅能处理中小型的系统

事实上，对于那些支持巨大数据和访问量的网站（比如 Friendster、Yahoo、Google），MySQL 是事实上的标准数据库

### 三、总结

通过本节的学习我们收获了php是可以和mysql数据库进行连接的，以及对mysql数据库了解了一个大概轮廓，接下来我们将学习如何在php上操作mysql数据库