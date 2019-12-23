# 第04节:Go语言标准库之flag

##### 上一节我们讲述看Go语言标准库之time是对时间的来说的一个介绍，这节我们来讲Go语言标准库之flag,

### 一、flag包的基本使用

##### 导入flag包

```go
import flag
```

##### flag参数类型

flag包支持的命令行参数类型有`bool`、`int`、`int64`、 `uint`、 `float`、 `float64`、 `string`、 `duration`。

|flag参数|有效值|
|---|---|
|字符串flag|合法字符串|
|整数flag|1234、0664、ox1234等类型，也可以是复数|
|浮点数flag|合法浮点数|
|bool类型flag|1, 0, t, f, T, F, true, false, TRUE, FALSE, True, False。|
|时间段|	任何合法的时间段字符串。如”300ms”、”-1.5h”、”2h45m”。
合法的单位有”ns”、”us” /“µs”、”ms”、”s”、”m”、”h”。|

### 二、定义命令行flag参数

有以下两种常用的定义命令行`flag`参数的方法。

##### flag.Type()

基本格式如下:

`flag.type(flag名,默认值,帮助信息)*type` 例如我们要定义姓名、年龄、是否已婚三个命令行形参，我们可以按如以下方式定义:

```go
name := flag.String("name", "张三", "姓名")
age := flag.Int("age", 18, "年龄")
married := flag.Bool("married", false, "是否已婚")
delay := flag.Duration("d", 0, "时间间隔")
```

需要注意的是，此时`name`、`age`、`married`、`delay`均为对应指针类型。

##### flag.TypeVar()

基本使用格式如下: `flag.TypeVar(type指针，flag名，默认值，帮助信息)` 例如我们要定义姓名、年龄、是否已婚三个命令行形参，我们可以按如以下方式定义:

```go
var name string 
var age int 
var married bool
var delay time.Duration
flag.StringVar(&name, "name", "张三", "姓名")
flag.InVar(&age, "age", 18, "年龄")
flag.BoolVar(&married, "married", false, "是否已婚")
flag.DurationVar(&delay, "d", 0, "时间间隔")
```

##### flag.Parse()

通过以上两种方式定义好命令行flag参数后，需要调用`flag.Parse()`来对命令行参数进行解析。
支持的命令行参数格式有以下几种:

* `-flag xxx`(使用空格，一个`-`符号)
* `--flag xxx` (使用空格，两个`--`符号)
* `-flag=xxx` (使用等号，一个`-`符号)
* `--flag=xxx`(使用等号，两个`--`符号)

其中布尔类型的参数的参数必须使用等号等方式指定。
Flag解析在第一个非flag参数(单个"-"不是flag参数)之前停止，或者在终止符"-"之后停止

##### flag其他参数

```go
flag.Args()     //返回命令行参数后的其他参数，以[]string类型
flag.NArg()     //返回命令行参数后的其他参数个数
flag.NFlag()    //返回使用的命令行参数个数
```

### 三、完整示例

##### 定义

```go
func main() {
	//定义命令行参数方式1
	var name string
	var age int
	var married bool
	var delay time.Duration
	flag.StringVar(&name, "name", "张三", "姓名")
	flag.IntVar(&age, "age", 18, "年龄")
	flag.BoolVar(&married, "married", false, "婚否")
	flag.DurationVar(&delay, "d", 0, "延迟的时间间隔")

	//解析命令行参数
	flag.Parse()
	fmt.Println(name, age, married, delay)
	//返回命令行参数后的其他参数
	fmt.Println(flag.Args())
	//返回命令行参数后的其他参数个数
	fmt.Println(flag.NArg())
	//返回使用的命令行参数个数
	fmt.Println(flag.NFlag())
```

##### 使用

命令行参数使用提示:

```go
$ ./flag_demo -help
Usage of ./flag_demo:
  -age int
        年龄 (default 18)
  -d duration
        时间间隔
  -married
        婚否
  -name string
        姓名 (default "张三")
```

使用非flag命令行参数:

```go
$ ./flag_demo a b c
张三 18 false 0s
[a b c]
3	
0
```

### 四、总结

Go语言内置的`flag`包实现了命令行参数的解析，`flag`包使开发命令行工具更为简单。