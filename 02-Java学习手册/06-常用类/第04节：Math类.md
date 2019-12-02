# 第04节：Math类型

### 一、什么是Math类？

 本节我们学习常用类中的Math类，这个类包含用于执行基本数学运算的方法，如四舍五入，开方等等。

### 二、Math类型的重要属性

让我们通过以下代码来学习掌握Math类关键字方法的使用[案例链接](https://github.com/xiaozhoulee/java-examples/blob/master/06-%E5%B8%B8%E7%94%A8%E7%B1%BB/%E7%AC%AC04%E8%8A%82%EF%BC%9AMath%E7%B1%BB/Math/MathTest01.java)：  

```java
public static void main(String[] args){
        //圆周率
        System.out.println(Math.PI);
        //取绝对值
        System.out.println(Math.abs(-10));

        //ceil天花板，会向上取值，结果是double
        System.out.println(Math.ceil(12.3));
        System.out.println(Math.ceil(12.99));

        System.out.println("-----------");
        //floor地板，会向下取整,结果是double
        System.out.println(Math.floor(12.3));
        System.out.println(Math.floor(12.99));

        //获取两个值中的最大值
        System.out.println(Math.max(20, 30));

        //前面的数是底数,后面的数是指数，即2的3次方
        System.out.println(Math.pow(2, 3));

        //生成0.0到1.0之间的随机小数,包括0.0,不包括1.0
        System.out.println(Math.random());
        //生成0到100之间的随机整数,包括0,不包括100
        System.out.println(Math.floor(Math.random()*100));
        //四舍五入
        System.out.println(Math.round(12.3f));
        System.out.println(Math.round(12.9f));

        //开平方
        System.out.println(Math.sqrt(16));
    }

```

### 三、总结

Math类很简单，相信同学们可以根据案例学会了。  
接下来我们学习常用类中的Random类（随机数类）。