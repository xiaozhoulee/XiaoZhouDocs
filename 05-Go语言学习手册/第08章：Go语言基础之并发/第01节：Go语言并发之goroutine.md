# 第01节：Go语言并发之goroutine

##### 并发是编程里面一个非常重要的概念，Go语言天生支持并发，这也是Go语言流行的一个很重要的原因;

### 一、并行与并发概念

**并发** :同一时间段执行多个任务(例如:你用微信和两个朋友聊天)
**并行** :同一时刻执行多个任务(例如:你的朋友都在用微信和你女朋友聊天)
Go语言并发通过 `goroutine`实现，`goroutine`类似于线程,属于用户线程，我们可以根据需要创建成千上万个`gorouting`并发工作，`goroutine`是由Go语言运行时(runtime)调度完成，而线程是由操作系统调度完成，
Go语言还提供了`channel`在多个`goroutine`间通信，`goroutine`和`channel`是Go语言秉承的
GSP(Communicating Sequential Process)并发模式的重要实现基础;

### 二、gorotine概念

在java/c++中我们要实现并发编程的时候，我们通常需要自己维护自己的线程池，并且需要自己包装一个又一个的任务 同时需要自己去调度线程执行任务并维护上下文切换，这一切通常会消耗程序员大量的心智，那么能不能有一种机制,程序员只需要定义多个任务，让系统帮助我们把这些任务分配到CPU上实现并发执行呢?
Go语言中`goroutine`就是这样一种机制, `goroutine`的概念类似于线程，但 `goroutine`是由Go的运行时(runtime)调度和管理的，Go程序会智能的将`goroutine`中的任务合理的分配给CPU。Go语言之所以别称为现代化的编程语言，就是因为它在语言层面已经内置了调度和上下文切换的机制;
在Go语言编程中你不需要自己写`进程`、`线程`、`协程`,你的技能包里只有一个技能-`goroutine`当你需要某个任务开发执行的时候，只需要把这个任务包装成功一个函数，开启一个`goroutine`去执行这个函数就可以了，简单粗暴;

### 二、使用goroutine

##### 如何使用goroutine

Go语言中使用`goroutine`非常简单，只需要在调用函数时前面加上一个`go`关键字，就可以为一个函数创建一个`gorution`
一个`goroutine`必须对应一个函数，可以创建多个`goroution`去执行相同函数;

##### 启动单个goroutine

启动goroutine的方式很简单只需要在调用的函数(普通函数和匿名函数)前面加个`go`关键字:
举个例子:

```go
func hello() {
	fmt.Println("Hello Goroutine!")
}
func main() {
	hello()
	fmt.Println("main goroutine done!")
}
```

这个示例中Hello函数和下面的语句是串行的，执行结果是打印完`Hello Goroutine`后打印`main goroutine done!`
接下来我们调用hello函数前面加上关键字`go`，也就是启动一个goroutine去执行hello这个函数;

```go
func hello() {
	fmt.Println("Hello Goroutine!")
}
func main() {
	go hello() // 启动另外一个goroutine去执行hello函数
	fmt.Println("main goroutine done!")
}
```

这次执行结果只打印了`main goroutine done！`并没有打印`Hello Goroutine!`，为什么呢？
当程序启动时，Go程序就会为`main()`函数创建一个默认的`goroutine`
当main()函数返回该`goroutine`就结束了，所有在`main()`函数中启动的`goroutine`会一同结束，`mian`函数所在的`goroutine`会一同结束，`main`函数所在的`goroutine`就像是权利游戏里面中的夜王，其他的`goroutine`都是异鬼，夜王一死其他的异鬼也就四翘翘了。
所以我们要想办法让main函数等一等hello函数，最简单粗暴的方式就是`time.Sleep`了。

```go
func hello() {
	fmt.Println("Hello Goroutine!")
}
func main() {
	go hello() // 启动另外一个goroutine去执行hello函数
	fmt.Println("main goroutine done!")
	time.Sleep(time.Second)
}
```

执行上面的代码你会发现，这一次先打印`main goroutine done`然后紧接着打印`Hello Goroutine!`
首先为什么会先打印`main goroutine done`，是因为我们创建新的goroutine时候需要花费一些时间，而此时main函数所在的`goroutine`是继续执行的。

##### 启动多个goroutine

在Go语言中实现并发就是这么简单，我们还可以启动多个`goroutine`，让我们来举个例子：(这里我们使用了`sync.WaitGrop`来实现goroutine的同步)

```go
var wg sync.WaitGroup

func hello(i int) {
	defer wg.Done() // goroutine结束就登记-1
	fmt.Println("Hello Goroutine!", i)
}
func main() {

	for i := 0; i < 10; i++ {
		wg.Add(1) // 启动一个goroutine就登记+1
		go hello(i)
	}
	wg.Wait() // 等待所有登记的goroutine都结束
}
```

以上实例输出结果为:

