# 第06节：axios

### 一、为什么使用axios

#### axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，它本身具有以下特征：

* 从浏览器中创建 XMLHttpRequest
* 从 node.js 发出 http 请求
* 支持 Promise API
* 拦截请求和响应
* 转换请求和响应数据
* 取消请求
* 自动转换JSON数据
* 客户端支持防止CSRF/XSRF攻击


### 二、axios的常用方法


axuis返回的是promise对象

```js
//返回对象的形式 
{
  data:{},
  status:200,
  //从服务器返回的http状态文本
  statusText:'OK',
  //响应头信息
  headers: {},
  //`config`是在请求的时候的一些配置信息
  config: {}
}
```

如果要调用以上数据的话

``` js
axios.get('/user/12345')
  .then(function(res){
    console.log(res.data);//输出data
    console.log(res.status);//输出请求状态
    console.log(res.statusText);
    console.log(res.headers);
    console.log(res.config);
  })
```




#### 实际应用

get 请求

``` js
//1.get请求(无参数)
    axios.get('http://www.xxx')
    .then(function(response){
        //请求成功
    }).catch(function(erroe){
        //请求失败
    });
```

``` js
//2.get请求(有参数)
      axios.get('http://www.xxx?a=1&b=2')
        .then(function(response){
            //请求成功
        }).catch(function(erroe){
            //请求失败
        });
```
post 请求

``` js
//必须引入qs对data进行stringify  安装axios时已经安装了qs,无需再安装，引入即可用。
    // import Qs  from 'qs'  
     let data=Qs.stringify({a:1,b:2});
     axios.post('http://www.xxx',data)
     .then(function(response){
         //请求成功
     }).catch(function(error){
         //请求失败
     })



     //多个请求同时发送
     function axiosOne(){
      return axios.get('http://www.url.one')   
     };
     function axiosTwo(){
      return axios.get('http://www.url.two')   
     };
    axios.all([axiosOne(),axiosTwo()])
   .then(axios.spread(function(acct, perms){
        console.log(acct);//请求一的结果；
        console.log(perms);//请求二的结果
   }))
```

