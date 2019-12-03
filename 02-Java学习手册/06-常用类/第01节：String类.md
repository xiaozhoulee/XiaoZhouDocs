# 第 01 节：String 类

### 一、字符串类概念

接下来我们学习Java常用类中的String类，字符串类。  
String 类是在Java包中的 java.lang 包下面，是 Object 类的直接子类，通过 API 或者源码可以看到，String 类是 final 修饰的，这说明 String 类不能被继承。

### 一、字符串的不可变性

字符串一旦创建好之后，里面的内容是不能被修改的，jvm 会将双引号””中的内容存放在称作"常量池"的里面，常量池中的对象内容是不可修改的。

- JVM 是 JAVA 虚拟机,JAVA 程序就是在 JVM 里运行的

```java
String s1 = "xiaozhou1024";
String s2 = "xiaozhou1024";
s1 = "good";
```

上面代码中，创建 s1 时，jvm 会在常量池中创建一个 xiaozhou1024 字符串对象，创建 s2 时，jvm 会去常量池中搜索，此时常量池中有 xiaozhou1024，所以就不创建了，直接让 s2 指向之前创建的 xiaozhou1024。当执行到最后一行时，jvm 会在常量池中创建一个 good，然后让 s1 指向这个 good，而不是将常量池中的 xiaozhou1024 修改为 good，所以说常量池中的对象内容是不可修改的。

### 二、使用 String 时需要注意的问题

```java
String s2 = "a";
String s3 = "b";
String s4 = s2 + s3;//字符串拼接
String s5 = "ab";
System.out.println(s5 == s4);
```

因为在做字符串拼接时会在堆内存中创建新的对象，而"=="是比对内存地址，所以以上代码打印结果会是 false。

在工作中尽量不要做字符串<string>频繁的拼接操作</string>。因为字符串一旦创建不可改变，如果频繁拼接，比如如下代码，会在字符串常量池创建大量字符串对象，给垃圾回收带来问题，占用内存。

```java
String s1 = "";
for(int i=0; i<100; i++){
    s1 += i;//避免频繁的字符串拼接操作
}
```

如果需要做字符串频繁的拼接操作，最好使用 StringBuffer 或者 StringBuilder，这两个类会在本节后面内容讲解。

### 三、String 类的常用方法

- char charAt(int index);获取 index 位置的字符
- boolean contains(CharSequence s);判断字符串中是否包含某个字符串
- boolean endsWith(String endStr);判断是否是以某个字符串结尾
- boolean equalsIgnoreCase(String anotherString);忽略大小写比较两个字符串是否相等
- byte[] getBytes();转换成 byte 数组
- int indexOf(String str);取得指定字符在字符串的位置
- - int indexOf(String str, int fromIndex);从指定的下标开始取得指定字符在字符串的位置
- - int lastIndexOf(String str);从后面开始取得指定字符在字符串最后出现的的位置
- - int lastIndexOf(String str, int fromIndex);从后面开始指定的下标开始取得指定字符在字符串的位置
- - int length();获取字符串的长度
- - String replaceAll(String s1,String s2);替换字符串中的内容
- - String[] split(String s);根据指定的表达式拆分字符串
- boolean startsWith(String s);判断是否是以某个字符串开始
- String substring(int begin);根据传入的索引位置截子串
- String substring(int beginIndex, int endIndex);根据传入的起始和结束位置截子串
- char[] toCharArray();将字符串转换为 char 数组
- void toUpperCase();转换为大写
- void toLowerCase();转换为小写
- String trim();去除首尾空格
- String valueOf(Object obj);将其他类型转换为字符串类型

### 四、正则表达式

正则表达式很广，能够作为一门独立的学科了，这里这是简单介绍一下，以后在工作中用到的时候，可以去网上查相关的正则表达式资料（比如搜索：正则表达式手机号验证方法）。

```java
"^m{2}$" 表示 2个m字符.等同于 "mm"。（{}中表示几个字符）
\d 表示 数字
\D 表示 非数字
\w 表示 英文字母
\W 表示 非英文字母
除了这些还有很多，工作中常用的有
匹配邮箱格式：\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+.)+[A-Za-z]{2,14}
匹配手机号：0?(13|14|15|18)[0-9]{9}
```

如果我们想把字符串"xiaozhou1024study1j2a3v4a"这个字符串中的数字替换为字符串"舟"，可以使用正则表达式匹配数字，然后进行替换即可。

```java
System.out.println("mm".matches("^m{2}$"));

String s1 = "xiaozhou1024study1j2a3v4a";
//将数字替换为"舟"
System.out.println(s1.replaceAll("\\d", "zhou"));
//在之前String类的常用方法中写到 replaceAll关键字是替换字符串中的内容。\d 表示数字，因为Java反斜杠前面要写转义字符"\"所以是"\\d"。


//匹配手机号
System.out.println("15188888888".matches("0?(13|14|15|18)[0-9]{9}"));//matches方法作用就是匹配一下字符串是否符合后面括号中的正则表达式。
//匹配邮箱
System.out.println("xiaozhou@xiaozhou.com".matches("\\w[-\\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\\.)+[A-Za-z]{2,14}"));
```