```go
Hello Goroutine! 1
Hello Goroutine! 2
Hello Goroutine! 9
Hello Goroutine! 4
Hello Goroutine! 5
Hello Goroutine! 6
Hello Goroutine! 7
Hello Goroutine! 3
Hello Goroutine! 8
Hello Goroutine! 0
```

多次执行上面代码，会发现每次打印的数字顺序不一样，这是因为10个`goroutine`是并发执行的，而 `goroutine`是并发执行的，而`goroutine`的调度是随机的

### 三、goroutine与线程

##### 可增长的线程

OS线程(操作系统线程)一般都有固定好的栈内存(通常为2MB)，一个`goroutine`的栈在其生命周期开始时只有很小的栈(典型情况下2KB),`goroutine`栈不是固定的，他可以按需增加缩减，`goroutine`的栈大小可以限制可以达到1GB，虽然极少会用到这么大，所以在Go语言中一次创建十万左右`goroutine`也是可以的。

##### goroutine调度

`GMP`是Go语言运行时(runtime)层面的实现，是Go语言实现自己的一套调度系统，区别于操作系统调度OS线程;

 *  G:就是个goroutine的，里面除了存放版本goroutine信息外，还有所在的P的绑定等信息。
 *  P:管理着一组goroutine队列，P里面还存放当前goroutine运行的上下文环境(函数指针，堆栈地址及地址边界)，P会对自己管理的goroutine队列做一些调度(比如把这占用CPU时间较长的goroution暂停、运行后续的goroution等等)，当自己的队列消费完了就去全局队列里面取，如果全局列队里也消费完了会去其他P的队列里抢任务。
 *  M(machine)是Go运行时(runtime)对操作系统内核线程的虚拟，M与内核线程一般是映射关系，一个goroutine最终要是M上执行的;

P与M一般也是一一对应的，他们的关系是:P管理着一组G挂载在M上运行，当一个G长时间阻塞在一个M上的时候,`reuntime`会新建一个M，阻塞G所在的P会把G挂载在新建到M上，当旧的G阻塞完成或者认为其已经死掉时，回收旧的M。

P的个数是通过`reuntime.GOMXPROCS`设定(最大256) ,Go1.5版本之后默认为物理线程数，在并发量大的时候会增加一些P和M，但不会太多，切换台频繁的话会得不偿失，

单从线程调度讲，Go语言相比起其他语言的优势在于OS线程是由OS内核来调度的，goroutine则是由Go运行时（runtime）自己的调度器调度的，这个调度器使用一个称为m:n调度的技术（复用/调度m个goroutine到n个OS线程）。 其一大特点是goroutine的调度是在用户态下完成的， 不涉及内核态与用户态之间的频繁切换，包括内存的分配与释放，都是在用户态维护着一块大的内存池， 不直接调用系统的malloc函数（除非内存池需要改变），成本比调度OS线程低很多。 另一方面充分利用了多核的硬件资源，近似的把若干goroutine均分在物理线程上， 再加上本身goroutine的超轻量，以上种种保证了go调度方面的性能。

### 四、GOMAXPROCS

Go运行时的调度器使用`GOMAXPROCS` 参数来确定需要使用多少个OS线程来同时执行Go代码，默认值是机器上的CPU核心数，例如在一个8核心的机器上，调度会把Go代码同时调度到8个OS线程上(GOMAXPROCS是m:n调度中的n)
Go语言可以通过`runtime.GOMAXPROCS()`函数设置当前程序并发时占用的CPU逻辑核心数。
Go1.5版本前，默认使用的是单心执行，Go1.5版本执行之后，默认使用全部的CPU逻辑核心数;
我们可以通过任务分配到不同的CPU逻辑核心上实心并行的效果，这里我们来举个例子:

```go
func a() {
	for i := 1; i < 10; i++ {
		fmt.Println("A:", i)
	}
}

func b() {
	for i := 1; i < 10; i++ {
		fmt.Println("B:", i)
	}
}

func main() {
	runtime.GOMAXPROCS(1)
	go a()
	go b()
	time.Sleep(time.Second)
}
```

两个任务只有一个逻辑核心，此时是做完一个任务在做另外一个任务，将逻辑核心数设为2，此时两个任务并行执行，代码如下:

```go
func a() {
	for i := 1; i < 10; i++ {
		fmt.Println("A:", i)
	}
}

func b() {
	for i := 1; i < 10; i++ {
		fmt.Println("B:", i)
	}
}

func main() {
	runtime.GOMAXPROCS(2)
	go a()
	go b()
	time.Sleep(time.Second)
}
```

Go语言中操作系统流程和goroutine的关系:

* 一个操作系统线程对应多用户多个goroutine;
* Go程序可以同时使用多个操作系统线程;
* goroutine和OS线程是多对多的关系，即m:n;

### 五、总结

本节我们介绍了并行与并发的区别，还有他们分别的作用，goroutine与线程如何使用;