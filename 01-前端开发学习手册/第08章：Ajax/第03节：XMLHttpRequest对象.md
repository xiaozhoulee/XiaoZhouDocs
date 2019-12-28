# 第03节：XMLHttpRequest对象

### 一、Ajax原理

Ajax 的全称是Asynchronous JavaScript and XML（异步的JavaScript 和 XML），其中，Asynchronous 是 异步 的意思，它不同于传统web开发中采用同步方式请求数据。

上一节我们使用jQuery实现了异步交互数据，本节我们不依赖任何库和框架来实现异步数据交互。

 #### 使用xhr（也就是XMLhttpRequest）实现数据请求
``` html
<script>
    //xhr实现数据请求
        document.querySelector("button").onclick = function(){
            var xhr = new XMLHttpRequest();
            xhr.open("get","/hello.txt");
            xhr.send()
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    alert(xhr.responseText)
                }
            }
        }
</script>
```



### 二、封装一个Ajax方法

上一节我们说了异步不能通过return来返回想要的值现在我们用回调（解决异步返回数据的一种方法）来封装一个Ajax方法

``` html
<script>
    //使用回調函數封装ajax方法
        function myajax(method,url,next) {//next及回调的值
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.send()
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {//这里的4是readystate的一种状态
                    next(xhr.responseText);//回调xhr.responseText是后台处理过的字符串
                }
            }
        }

    document.querySelector("button").onclick = function() {//调用封装的Ajax
        //不能使用return获取异步数据
        // var result = myajax("get","/hello.txt");
        // alert(result);
        myajax("get","/hello.txt",function(data){
            alert(data);
        });
    }
</script>
```
案例中的(xhr.readystate === 4)是readyState的一种状态readyState一共有五种状态

* 0：请求未初始化，还没有调用 open()。
* 1：请求已经建立，但是还没有发送，还没有调用 send()。
* 2：请求已发送，正在处理中（正常情况下现在可以从响应中获取内容头）。
* 3：请求在处理中；通常响应中已有部分数据可用了，还未全部完成。
* 4：响应已完成；您可以获取并使用服务器的响应了。


### 三、实际工作中的应用

在实际工作中，我们很少直接用到XMLHttpRequest对象。我们一直会用一些封装好的库或框架来实现异步数据交互，但是我们可以通过自己动手封装Ajax来进一步学习后续的内容，
下面我们即将讲解下面两种封装Ajax的方法。
* Promise对象
* async函数