正则表达式最常用的地方就是用来校验的。

### 五、StringBuffer 和 StringBuilder

StringBuffer 是一个字符串缓冲区，如果需要频繁的对字符串进行拼接时，建议使用 StringBuffer。

#### 工作原理

StringBuffer 的底层是 char 数组，如果没有明确设定，则系统会默认创建一个长度为 16 的 char 类型数组，在使用时如果数组容量不够了，则会通过数组的拷贝对数组进行扩容，所以在使用 StringBuffer 时最好预测并手动初始化长度，这样能够减少数组的拷贝，从而提高效率。

#### String 与 StringBuffer 的区别？

String 是不可变字符序列，存储在字符串常量池中

StringBuffer 的底层是 char 数组，系统会对该数组进行扩容

StringBuffer 的构造方法：

```java
package com.company;
public class StringBufferTest01 {
    public static void main(String[] args) {
        //构造方法
        StringBuffer s1 = new StringBuffer();
        //StringBuffer的初始容量
        System.out.println(s1.capacity());
        //手动指定StringBuffer的长度
        StringBuffer s2 = new StringBuffer(100);
        System.out.println(s2.capacity());
        StringBuffer s3 = new StringBuffer("xiaozhou");
        System.out.println(s3.capacity());//字符串的length + 16
    }
}
```

#### 使用 StringBuffer 进行字符串拼接

```java
package com.company;

public class Main {

    public static void main(String[] args) {
        //初始化StringBuffer
        StringBuffer s = new StringBuffer(50);
        //追加字符串
        s.append("http://");
        s.append("blog.");
        s.append("xzkeji.");
        s.append("com");
        System.out.println(s);
        //插入字符串
        s.insert(7,"test");
        System.out.println(s);
        //删除字符串
        s.delete(7,10);
        System.out.println(s);
    }
}

```

#### StringBuilder 和 StringBuffer 的区别

通过 API 可以看到 StringBuilder 和 StringBuffer 里面的方法是一样的，那他们有什么区别呢？

- StringBuffer 是 jdk1.0 版本中加入的，是线程安全的，效率低
- StringBuilder 是 jdk5 版本加入的，是线程不安全的，效率高

以上就是String类的知识了，那么下一节我们来学习另一个常用类，包装类。

### 六、案例及作业

为了能让大家更深刻的学会循环语句的使用方法，这里给大家布置三项作业：


> 1.字符串反转，例如将"abc"变成"cba"

> 2.统计一个字符串里面另一个字符串出现的次数，例如统计"xiaozhou"在"xiaozhoubg.com java xiaozhou dian zi shu"中出现的次数

> 3.统计一个字符串中大写字母出现的次数

---

答案解析：  

第一题  

字符串是由多个字符组成的，可以将字符串转换为字符（char）数组，然后倒序遍历数组即可

``` java
import java.util.Scanner;

/**
 * 字符串反转
 *
 */
public class Exercise01 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        String input = s.next();
        //将输入的字符串转换为char类型数组
        char[] charArray = input.toCharArray();
        //遍历数组并倒着输出
        for(int i=charArray.length-1; i>=0; i--){
            System.out.print(charArray[i]);
        }
    }
}
```

第二题  

通过indexOf方法在大的字符串中查找小字符串的索引值，找到后将这个索引值和小字符串的长度相加，之后将大的字符串截取根据相加的结果截取子串，然后继续在剩下的字符串中查找小字符串的索引值，直到索引值返回-1为止  

``` java
/**
 * 统计一个字符串里面另一个字符串出现的次数
 *
 */
public class Exercise02 {

    public static void main(String[] args) {
        String src = "xiaozhoubg.com java";
        String dest = "o";
        //定义出现的次数
        int count = 0;

        //定义索引值
        int index = 0;

        while((index = src.indexOf(dest)) != -1){
            count++;
            //将src截取子串
            src = src.substring(index + dest.length());
        }
        System.out.println("出现的次数是：" + count);
    }
}
```

第三题  

每个大写字母都是一个字符char，而大写字母A~Z是有范围的，只要统计这个范围内的字符即可

``` java
public class Exercise03 {

    public static void main(String[] args) {
        String src = "xiaozhoubg";
        //统计大写字母出现的次数
        int count = 0;

        //将字符串转换为字符数组
        char[] c = src.toCharArray();
        for(int i=0; i<c.length; i++){
            //判断是否为大写字母
            if(c[i] >= 'A' && c[i] <= 'Z'){
                count++;
            }
        }
        System.out.println("大写字母出现的次数：" + count);
    }
}
```

### 七、总结

以上就是String类型全部内容了，下一节我们学习包装类。