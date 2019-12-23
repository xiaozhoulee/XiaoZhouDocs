# 第03节：Date类型

**在我们的日常工作中难免会有和时间有关系的代码，所以我们本节来学习date类，也叫时间类。**  

### 一、获取时间戳

下面代码可以获取自 1970年1月1日 00时00分00秒 000毫秒 到当前共有多长时间[案例链接](https://github.com/xiaozhoulee/java-examples/blob/master/06-%E5%B8%B8%E7%94%A8%E7%B1%BB/%E7%AC%AC03%E8%8A%82%EF%BC%9ADate%E7%B1%BB/Date/DateTest01.java)：  

``` java
long now = System.currentTimeMillis();
System.out.println(now);
```

System.currentTimeMillis()会返回long类型值，这段代码会获取从 1970年1月1日 00时00分00秒 000毫秒 到当前的毫秒数  

### 二、入门案例

#### 获取拼接一百个字符串所需要的时间

以下代码可以获取到一百个字符串所需要的时间，相信同学们学会这个代码以后会更加的熟悉date类的使用方法，并且更加了解拼接字符串为什么要用StringBuffer[代码链接](https://github.com/xiaozhoulee/java-examples/blob/master/06-%E5%B8%B8%E7%94%A8%E7%B1%BB/%E7%AC%AC03%E8%8A%82%EF%BC%9ADate%E7%B1%BB/Date/DateTest01.java)：  

``` java
    public static void main(String[] args){
        String s = "";
        StringBuffer s2 = new StringBuffer();

        //获取拼接前的毫秒数，也就是当前时间
        long before = System.currentTimeMillis();

        for(int i=0; i<=100; i++){
             s += i;//拼接String
             //s2.append(i);//拼接StringBuffer
        }

        //拼接后的毫秒数
        long after = System.currentTimeMillis();

        //会打印出拼接需要的总时间
        System.out.println(after - before);
    }
```

通过以上代码我们可以发现StringBuffer的拼接速度比String快很多，这仅仅是一百个字符串，所以拼接字符串要用StringBuffer关键字。

### 三、日期标准格式写法

通过如下代码可以更改输出的日期格式[案例链接](https://github.com/xiaozhoulee/java-examples/blob/master/06-%E5%B8%B8%E7%94%A8%E7%B1%BB/%E7%AC%AC03%E8%8A%82%EF%BC%9ADate%E7%B1%BB/Date/DateTest02.java)：

``` java
    public static void main(String[] args){
        //输出当前日期，输出结果是今天这个时间
        Date d = new Date();
        System.out.println(d);

        //输出结果是1970年1月1日08:00:00
        Date d2 = new Date(0L);//参数填写Lang类型，0L
        System.out.println(d2);

        // SimpleDateFormat关键字可以让日期打印出想要的格式
        //y是年，大写的M是月，d是日，h是时，小写的m是分，小写的s是秒，大写的S是毫秒。
        SimpleDateFormat a =new SimpleDateFormat("yyyy-MM-dd hh:mm:ss SSS");
        String date = a.format(d);//利用format关键字将信息传给String类型中
        System.out.println(date);

    }
```

### 四、将String类型转换为Date类型

如下代码可以将字符串类型的日期转换成Date类型，但是注意，字符串的格式和日期格式一定要相同：  

``` java
    public static void main(String[] args) {
        String strTime = "2017年01月01日 00:00:00 000";
        //将String日期转换成日期类型Date
        //String-->Date
        //1.创建日期格式化对象
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss SSS"); //格式不能随意，应该和上面的字符串格式相同。

        //2.将字符串转换成日期类型
        Date d = new Date();
        try {
            d = sdf.parse(strTime);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        System.out.println(d);
    }

```

### 五、Calendar,另一种日期方法

Calendar方法为操作日历方面提供了一些方法，请看如下代码[代码链接](https://github.com/xiaozhoulee/java-examples/blob/master/06-%E5%B8%B8%E7%94%A8%E7%B1%BB/%E7%AC%AC03%E8%8A%82%EF%BC%9ADate%E7%B1%BB/Date/DateTest03.java)：  

``` java
 //输出今天是这周的第几天
    Calendar c= Calendar.getInstance();
   int i = c.get(Calendar.DAY_OF_WEEK);//它会返回一个int类型的值，它返回的值是今天是这周的第几天
    System.out.println(i);//美国人把周日当成第一天，所以如果输出结果是4，那么说明今天是星期三

    //输出今天是这个月的第几天
    System.out.println(c.get(Calendar.DAY_OF_MONTH));

    //输出这周是这个月的第几周
    System.out.println(c.get(Calendar.DAY_OF_WEEK_IN_MONTH));

    //输出今天是这个年的第几天
    System.out.println(c.get(Calendar.DAY_OF_YEAR));
```

### 六、案例作业

为了能让大家更透彻的掌握Date类，这里给大家布置一项作业：

[案例链接](https://github.com/xiaozhoulee/java-examples/blob/master/06-%E5%B8%B8%E7%94%A8%E7%B1%BB/%E7%AC%AC03%E8%8A%82%EF%BC%9ADate%E7%B1%BB/Date/Exercise01.java)

> 1.算一下你来到这个世界多少天?  

---

答案解析：  

第一题  

获取出生日期和当前日期的Date类型，然后将两个日期的毫秒值做减法，之后用这个毫秒值除以1000,再除以60,再除以60,再除以24得到天。

``` java
public class Exercise01 {
    public static void main(String[] args) throws ParseException {
        //你的出生日
        String birthday = "2016年06月15日";
        //设置日期格式
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日");
        //将生日字符串转换成日期对象
        Date d1 = sdf.parse(birthday);
        //获取当前日期
        Date d2 = new Date();
        //将两个日期的毫秒值做减法
        long time = d2.getTime() - d1.getTime();
        //除以1000,再除以60,再除以60,再除以24得到天
        System.out.println(time / 1000 / 60 / 60 / 24 );
    }
}
```

### 七、总结

通过以上实例相信我们已经了解了时间类的应用，接下来我们学习常用类中的Math类。