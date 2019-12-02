# 第02节：IDEA创建mybatis项目

### 创建项目模板

咱们创建的项目可以是quickstart模板和webapp模板都可以，我这里用的是quickstart模板。咱们创建第一个项目根本不需要webapp，而且其中的POJO文件和resource文件夹都不是自动生成，而是自己创建的。


//创建数据库，test;
create database test;
//将数据库修改为utf-8（它可以更好的支持中文字段）
alter database 数据库库名 character set utf8
//切换到test数据库
use test
//创建表
create table student(
    id int(6),
    name varchar(20)
    );
//向表中插入数据
insert into student values(1,"小王");

