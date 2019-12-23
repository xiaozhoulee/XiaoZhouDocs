# 第02节：IDEA创建mybatis项目

<<<<<<< HEAD
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

=======
### 一、创建项目模板

首先创建maven项目，和springmvc一样，选择webapp模板。  

新建一个maven project，并且选择webapp原型。  

![images](..\images/1401_imgs.png)  

然后点击next  

![images](..\images/1401_images.png)  

这里的GroupId和ArtifactID随意填写，ArtifactId是项目名称，GroupId一般写项目网址的倒叙，例如com.xiaozhoubg  

![images](..\images/1401_pngs.png)  

为了快一点创建，我们添加一个属性值，如图中亮的所示，点右边的加号，**name=archetypeCatalog value=internal**。当然也可以不添加属性值，只不过项目开始时下载的依赖会慢一点。  

### 二、配置框架

#### 添加数据库值

``` sql
CREATE DATABASE mybatis

USE mybatis

CREATE TABLE `user` (
  `id` int(20) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `pwd` varchar(32) DEFAULT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



insert  into `user`(`id`,`username`,`birthday`,`sex`,`address`) values (41,'老王','2018-02-27 17:47:08','男','北京'),(42,'小二王','2018-03-02 15:09:37','女','北京金燕龙'),(43,'小二王','2018-03-04 11:34:34','女','北京金燕龙'),(45,'传智播客','2018-03-04 12:04:06','男','北京金燕龙'),(46,'老王','2018-03-07 17:37:26','男','北京'),(48,'小马宝莉','2018-03-08 11:44:00','女','北京修正');
```

#### 1.pom.xml

如果我们想使用mybatis，不仅要下载mybatis依赖，还要下载mysql依赖等。

``` xml
<!-- pom.xml -->

 <!--导入依赖-->
    <dependencies>
        <!--mysql驱动-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.17</version>
        </dependency>
        <!--mybatis-->
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.5.2</version>
        </dependency>
        <!--junit-->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
        </dependency>
    </dependencies>
```
<!-- --- -->
<!-- #### 创建实体类和dao接口

如下目录创建

dao > UserDao  
domain > User  

我们User中写实体类，实体类名称必须保证和数据库的字段名称一样

所有的方法都写在domain中

![ml](..\images/1502_ml.png)

``` java
// User类
 import java.util.Date;
import java.io.Serializable;
// 引入序列化接口
public class User implements Serializable {
    private Integer id;
    private String username;
    private Date birthday ;
    private String sex;
    private String address;
    // 然后记得一定要生成getter and setter和to String()方法。不然无法赋值或调用。这一点再咱们第14章绑定数据中说过。
}
```

``` java
// UserDao接口实现方法
import com.xiaozhoubg.domain.User;

import java.util.List;

//用户的持久层接口
public interface UserDao {

    //定义返回值是List数组类型
    //查询所有
    List<User> findAll();
}
``` -->

#### 2.创建mybatis的主配置文件和映射配置文件

再咱们的resources配置文件下面创建mybatiscof.xml文件和UserDao.xml配置映射文件
![ml2](../images/1502_ml3.png)

``` xml
<!-- mybatisConfig.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
<!--    配置环境-->
    <environments default="mysql">
        <environment id="mysql">
<!--            配置事务的类型-->
            <transactionManager type="JDBC"></transactionManager>
<!--            配置连接池，里面写数据的基本信息-->
            <dataSource type="POOLED">
<!--                数据库驱动-->
                <property name="driver" value="com.mysql.jdbc.Driver"/>
<!--                数据库地址-->
                <property name="url" value="jdbc:mysql://localhost:3306/mybatis"/>
<!--                数据库账户-->
                <property name="" value=""/>
<!--                数据库密码-->
                <property name="" value=""/>
            </dataSource>
        </environment>
    </environments>

<!--    指定映射配置文件的位置，映射配置文件是指dao的独立配置文件-->
    <mappers>
        <!-- 映射配置文件地址 -->
        <mapper resource="com/xiaozhoubg/dao/UserDao.xml" />
    </mappers>
</configuration>
```

#### 3.编写mybatis工具类

``` java
// MybatisUtils
package com.xiaozhoubg.utils;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.InputStream;

public class MybatisUtils {
    private static SqlSessionFactory sqlSessionFactory;
    static {
        try {
            //    读取配置文件
            String resource = "mybatis-config.xml";
            InputStream inputStream = Resources.getResourceAsStream(resource);
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
    //既然有了 SqlSessionFactory，顾名思义，我们就可以从中获得 SqlSession 的实例了。
    // SqlSession 完全包含了面向数据库执行 SQL 命令所需的所有方法。
    // 你可以通过 SqlSession 实例来直接执行已映射的 SQL 语句。
    public  static SqlSession getSqlSession(){
        return sqlSessionFactory.openSession();
    }
}
```

#### 4.编写实体类

``` java
// User
// 注意这个实体类里的私有类名必须和之前数据库创建的字段名名称一样
package com.xiaozhoubg.pojo;

public class User {
    private  int id;
    private  String name;
    private  String pwd;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", pwd='" + pwd + '\'' +
                '}';
    }
}

```

#### 5.编写dao接口

``` java
 package com.rui.dao;
  
  import com.rui.pojo.User;
  
  import java.util.List;
  
  public interface UserDao {
      List<User> getUserList();
  }
```



<!-- 接下来创建UserDao.xml文件来映射之前的dao接口

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!--        namespace映射的dao接口地址-->
<mapper namespace="com.xiaozhoubg.dao.UserDao">
<!--配置查询所有-->
<!--    id="findAll" 中的findAll要对应之前dao接口中的方法（List<User> findAll()）-->
    <select id="findAll">
        select * from user
    </select>
</mapper>

``` -->

到这里咱们的基本配置就ok了。

### 三、配置框架流程分析

咱们已经创建好了基本环境，下面咱们把创建的流程分析一下，让大家有个具体的印象
1. 搭建数据库
1. 创建maven工程，导入依赖
   创建mybatis的主配置文件mybatis-config.xml来配置数据库


2. 创建实体类（domain）和dao的接口（dao）。数据库的方法都实现再dao接口中
3. 创建mybatis的主配置文件mybatisConfig.xml来配置数据库和映射文件
4. 创建映射配置文件UserDao.xml来映射dao之前的接口

### 四、
>>>>>>> develop
