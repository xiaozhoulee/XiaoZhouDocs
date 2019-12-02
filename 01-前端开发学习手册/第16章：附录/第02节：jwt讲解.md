# JWT讲解

### 一、JWT简介

JWT（JSON WEB TOKEN）：JSON网络令牌，JWT是一个轻便的安全跨平台传输格式，定义了一个紧凑的自包含的方式在不同实体之间安全传输信息（JSON格式）。它是在Web环境下两个实体之间传输数据的一项标准。实际上传输的就是一个字符串。广义上讲JWT是一个标准的名称；狭义上JWT指的就是用来传递的那个token字符串。

简单来说：JWT是目前最流行的跨域身份验证解决方案，主要用于前后端分离项目的保持登录状态的方法。

### 二、Token概念

Token是服务器签发的一串加密字符串，是为了给客户端重复访问的一个令牌，作用是为了证明请求者（客户端）的身份，保持用户长期保持登录状态。

### 三、JWT的原理和工作方法


1. 浏览器向服务器端发送账号和密码
2. 服务器端验证账号与密码 如果成功，生成Token传给用户端，如果失败，则返回登录失败。
3. 浏览器利用localstorage存入token
4. 浏览器每次发送请求都带着token，服务器端判断当前的Token是否有效。判断有效则返回给浏览器数据，无效则返回false
5. 浏览器接收到false时，返回登录页。
   
![示例图片](../images/jwt.png)


### 四、主要知识点

* 利用[egg-jwt](https://www.npmjs.com/package/egg-jwt)生成Token 
* localstorage本地存储Token
* [导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E8%B7%AF%E7%94%B1%E7%8B%AC%E4%BA%AB%E7%9A%84%E5%AE%88%E5%8D%AB)验证有无token
* 携带token发送请求
* egg后台中间件（Middleware）的使用 <b>详情参考[中间件](https://eggjs.org/zh-cn/basics/middleware.html#mobileAside)</b>
* 注销登录状态

### 五、具体开发流程如下 
具体案例地址[jwt](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/%E9%99%84%E5%BD%95/jwt)

* 利用egg-jwt生成Token,示例代码如下所示：
  
  ``` js
    const token = app.jwt.sign({
    
     username: data.username, //需要存储的 token 数据
     //......
     
    }, app.config.jwt.secret);

    ```

* localstorage本地存储Token,示例代码如下所示：
  
  ``` js

    localStorage.setItem('存储的名字'，'存储的值')

    localStorage.setItem('token',res.code.token)

  ```

* 导航守卫
  
    导航表示前端的路由正在发生改变，vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。
    我们可以使用 router.beforeEach 注册一个全局前置守卫,每个守卫方法接收三个参数
    to: Route: 即将要进入的目标 路由对象

    from: Route: 当前导航正要离开的路由

    next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
    当前端跳转时，需要验证有无token，我们就是利用导航守卫来实现这个效果的，示例代码如下所示：
  ``` js
  router.beforeEach((to, from, next) => {
    let token = localStorage.getItem("token");
    console.log(token)
    <!-- 路由"/"为登录页 -->
    if (token || to.path === "/") {
        next();
    } else {
        next({
            path:"/"
        });
    }
  })  
  ```
* 携带token发送请求
  要想实现携带token发送请求，就需要把token封装到request header里,示例代码如下所示：

  ``` js
  config.headers.token = localStorage.getItem('token');
  ```
* egg后台中间件的使用

  egg后台的中间件(middware)用来验证token，示例代码如下所示：
  ``` js
  module.exports = () => {
    return async function (ctx, next) {
        if (ctx.request.header['token']) {
            await next();
        } else {
            ctx.status = 401;
            ctx.body = {
                message: '没有token'
            }
            return;
        }
    }
  };

  ```

* 注销登录状态
  
    注销登录状态的原理就是将前端localstorage
    本地存储的Token删除，再刷新页面，这样导航守卫
    就找不到Token自动返回到登录页,示例代码如下所示：

  ```js
          localStorage.removeItem('token')
          <!-- 刷新页面 -->
              location.reload();
  ```