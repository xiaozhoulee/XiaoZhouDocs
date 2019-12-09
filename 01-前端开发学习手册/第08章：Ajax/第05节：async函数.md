# 第05节：async

### 一、异步的终极解决方案-async函数

异步操作是 JavaScript 编程的麻烦事，麻烦到一直有人提出各种各样的方案，试图解决这个问题。

从最早的回调函数，到 Promise 对象，再到 Generator 函数，每次都有所改进，但又让人觉得不彻底。它们都有额外的复杂性，都需要理解抽象的底层运行机制。

异步I/O不就是读取一个文件吗，干嘛要搞得这么复杂？异步编程的最高境界，就是根本不用关心它是不是异步。

async 函数就是隧道尽头的亮光，很多人认为它是异步操作的终极解决方案。

### 二、async方法

async基础用法

``` js
function fn(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('hi')
        },1000)//模拟真实项目延迟
    })
}

function fnAsy(){
            //用同步的写法，实现异步的效果
            let result1 = await fn("abc");//await，字面意思等待向fn传输数据后再执行下面的指令
            let result2 = await fn("def");//向fn传输参数def
            console.log(result1);//输出
            console.log(result2);
        }

        fnAsy();//最后调用这个函数
//正如我们所见，自执行函数里面的代码会一行一行地执行，很优雅地解决了异步操作的问题。
```






