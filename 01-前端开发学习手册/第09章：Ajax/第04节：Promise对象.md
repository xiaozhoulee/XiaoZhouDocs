# 第04节：Promise对象

### 一、Promise对象概述

promise是异步编程的一种解决方法，比回调函数和事件更强大更合理。

所谓promise简单说就是一个容器，里面保存着未来才会结束的事件（通常是一个异步操作的结果），从语法上说promise是一个对象，通过它可以获取异步操作的消息。

创建一个promise对象
``` html
<script>
    var p = new Promise(); 
        p.then()
</script>
```


#### 说明

Promise对象是ES2015添加的新特性

简单来说就是一个对象,用来传递异步操作的消息,是解决异步编程的一种方 案,promise原理说起来并不难,他的内部有三个状态,分别是pending , fulfilled 和 rejected . pending是对象创建后的初始状态，当对象fulfill（成功时）变为fulfilled， 当对象reject（失败时）变为rejected。且只能从pengding变为fulfilled或rejected ， 而不能逆向或从fulfilled变为rejected 、从rejected变为fulfilled,

![教务管理系统示意图](../images/0804_promise.jpg)

 
#### Promise的优劣


有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。 

Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。



### 二、使用Pormise对象封装一个Ajax方法
 
``` html
<script>
        function myajax(method,url,next) {
//封装
            return new Promise(function(resolve){
                var xhr = new XMLHttpRequest();
                xhr.open(method, url);
                xhr.send();//可以向后台传输数据
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        resolve(xhr.responseText);
                    }
                }
            })

        }
//使用封装的Pormise
        document.querySelector("button").onclick = function() {
            var p = myajax("get","hello.txt");
            p.then(function(data){
                //then方法提供一个供自定义的回调函数，若传入非函数，则会忽略当前then方法。
                //回调函数中会把上一个then中返回的值当做参数值供当前then方法调用。
                //then方法执行完毕后需要返回一个新的值给下一个then调用（没有返回值默认使用undefined）。
                //每个then只可能使用前一个then的返回值。
                
            
                alert(data);
            })
        }
</script>
```