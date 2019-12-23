# 第04节：sequelize

### 一、ORM框架概述

对象关系映射（Object Relational Mapping，简称ORM）模式是一种为了解决面向对象与关系数据库存在的互不匹配的现象的技术。简单的说，ORM是通过使用描述对象和数据库之间映射的元数据，将程序中的对象自动持久化到关系数据库中。那么，到底如何实现持久化呢？一种简单的方案是采用硬编码方式，为每一种可能的数据库访问操作提供单独的方法。

**这种方案存在以下不足：**

1. 持久化层缺乏弹性。一旦出现业务需求的变更，就必须修改持久化层的接口 
2. 持久化层同时与域模型与关系数据库模型绑定，不管域模型还是关系数据库模型发生变化，毒药修改持久化曾的相关程序代码，增加了软件的维护难度。 

ORM提供了实现持久化层的另一种模式，它采用映射元数据来描述对象关系的映射，使得ORM中间件能在任何一个应用的业务逻辑层和数据库层之间充当桥梁。Java典型的ORM中间件有:``Hibernate``,``ibatis``,``speedframework``。 

**ORM的方法论基于三个核心原则：**

* 简单：以最基本的形式建模数据。
* 传达性：数据库结构被任何人都能理解的语言文档化。
* 精确性：基于数据模型创建正确标准化了的结构。

### 二、引入sequelize

**安装egg-sequelize**

```js
# 下载依赖，安装egg-sequelize和mysql27
npm install --save egg-sequelize mysql2
```

**在egg项目中配置egg-sequelize**

```js
// config/plugin.js
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
}
```

```js
// config/config.default.js
  config.sequelize = {
    dialect: 'mysql', 
    database: 'army',  //数据库名
    host: 'localhost',
    port: '3306',
    username: 'root',  //用户名
    password: '',      //密码
    operatorsAliases: false,
  }
```

```js
// 根目录 app.js，没有创建一个app.js
module.exports = app => {
    app.beforeStart(async function () {
        // await app.model.sync({ force: true }); // 开发环境使用，会删除数据表
        await app.model.sync({});//会永久保存数据
    });
};
```

### 三、创建数据模型

**数据模型**

这种模式可以通过控制器和服务进行访问app.model.Clazz或者ctx.model.Clazz，比如我们写app/controller/Clazz.js：
```js
// app/model/clazz.js
module.exports = app => {
    const {
        STRING
    } = app.Sequelize;//数据库字段类型，一对多

    const Clazz = app.model.define('clazz', {  //sequelize会自动创建主键
        name: STRING,//数据库字段名称与字段类型
    })

    return Clazz; //返回班级
}
```

```js
// app/model/students.js
module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Students = app.model.define('students', {
        name: STRING,
    })

    Students.associate = function () {
        app.model.Students.belongsTo(app.model.Clazz, {  //设置外键
            foreignKey: 'clazz_id',//关联的外键
            as: 'clazz'//将关联的数据显示到该字段上
        })
    }

    return Students;
}
```

### 四、操作数据

**Controller获取数据**

```js
// app/controller/clazz.js
'use strict';

const Controller = require('egg').Controller;

class ClazzController extends Controller {
    //查询班级列表
    async index() {  
        const clazzList = await this.app.model.Clazz.findAll();//查询数据库中Clazz.
        await this.ctx.render('clazz_list', {
            clazzList: clazzList//将记录标题'Hello World'插入'posts'表
            //查询条件和结果自定义
        })
    }

    //添加班级的页面
    async insertClazz(){  
        await this.ctx.render('create_clazz.html')
    }

    //在数据库中添加班级
    async create() {
        const body = this.ctx.request.body;
        const clazz = {
            name:body.name
        }
        await this.app.model.Clazz.create(clazz);//把添加得班级存入到数据库中。
        this.ctx.redirect("/clazz")//重镜像，添加数据之后自动跳转/Clazz页面
    }

    //通过id在数据库中删除班级
    async destroy() {
        const id = this.ctx.request.body.clazz_id;
        const student = await this.app.model.Clazz.findOne({
            where: {
                id: id
            }
        });
        student.destroy();
        this.ctx.redirect("/clazz")
    }
}

module.exports = ClazzController;
```

```js
// app/controller/students.js
'use strict';

const Controller = require('egg').Controller;

class StudentsController extends Controller {
    // 联查学生信息
    async index() {
        const studentList = await this.app.model.Students.findAll({
            include:[{  //联查班级的数据
                model:this.app.model.Clazz,
                as:'clazz'
            }]
        });
        await this.ctx.render('student_list.html', {
            studentList: studentList
        })
    }

    //添加学生的页面
    async insertStudent() {
        const clazzList = await this.app.model.Clazz.findAll();
        await this.ctx.render('create_student.html', {
            clazzList
        })
    }

    // 在数据库中添加学生
    async create(){
        const body = this.ctx.request.body;
        const student = {
            name:body.name,
            clazz_id:body.clazz_id
        }
        await this.app.model.Students.create(student);
        this.ctx.redirect("/students")
    }

    // 通过id删除学生信息
    async destroy(){
        const id = this.ctx.request.body.student_id;
        //findOne指的是查找指定表的单条数据，返回一个对象
        const student = await this.app.model.Students.findOne({
            //where()条件查询
            where:{
                id:id
            }
        });
        student.destroy();
        this.ctx.redirect("/students")
    }
}

module.exports = StudentsController;
```
