# 第04节：JS-SDK接口

### 一、概述

微信JS-SDK是微信公众平台面向网页开发者提供的基于微信内的网页开发工具包。例如我们网页中希望实现扫一扫、获取本地相册、位置信息、分享功能等，都可以使用JS-SDK来实现。

### 二、JS-SDK使用步骤

我们可以通过下面五步来使用JS-SDK。

1. 绑定域名：在第02节：微信登录中我们已经介绍了，需要在公众号的设置中，绑定【JS接口安全域名】。
2. 引入js文件 http://res.wx.qq.com/open/js/jweixin-1.4.0.js
3. 通过config接口注入权限验证配置，代码如下所示，这里需要说明一下，生成JS-SDK的签名需要用到jsapi_ticket。而获取jsapi_ticket需要先获取access_token。具体获取方法可以参照本节下一部分内容。

``` js
wx.config({
  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: '', // 必填，公众号的唯一标识
  timestamp: , // 必填，生成签名的时间戳
  nonceStr: '', // 必填，生成签名的随机串
  signature: '',// 必填，签名，上一节已经讲解了获取签名的方法
  jsApiList: [] // 必填，需要使用的JS接口列表
});
```
4. 通过ready接口处理成功验证

``` js
wx.ready(function(){
  // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
});
```

5. 通过error接口处理失败验证

``` js
wx.error(function(res){
  // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
});
```

### 三、实际案例

下面通过一个分微信享功能的示例代码展示如何使用JS-SDK。

#### 获取access_token

通过appid和secret两个参数，调用下面接口可以获取到access_token。获取到access_token我们才能进一步调用其他接口，但是access_token两个小时刷新一次，所以为了防止access_token失效，建议将access_token自行存储在服务器中，并且每两个小时重新获取一次。

``` 
https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=SECRET
```

#### 获取jsapi_ticket

拿到access_token之后，可以在进一步获取jsapi_ticket，接口如下所示

``` 
https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi
```

#### 配置签名需要的参数

``` js
//时间戳
const timestamp = Math.floor(new Date().getTime() / 1000);  
//随机字符串
const nonceStr = Math.random().toString(36).substr(2, 15);
//jsapi_ticket
const jsapi_ticket;  //通过上述接口获取
//当前页面的url
const url;
//拼接成参数对象
const params = {
   jsapi_ticket,
   timestamp,
   noncestr,
   url
}
//利用上一节的签名算法生成签名
const signature = getSign(params)
```

#### 权限验证配置

以上代程序由服务器端完成，通过以上程序，我们已经得到了时间戳、加密字符串，还有签名，然后再前端的页面中引入JS-SDK的js文件，地址如下所示

``` 
http://res.wx.qq.com/open/js/jweixin-1.4.0.js
```

引入完成之后，进入JS-SDK的配置环节。

``` js
wx.config({
   debug: false, 
   appId: '{{appid}}', 
   timestamp: Number('{{timestamp}}'), 
   nonceStr: '{{nonceStr}}', 
   signature: '{{signature}}', 
   jsApiList: [
       "updateAppMessageShareData",
       "updateTimelineShareData"
   ] 
});
```

jsApiList中加入的是两个分享功能的接口，配置完成之后，调用接口即可，代码如下所示。

``` js
wx.ready(function () {
   wx.updateAppMessageShareData({
       title: title, // 分享标题
       desc: desc, // 分享描述
       link: requer_url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
       imgUrl: imgUrl, // 分享图标
       success: function () {

       }
   });
   wx.updateTimelineShareData({
       title: title, 
       desc: desc, 
       link: requer_url, 
       imgUrl: imgUrl, 
       success: function () {

       }
   });
});
```

通过上面的设置，我们在此网页中就可以是实现微信分享功能了。

