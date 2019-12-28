# 第02节：路由

### 一、路由简介

  Router 主要用来描述请求 ``URL`` 和具体承担执行动作的 ``Controller`` 的对应关系， 框架约定了 ``app/router.js`` 文件用于统一所有路由规则.
  通过统一的配置，我们可以避免路由规则逻辑散落在多个地方，从而出现未知的冲突，集中在一起我们可以更方便的来查看全局的路由规则。


### 二、定义Router

**``app/controller`` 目录下面实现 Controller**

![10-02-01a](../images/10-02-01a.jpg)

**``app/router.js`` 里面定义 URL 路由规则**

![10-02-01b](../images/10-02-01b.jpg)

这样就完成了一个最简单的 Router 定义，当用户执行` GET /`，home.js 这个里面的 `index` 方法就会执行。

### 三、修改路由

1. 以下代码可以看出定义了一个新的方法叫Students,
```js
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async Students() {
    this.ctx.body = "hi, students"
  }
}

module.exports = HomeController;

```

2. 路由的修改
为新的方法设置一个Router，可以发现当路径访问/students时，页面显示`hi，students`。
```js
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
//app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index); //get方法，跳转至controller/home.js 文件中的index方法
  router.get('/students', controller.home.students); //get方法，跳转至controller/home.js 文件中的students方法
};
```

### 四、设置路由参数

#### 参数获取

**Query String 方式**

``` js
// app/router.js
module.exports = app => {
  app.router.get('/search', app.controller.search.index);
};

// app/controller/search.js
exports.index = async ctx => {
  ctx.body = `search: ${ctx.query.name}`;
};

// curl http://127.0.0.1:7001/search?name=egg
```

**参数命名方式**

```js
// app/router.js
module.exports = app => {
  app.router.get('/user/:id/:name', app.controller.user.info);
};

// app/controller/user.js
exports.info = async ctx => {
  ctx.body = `user: ${ctx.params.id}, ${ctx.params.name}`;
};

// curl http://127.0.0.1:7001/user/123/xiaoming
```

**复杂参数的获取**

路由里面也支持定义正则，可以更加灵活的获取参数：

```js
// app/router.js
module.exports = app => {
  app.router.get(/^\/package\/([\w-.]+\/[\w-.]+)$/, app.controller.package.detail);
};

// app/controller/package.js
exports.detail = async ctx => {
  // 如果请求 URL 被正则匹配， 可以按照捕获分组的顺序，从 ctx.params 中获取。
  // 按照下面的用户请求，`ctx.params[0]` 的 内容就是 `egg/1.0.0`
  ctx.body = `package:${ctx.params[0]}`;
};

// curl http://127.0.0.1:7001/package/egg/1.0.0
```