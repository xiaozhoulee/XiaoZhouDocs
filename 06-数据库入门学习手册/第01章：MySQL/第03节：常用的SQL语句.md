# 第03节：常用的 SQL 语句

### 一、SQL 分类

- DDL:数据定义语言，可以用来操作数据库对象：库，表，列等

适用范围：对数据库中的某些对象(例如，database,table)进行管理，如Create,Alter和Drop

- DML:数据操作语言，增删改数据

适用范围：对数据库中的数据进行一些简单操作，如insert,delete,update,select等.

- DCL:数据控制语言，用来设置访问权限和安全级别

通过GRANT和REVOKE，确定单个用户或用户组对数据库对象的访问权限。

- DQL:数据查询语言，用来查询数据库中的数据

数据检索语句，用于从表中获取数据。通常最常用的为保留字SELECT,并且常与FROM子句、WHERE子句组成查询SQL查询语句。

### 二、数据类型

- int:最大值

- double:内部浮点计算的类型

- char:固定长度

- varchar:可变长度

- text:大文本内容，博客存储文章

- blob:是一个二进制大型对象，是一个可以存储大量数据的容器，它能容纳不同大小的数据。

- date:日期

当业务需求中只需要精确到天时，
可以用这个时间格式

- time:时间

当业务需求中只需要每天的时间，
可以用这个时间格式

- titmestamp:时间戳

- datatime:日期和时间的组合

当业务需求中需要精确到秒时，
可以用这个时间格式

char和varchar的区别：

char(M)类型的数据列里，每个值都占用M个字节，如果某个长度小于M，MySQL就会在它的右边用空格字符补足．（在检索操作中那些填补出来的空格字符将被去掉）在varchar(M)类型的数据列里，每个值只占用刚好够用的字节再加上一个用来记录其长度的字节（即总长度为L+1字节）
### 三、常用操作命令

- 显示所有数据库：

```sql
show databases;
```

- 查看数据库详细信息：

```sql
show create database 数据库库名;
show create database db_name;
```

- 创建数据库：

```sql
 create database 数据库库名
 create database a
 ///
 create database if not exists 数据库库名 default charset utf8 collate utf8_general_ci
 create database if not exists b default charset utf8 collate utf8_general_ci;//用反引号
```

- 将数据库修改为 UTF8：

```sql
alter database 数据库库名 character set utf8;
alter database db_name character set utf8;
```

- 切换数据库：

```sql
use 数据库库名；
use database_name;
```

- 删除数据库：

```sql
drop database 数据库库名；
drop database db_name;
```

- 创建表：

```sql
create table 表名(
    字段名称 int(6),
    字段名称 varchar(20)
    );

create table student(
    id int(6),
    name varchar(20)
    );
```

- 显示数据库所有表:

```sql
show tables;
```

- 查看表数据

```sql
select * from 表名;
select * from student;
```

- 增加字段:

```sql
alter table 表名 add 字段名 字段类型
alter table book add count int;
```

- 修改字段名称:

```sql
alter table <表名> change <字段名> <字段新名称> <字段的类型>。
alter table li change name wang varchar(25);
```

- 删除字段:

```sql
alter table 表名 drop 字段名
alter table book drop count;
```

- 向表中插入数据

```sql
insert into 表名(想插入的字段名称,...) values(想插入的字段的值)
insert into 表名 values(表中所有字段的值)
```

- 删除指定的某一行

```sql
delete from 表名 where 条件表达式;
delete from student where id=1;
```

- 修改表中记录

```sql
update 表名 set 字段名=新的字段值 where 条件表达式
update student set name=小李 where id=1;
```

- 修改表名

```sql
RENAME TABLE <旧表名> TO <新表名>;
rename table jiu to xin
```

- 删除表：

```sql
drop table 表名;
drop table table_name;
```

- 查看表结构：

```sql
desc 表名
desc table_name;
```

- 清空表

```sql
delete from 表名;
delete from student;
```

以上是一些常用的 SQL 语句和函数的示例代码：
更多的 SQL 语句在右方示例代码内
→
[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/blob/master/09-MySQL/%E7%AC%AC%E4%B9%9D%E7%AB%A0%E7%AC%AC3%E8%8A%82MySQL%E5%85%B7%E4%BD%93%E8%AF%AD%E5%8F%A5.md)

### 四、存储引擎

```sql
show engines; --显示所有存储引擎
--创建表的时候可以指定存储引擎，如果不指定就会使用默认的存储引擎
show create table user; --查看user表当前使用的存储引擎。
--不同存储引擎的特性不同
```

- MyISAM:节省存储空间，查询较多。

- InnoDB:支持事务，修改较多。

- MEMORY:数据存储在内存中，可以存储非永久保存的数据


### 五、事务 transaction

- 事务可以保证多个任务的原子性，例如三个任务如果有一个没有完成，那么三个都不执行。

- 可以保证多个操作要么全部成功，要么全部失败。


事务的特征

- 原子性(A)：事务是最小单位，不可再分

- 一致性(C)：事务要求所有的 DML 语句操作的时候，必须保证同时成功或者同时失败

- 隔离性(I)：事务 A 和事务 B 之间具有隔离性

