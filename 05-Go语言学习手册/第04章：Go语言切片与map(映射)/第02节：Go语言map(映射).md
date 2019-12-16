# 第02节:Go语言map(映射)

###### 本节我们讲述Go语言map(映射)，那什么是映射，怎么使用映射，请看本节讲解:

### 一、map(映射)

map是一种无序的基于 `key-value` 的数据结构，Go语言中map是引用类型，必须初始化才能使用

##### 定义

Go语言中 `map` 的语义和语法如下；

```go
map[KeyTypr]valueType
```

其中:

* KeyType:表示键的类型
* ValueType:表示键对应的值类型

map类型的变量默认初始值为nil，需要使用make()函数来分配内存，语法为:

```go
make(map[KeyType]ValueType,[cap])
```

其中cap表示map容量,该参数虽然不是必须的，但是我们应该初始化map的时候就为指定一个合适的容量。

##### map基本使用

map中的数据都是成对出现的，map的基本使用示例代码如下:
[案例链接](https://github.com/Yan-Yan0129/Go-example/blob/master/%E7%AC%AC04%E7%AB%A0%EF%BC%9AGo%E8%AF%AD%E8%A8%80%E5%88%87%E7%89%87%E4%B8%8Emap(%E6%98%A0%E5%B0%84)/%E7%AC%AC01%E8%8A%82%EF%BC%9AGo%E8%AF%AD%E8%A8%80%E5%88%87%E7%89%87%E4%B9%8B%E5%9F%BA%E7%A1%80/demo03.md)

```go
func main() {
	scoreMap := make(map[string]int, 8)
	scoreMap["张三"] = 90
	scoreMap["小明"] = 100
	fmt.Println(scoreMap)
	fmt.Println(scoreMap["小明"])
	fmt.Printf("type of a:%T\n", scoreMap)
}
```

以上实例输出结果为:

```go
map[小明:100 张三:90]
100
type of a:map[string]int
```

map也支持在声明时候填充元素，例如:

```go
func main() {
	userInfo := map[string]string{
		"username": "你好Go",
		"password": "123456",
	}
	fmt.Println(userInfo) 
}
```

##### 判断某个关键是否存在

Go语言中有个判断map中键是否存在的特殊写法，格式如下:

```go
value, ok := map[key]
```

举个例子:
[案例链接](https://github.com/Yan-Yan0129/Go-example/blob/master/%E7%AC%AC04%E7%AB%A0%EF%BC%9AGo%E8%AF%AD%E8%A8%80%E5%88%87%E7%89%87%E4%B8%8Emap(%E6%98%A0%E5%B0%84)/%E7%AC%AC02%E8%8A%82%EF%BC%9AGo%E8%AF%AD%E8%A8%80map(%E6%98%A0%E5%B0%84)/demo02.md)

```go
func main() {
	scoreMap := make(map[string]int)
	scoreMap["张三"] = 90
	scoreMap["小明"] = 100
	// 如果key存在ok为true,v为对应的值；不存在ok为false,v为值类型的零值
	v, ok := scoreMap["张三"]
	if ok {
		fmt.Println(v)
	} else {
		fmt.Println("查无此人")
	}
}
```

以上实例输出结果为:

```go
90
```

##### map的遍历

Go语言中使用 `for range` 遍历 map
[案例链接](https://github.com/Yan-Yan0129/Go-example/blob/master/%E7%AC%AC04%E7%AB%A0%EF%BC%9AGo%E8%AF%AD%E8%A8%80%E5%88%87%E7%89%87%E4%B8%8Emap(%E6%98%A0%E5%B0%84)/%E7%AC%AC02%E8%8A%82%EF%BC%9AGo%E8%AF%AD%E8%A8%80map(%E6%98%A0%E5%B0%84)/demo03.md)

```go
func main() {
	scoreMap := make(map[string]int)
	scoreMap["张三"] = 90
	scoreMap["小明"] = 100
	scoreMap["娜扎"] = 60
	for k, v := range scoreMap {
		fmt.Println(k, v)
	}
}
```

以上实例输出结果为:

```go
张三 90
小明 100
李四 60
```

但是我们只想遍历key的时候，可以按照以下写法:

```go
func main() {
	scoreMap := make(map[string]int)
	scoreMap["张三"] = 90
	scoreMap["小明"] = 100
	scoreMap["娜扎"] = 60
	for k, v := range scoreMap {
		fmt.Println(k, v)
	}
}
```

**注意** 遍历map数组时的元素顺序与添加键值对的顺序无关

##### 使用delete()函数删除键对值

使用过delete()内建函数从map中删除一组键值对，`delete()` 函数的格式如下:

```go
delete(map, key)
```

其中:

* map表示为: 要删除键值对的map

* key表示为: 表示要删除键对值的键

示例代码如下:

```go
func main(){
	scoreMap := make(map[string]int)
	scoreMap["张三"] = 90
	scoreMap["小明"] = 100
	scoreMap["娜扎"] = 60
	delete(scoreMap, "小明")//将小明:100从map中删除
	for k,v := range scoreMap{
		fmt.Println(k, v)
	}
}
```

##### 按照指定顺序遍历map

```go
func main() {
	rand.Seed(time.Now().UnixNano()) //初始化随机数种子

	var scoreMap = make(map[string]int, 200)

	for i := 0; i < 100; i++ {
		key := fmt.Sprintf("stu%02d", i) //生成stu开头的字符串
		value := rand.Intn(100)          //生成0~99的随机整数
		scoreMap[key] = value
	}
	//取出map中的所有key存入切片keys
	var keys = make([]string, 0, 200)
	for key := range scoreMap {
		keys = append(keys, key)
	}
	//对切片进行排序
	sort.Strings(keys)
	//按照排序后的key遍历map
	for _, key := range keys {
		fmt.Println(key, scoreMap[key])
	}
}
```

##### 元素为map类型的切片

下面代码演示了切片中的元素为map类型时的操作:

```go
func main() {
	var mapSlice = make([]map[string]string, 3)
	for index, value := range mapSlice {
		fmt.Printf("index:%d value:%v\n", index, value)
	}
	fmt.Println("after init")
	// 对切片中的map元素进行初始化
	mapSlice[0] = make(map[string]string, 10)
	mapSlice[0]["name"] = "小王子"
	mapSlice[0]["password"] = "123456"
	mapSlice[0]["address"] = "沙河"
	for index, value := range mapSlice {
		fmt.Printf("index:%d value:%v\n", index, value)
	}
}
```

##### 值为切片类型的map

下面代码演示了map中的值为切片的操作:

```go
func main() {
	var sliceMap = make(map[string][]string, 3)
	fmt.Println(sliceMap)
	fmt.Println("after init")
	key := "中国"
	value, ok := sliceMap[key]
	if !ok {
		value = make([]string, 0, 2)
	}
	value = append(value, "北京", "上海")
	sliceMap[key] = value
	fmt.Println(sliceMap)
}
```

### 二、总结

本节我们学到了map(映射)的使用，分别讲述了对map的遍历，删除键对值，元素为map类型的切片，值为切片类型的map。

### 三、作业

1. 练习本章实例

2. 写一个程序，统计一个字符串中每个单词出现的次数。比如：”how do you do”中how=1 do=2 you=1。

3. 熟记map(集合)知识点的书写格式;