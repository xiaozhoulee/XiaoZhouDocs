# 第02节：IDEA创建mybatis项目

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
  `id` int(11) NOT NULL auto_increment,
  `username` varchar(32) NOT NULL COMMENT '用户名称',
  `birthday` datetime default NULL COMMENT '生日',
  `sex` char(1) default NULL COMMENT '性别',
  `address` varchar(256) default NULL COMMENT '地址',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



insert  into `user`(`id`,`username`,`birthday`,`sex`,`address`) values (41,'老王','2018-02-27 17:47:08','男','北京'),(42,'小二王','2018-03-02 15:09:37','女','北京金燕龙'),(43,'小二王','2018-03-04 11:34:34','女','北京金燕龙'),(45,'传智播客','2018-03-04 12:04:06','男','北京金燕龙'),(46,'老王','2018-03-07 17:37:26','男','北京'),(48,'小马宝莉','2018-03-08 11:44:00','女','北京修正');
```

#### pom.xml

如果我们想使用mybatis，不仅要下载mybatis依赖，还要下载mysql依赖等。

``` xml
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
        <!--junit（单元测试）-->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
        </dependency>
              <!-- 导入日志包-->
      <dependency>
        <groupId>log4j</groupId>
        <artifactId>log4j</artifactId>
        <version>1.2.17</version>
      </dependency>
    </dependencies>
```

#### 创建实体类和dao接口

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
```

#### 创建mybatis的主配置文件和映射配置文件

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

接下来创建UserDao.xml文件来映射之前的dao接口

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

```

到这里咱们的基本配置就ok了。

### 三、配置框架流程分析

咱们已经创建好了基本环境，下面咱们把创建的流程分析一下，让大家有个具体的印象

1. 创建maven工程，导入依赖
2. 创建实体类（domain）和dao的接口（dao）。数据库的方法都实现再dao接口中
3. 创建mybatis的主配置文件mybatisConfig.xml来配置数据库和映射文件
4. 创建映射配置文件UserDao.xml来映射dao之前的接口

### 四、