- 持久性(D)：是事务的保证，事务终结的标志(内存的数据持久到硬盘文件中)


```sql
* 关于事务的一些术语
开启事务：Start Transaction
事务结束：End Transaction
提交事务：Commit Transaction
回滚事务：Rollback Transaction
```

```sql
* 和事务相关的两条重要的SQL语句(TCL)

commit:提交
rollback：回滚
```

* 开启标志：

```sql
- 任何一条DML语句(insert、update、delete)执行，标志事务的开启
```

* 结束标志(提交或者回滚)：

```sql
 提交：成功的结束，将所有的DML语句操作历史记录和底层硬盘数据来一次同步
```

```sql
 回滚：失败的结束，将所有的DML语句操作历史记录全部清空
```

事务的四个隔离级别

- 读未提交：read uncommitted

- 读已提交：read committed

- 可重复读：repeatable read

- 串行化：serializable

  ![隔离级别](../images/0903-隔离级别.png)
  
### 六、索引

提升数据库查询效率，表中每一个字段都可以添加索引，主键会自动添加索引，所以按照主键查询效率更高。

什么情况下添加索引

- 该字段数据量庞大

- 该字段很少的 DML 操作

- 该字段经常出现在 where 条件中


```sql
--创建索引
--create index 索引名 on 表名(列名);
create index name_index on user(name);
--查看索引
show index from user;
--删除索引
drop index name_index on user;
```

### 七、视图

* 视图就是一个查询结果，可以隐藏表中的细节。

```sql
--创建视图
--create view 视图名称 as 查询语句;
create view user_view as select name,age,sex from user;
--查询视图
select * from user_view;
--修改视图
alter view user_view as select name,age from user;
--删除视图
drop view user_view if exists user_view;
```

### 八、MySQL 约束

- 概念：对表中的数据进行限定，保证数据的正确性、有效性和完整性

#### 唯一约束

- unique，某一列的值不能重复(写在你要加的字段里面)

```sql
 1. 注意：
        * 唯一约束可以有NULL值，但是只能有一条记录为null
    2. 在创建表时，添加唯一约束
    语法：
    create table 表名(
        字段名 数据类型,
        字段名 数据类型 unique
    )
        CREATE TABLE stu(
            id INT,
            phone_number VARCHAR(20) UNIQUE 
        );
        
    3. 删除唯一约束
    语法:alter table 表名 drop index 字段名
        ALTER TABLE stu DROP INDEX phone_number;

    4. 在表创建完后，添加唯一约束
    语法:alter table 表名 modify 字段名 数据类型 unique
        ALTER TABLE stu MODIFY phone_number VARCHAR(20) UNIQUE;
```

#### 非空约束

- not null

```sql
  1. 创建表时添加约束
        CREATE TABLE stu(
            id INT,
            NAME VARCHAR(20) NOT NULL -- name为非空
        );
    2. 创建表完后，添加非空约束
    语法:alter table 表名 modify 字段名 数据类型 not null
        ALTER TABLE stu MODIFY NAME VARCHAR(20) NOT NULL;

    3. 删除name的非空约束
    语法:alter table 表名 modify 字段名 数据类型
        ALTER TABLE stu MODIFY NAME VARCHAR(20);
```

同一个字段可以加上多个约束不需要用逗号隔开

#### 主键约束

- 非空约束和唯一约束的一个组合我们称之为主键约束

```sql
primary key
```

```sql
  1. 注意：
        1. 含义：非空且唯一
        2. 一张表只能有一个字段为主键
        3. 主键就是表中记录的唯一标识

    2. 在创建表时，添加主键约束
        create table stu(
            id int primary key,-- 给id添加主键约束
            name varchar(20)
        );

    3. 删除主键
        -- 错误 alter table stu modify id int ;
    语法：alter table 表名 drop primary key;
        ALTER TABLE stu DROP PRIMARY KEY;

    4. 创建完表后，添加主键
    语法:alter table 表名 modify 字段名 数据类型 primary key; 
        ALTER TABLE stu MODIFY id INT PRIMARY KEY;

    5. 自动增长：
        1.  概念：如果某一列是数值类型的，使用 auto_increment 可以来完成值得自动增长

        2. 在创建表时，添加主键约束，并且完成主键自增长
        create table stu(
            id int primary key auto_increment,-- 给id添加主键约束
            name varchar(20)
        );


        3. 删除自动增长
    语法:alter table 表名 modify 字段名 数据类型;
        ALTER TABLE stu MODIFY id INT;
        4. 添加自动增长
    语法:alter table 表名 modify 字段名 数据类型 auto_increment;
        ALTER TABLE stu MODIFY id INT AUTO_INCREMENT;
```

#### 外键约束

- foreign key,让表于表产生关系，从而保证数据的正确性
- 下面为外键约束实际操作

```sql
 1. 在创建表时，可以添加外键
        * 语法：
            create table 表名(
                ....
                外键列
                constraint 外键名称 foreign key (外键列名称) references 主表名称(主表列名称)
            );

    2. 删除外键
        ALTER TABLE 表名 DROP FOREIGN KEY 外键名称;

    3. 创建表之后，添加外键
        ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段名称) REFERENCES 主表名称(主表列名称);

```

- 在 msqyl 中外键必须得是另一张表的主键
