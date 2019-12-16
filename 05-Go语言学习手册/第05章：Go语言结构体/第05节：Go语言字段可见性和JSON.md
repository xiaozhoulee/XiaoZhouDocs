# 第05节：Go语言字段可见性和JSON

##### 上一节我们讲述了Go语言嵌套结构体，那么节我们讲述Go语言字段可见性和JSON，什么是字段可见性呢？什么是JSON呢？请看以下对本节的讲解！

### 一、结构体字段的可见性

结构体中字段大小写开头表示可公开访问，小写表示私有(仅在当前结构体的包中可访问)

### 二、结构体与JSON序列化

JSON(JavaScript Object Notation)是一种轻量级的数据格式，易于常人阅读与编写，同时也易于机器解析和生成。JSON键对值是用来保存JS对象的一种方式，键/值对组合的键名写在前面并用双引号 `""` 包裹，使用冒号 `:` 分隔，然后紧接着值;多个键值之间用英文 `,`分隔:
[案例链接](https://github.com/Yan-Yan0129/Go-example/blob/master/%E7%AC%AC05%E7%AB%A0%EF%BC%9AGo%E8%AF%AD%E8%A8%80%E7%BB%93%E6%9E%84%E4%BD%93/%E7%AC%AC05%E8%8A%82%EF%BC%9AGo%E8%AF%AD%E8%A8%80%E5%AD%97%E6%AE%B5%E5%8F%AF%E8%A7%81%E6%80%A7%E5%92%8CJSON/demo01.md)

```go
//Student 学生
type Student struct {
	ID     int
	Gender string
	Name   string
}

//Class 班级
type Class struct {
	Title    string
	Students []*Student
}

func main() {
	c := &Class{
		Title:    "101",
		Students: make([]*Student, 0, 200),
	}
	for i := 0; i < 10; i++ {
		stu := &Student{
			Name:   fmt.Sprintf("stu%02d", i),
			Gender: "男",
			ID:     i,
		}
		c.Students = append(c.Students, stu)
	}
	//JSON序列化：结构体-->JSON格式的字符串
	data, err := json.Marshal(c)
	if err != nil {
		fmt.Println("json marshal failed")
		return
	}
	fmt.Printf("json:%s\n", data)
	//JSON反序列化：JSON格式的字符串-->结构体
	str := `{"Title":"101","Students":[{"ID":0,"Gender":"男","Name":"stu00"},{"ID":1,"Gender":"男","Name":"stu01"},{"ID":2,"Gender":"男","Name":"stu02"},{"ID":3,"Gender":"男","Name":"stu03"},{"ID":4,"Gender":"男","Name":"stu04"},{"ID":5,"Gender":"男","Name":"stu05"},{"ID":6,"Gender":"男","Name":"stu06"},{"ID":7,"Gender":"男","Name":"stu07"},{"ID":8,"Gender":"男","Name":"stu08"},{"ID":9,"Gender":"男","Name":"stu09"}]}`
	c1 := &Class{}
	err = json.Unmarshal([]byte(str), c1)
	if err != nil {
		fmt.Println("json unmarshal failed!")
		return
	}
	fmt.Printf("%#v\n", c1)
}
```

以上实例输出结果为:

```go
json:{"Title":"101","Students":[{"ID":0,"Gender":"男","Name":"stu00"},

{"ID":1,"Gender":"男","Name":"stu01"},{"ID":2,"Gender":"男","Namame":"stu02"},

{"ID":3,"Gender":"男","Name":"stu03"},{"ID":4,"Gender":"男","Name":"stu04"}

{"ID":5,"Gender":"男","Name":"stu05"},{"ID6,":6,"Gender":"男","Name":"stu06"},

{"ID":7,"Gender":"男","Name":"stu07"},{"ID":8,"Gender":"男","Name":"stu08"},

{"ID":9,"Gender":"男",e""Name":"stu09"}]}

&main.Class{Title:"101", Students:[]*main.Student{(*main.Student)(0xc00006c810),
(*main.Student)(0xc00006c840), (*main.Student)(0xc0000006c870),
(*main.Student)(0xc00006c8a0), (*main.Student)(0xc00006c900),
(*main.Student)(0xc00006c930), (*main.Student)(0xc00006c960 (),
(*main.Student)(0xc00006c990), (*main.Student)(0xc00006c9c0),
(*main.Student)(0xc00006c9f0)}}
```

### 三、结构体标签(Tag)

`Tag`是结构的元信息，可以在运行的时候通过反射的机制读取出来。 `Tag`在结构体字段后方定义，由一对反引号包裹起来，具体格式如下:

```go
key1:"value1" key2:"value2"
```

结构体标签由一个或多个键对值组成，键与值使用冒号分隔，值用双引号括起来，键值对之间使用空格分隔。
**注意事项** 为结构体编写 `Tag` 时，必须严格遵守键对值规则，结构体标签的解析代码容错能力差，一旦格式写错，编译和运行是不会报任何错的，通过反射也不会正确取值，例如不要在key和value之间添加空格。

例如我们为 `Student` 结构每个字段定义json序列化使用Tag

```go
//Student 学生
type Student struct {
	ID     int    `json:"id"` //通过指定tag实现json序列化该字段时的key
	Gender string //json序列化是默认使用字段名作为key
	name   string //私有不能被json包访问
}

func main() {
	s1 := Student{
		ID:     1,
		Gender: "男",
		name:   "Giao哥",
	}
	data, err := json.Marshal(s1)
	if err != nil {
		fmt.Println("json marshal failed!")
		return
	}
	fmt.Printf("json str:%s\n", data) //json str:{"id":1,"Gender":"男"}
}
```

### 四、总结

本节我们讲述了Go语言字段可见性和JSON，字段可见性大写开头表示可公开访问，小写代表私有，JSON是轻量级数据交换格式，易于机器解析与生成;