# 第02节：Go语言中new和make

##### 上节我们讲述了Go语言指针，Go语言有那些，都是干什么的，有什么用，那么我们这节来讲述Go语言中的new和make;

### 一、学习目标

学习new和make有那些区别?这两者是干什么的?请看本章讲解

### 二、demo

在讲new和make之前我们先来看个例子:

```go
func main(){
    var a *int 
    *a = 100
    fmt.println(*a)

    var b map[string]int
    b["你好"] = 100
    fmt.println(b)
}
```

上面代码会引发panic，那是为什么呢？在Go语言中对于引用类型的变量，我们在使用的时候不仅会声明它，还要为它分配空间，否则我们的值没有办法存储。而对于值类型不需要声明不需要分配内存空间，是因为它们要声明不需要分配空间，是因为它们在声明的时候已经默认分配好了内存空间。要分配内存，就引出来今天得`new`和`make`。Go语言是内建的两个函数，主要是来分配内存。

### 三、new

new是一个内置函数，格式如下:

```go
func new(Type) *type
```

其中:

* Type表示类型，new函数只接受一个参数，这个参数是一个类型

* *Type表示类型指针，new函数返回一个指向该类型内存地址的指针

new函数不太常用，使用new函数得到的是一个类型指针并且指针对应的值为该类型的零值。举个例子:

```go
func main(){
    a := new(int)
    b := new(bool)
    fmt.printlf("%T\n" , a) //*int
    fmt.println("%T\n" , b)//*bool
    fmt.println(*a)         //0
    fmt.println(b)          //false
 }
```

本节开始的示例代码中 `var a *int`只是声明了一个指针变量a但是没有初始化，指针作为引用类型需要初始化后才会拥有内存空间，才可以给她赋值，应该按照以下方式使用内置`new`函数对`a`进行初始化之后就可以正常对其赋值了:

```go
func main(){
    var a *int
    a = new(int)
    *a = 10
    fmt.println(a)
}
```

### 四、make

make也是用于内存分配的，区别于new，它只用于`slice` `map` 以及`chan`的内存创建，而且它返回的类型就是这三个类型本身，而不是它们指针类型，因为这三种类型就是引用类型，所以没有必要返回指针，make格式如下:

```go
func make(t Type,size...IntegerType)Type
```

`make` 函数是无可替代的，我们在使用slice、map以及channel的时候，都需要使用make进行初始化，然后才可以对它们进行操作。
本节开始的示例中`var b map[string]int`只是声明变量b是一个map类型的变量，需要像下面的示例代码一样使用make函数进行初始化操作之后，才能对其进行键值对赋值：

```go
func main() {
   var b map[string]int
   b = make(map[string]int, 10)
   b["你好！"] = 100
   fmt.Println(b)
}
```

### 五、new和make的区别

1. 二者都是用来做内存分配的;
2. make只用于`slice` `map` 以及`channe`的初始化，返回值还是三个引用类型本身;
3. new用于内存分配，并且内存对应的值类型零值，返回值是指向类型的指针;

### 六、总结

通过本节的学习我们学到了new和make的区别，虽然两者都是用来做内存分配的但是make只用于`slice` `map` 和`channe` 的初始化,而new只用于内存分配，下一节给大家讲解Go语言指针的一些拓展

### 七、作业

1. 练习本节的按例

2. 熟练使用new和make
