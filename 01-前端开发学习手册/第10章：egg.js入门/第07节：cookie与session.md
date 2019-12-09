# 第07节：cookie与session

### 一、cookie的基本概念

* cookie 是存储于访问者的计算机中的变量。可以让我们用同一个浏览器访问同一个域名的时候共享数据，实现数据的持久化。
* HTTP 是无状态协议。简单地说，当你浏览了一个页面，然后转到同一个网站的另一个页面，服务器无法认识到这是同一个浏览器在访问同一个网站。每一次的访问，都是没有任何关系的。
* cookie可以设置多个。

### 二、cookie在项目中的应用

#### 通过cookie记录访问次数

``let count = ctx.cookies.get('count');``

设置 Cookie 其实是通过在 HTTP 响应中设置 set-cookie 头完成的，每一个 set-cookie 都会让浏览器在 Cookie 中存一个键值对。在设置 Cookie 值的同时，协议还支持许多参数来配置这个 Cookie 的传输、存储和权限。

案例解析

1. 可以看到下图中home与router都是最初始的原代码
![10-07-01a](../images/1007_1a.png)
![10-07-01b](../images/1007_1b.png)

2. 然后启动服务器，打开浏览器，按F12找到Network,然后找到Cookie,接着图2可以发现Name中只有Request与Response。

![10-07-02a](../images/1007_2a.png)
![10-07-02b](../images/1007_2b.png)

3. 开始使用Cookie,
如图中index方法中的代码写的就是cookie，

![10-07-03a](../images/1007_3a.png)

4. 实现功能
如图,每次访问一次他就会记录一次，

![10-07-04a](../images/1007_4a.jpg)
![10-07-04b](../images/1007_4b.jpg)


[案例](https://github.com/ding139725/R-D/tree/master/script/egg-cookie)

<!-- #### 基于cookie实现记录用户登录状态 -->



### 三、session的基本概念
  
* session 是另一种记录客户状态的机制，session基于cookie，
不同的是 Cookie 保存在客户端浏览器中，而session 保存在服
务器上，相对于cookie，session更安全。

<!-- #### 基于session实现记录用户登录状态 -->

* Session 的工作流程
当浏览器访问服务器并发送第一次请求时，服务器端会创建一个 session 对象，生成一个类似于 key,value 的键值对， 然后将 key(cookie)返回到浏览器(客户)端，浏览器下次再访问时，携带 key(cookie)，找到对应的 session(value)。

```js
     //设置
        this.ctx.session.userinfo={
	        name:'张三', 
            age:'20'
        };

    //获取
        var userinfo=this.ctx.session;

    //Session 的默认设置
        exports.session = {
            key: 'EGG_SESS',
            maxAge: 24 * 3600 * 1000, // 1 day httpOnly: true,
            encrypt: true
        };

    //Session 在 config.default.js 中的配置
        config.session={
            key:'SESSION_ID',
            maxAge:864000,
            renew: true //延长会话有效期
        };

```
### cookie 和session 区别
* cookie 数据存放在客户的浏览器上，session 数据放在服务器上。
* cookie 相比 session 没有 session 安全，别人可以分析存放在本地的 * Cookie 并进行 COOKIE欺骗。
* session 会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能考虑到减轻服务器性能方面，应当使用 COOKIE。
* 单个 cookie 保存的数据不能超过 4K，很多浏览器都限制一个站点最多保存 * 20 个 cookie。
