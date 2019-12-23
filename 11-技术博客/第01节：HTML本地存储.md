# HTML本地存储

### 一、HTML本地存储简介

通过本地存储（Local Storage），web 应用程序能够在用户浏览器中对数据进行本地的存储。

在 HTML5 之前，应用程序数据只能存储在 cookie 中，包括每个服务器请求。本地存储则更安全，并且可在不影响网站性能的前提下将大量数据存储于本地。

与 cookie 不同，存储限制要大得多（至少5MB），并且信息不会被传输到服务器。

本地存储经由起源地（origin）（经由域和协议）。所有页面，从起源地，能够存储和访问相同的数据。

### 二、HTML 本地存储对象

HTML 本地存储提供了两个在客户端存储数据的对象：

1. window.localStorage - 存储没有截止日期的数据

2. window.sessionStorage - 针对一个 session 来存储数据（当关闭浏览器标签页时数据会丢失） 

* 我们这里只讲localStorage存储，sessionStorage存储会在会在后期详细讲解


### 三、localStorage对象

 localStorage 对象存储的是没有截止日期的数据。当浏览器被关闭时数据不会被删除，在下一天、周或年中，都是可用的。

 // 存储localStorage对象
 创建 localStorage 名称/值对，其中：name="lastname"，value="Gates"
 ```js
localStorage.setItem("lastname", "Gates");
```

// 取回
取回 "lastname" 的值，并把它插到 id="result" 的元素中
```js
document.getElementById("result").innerHTML = localStorage.getItem("lastname");
```
//删除

```js
localStorage.removeItem("lastname");
```