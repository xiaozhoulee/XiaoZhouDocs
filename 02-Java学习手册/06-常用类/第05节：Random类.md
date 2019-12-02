# 第05节：Random类

### 一、什么是Random类？

本节我们学习的是Random类，Random类在java.util包下，那它有什么作用呢？  
当我们使用Random这个类，的时候可以生成随机数，比如我们要写一个随机彩票的案例，就需要用到这个类了。  

### 二、入门案例

下面我们根据两个实际案例来演示一下Random类的用法[代码链接](https://github.com/xiaozhoulee/java-examples/blob/master/06-%E5%B8%B8%E7%94%A8%E7%B1%BB/%E7%AC%AC05%E8%8A%82%EF%BC%9ARandom%E7%B1%BB/Random/RandomTest01.java)：

``` java
import java.util.Random;
public class RandomTest01 {
    public  static void main(String[] args){
        //创建一个Random类对象
        Random r=new Random();

        //它会生成一个int类型的随机数
        int ran =r.nextInt(101);//将101这个数值通过nextInt关键字赋值给r，然后r=ran，意思是是输出0-100之间的随机数
        System.out.println(ran);
    }
}
```

[代码链接](https://github.com/xiaozhoulee/java-examples/blob/master/06-%E5%B8%B8%E7%94%A8%E7%B1%BB/%E7%AC%AC05%E8%8A%82%EF%BC%9ARandom%E7%B1%BB/Random/RandomTest02.java)

``` java
import java.util.Random;
//循环生成5个随机数
public class RandomTest02 {
   public static void main(String[] args){
       Random r= new Random();
       for(int i=0;i<5;i++){//循环5次，打印五次内容
           System.out.println(r.nextInt(11));//内容是0-10之间的数值
           //随机循环5个0-10之间的数值
       }
   }
}
```

根据上面的代码，我们已经了解Random类了，那么我们接下来做一道练习题。  

### 三、案例作业

为了能让大家更深刻的学会Random类的使用方法，这里给大家布置一项作业：

[案例链接](https://github.com/xiaozhoulee/java-examples/blob/master/06-%E5%B8%B8%E7%94%A8%E7%B1%BB/%E7%AC%AC05%E8%8A%82%EF%BC%9ARandom%E7%B1%BB/Random/RandomTest03.java)

> 1.完成一个彩票机选号码的生成器，这里就以双色球为例，双色球每注中奖号码由6个不同的红色球号码和一个蓝色球号码组成。红色球号码从1-33中选择；蓝色球号码从1-16中选择。  

---

答案解析：  

第一题  

随机从1-33选6个不同的数字，所以需要去掉重复的数字。然后随机从1-16中选一个数字。  

``` java
import java.util.Arrays;
import java.util.Random;

//分析：随机从1-33选6个不同的数字，所以需要去掉重复的数字。然后随机从1-16中选一个数字。
public class RandomTest03 {
    public static void main(String[] args) {

        //初始化双色球号码
        int[] balls = new int[33];
        for(int i=0; i<balls.length; i++){
            balls[i] = i + 1;
        }

        //创建数组用来标记红球是否重复
        boolean[] isUsed = new boolean[33];

        //创建数组用来存放6个红球
        int[] result = new int[6];
        //初始化数组下标
        int length = 0;

        Random r = new Random();
        while(true){
            //生成0~32的随机数,将随机数作为数组下标,取得红球
            int red = r.nextInt(33);
            //判断生成的红球是否重复
            if(isUsed[red] == true){
                continue;
            }

            //将选中的红球存放到结果中
            result[length++] = balls[red];
            //如果等于6则说明已经生成了6个红球了，跳出循环
            if(length == 6){
                break;
            }

            //将生成的红球所对应的数组下标标记为true
            isUsed[red] = true;

        }
        //将数组排序
        Arrays.sort(result);
        //生成0~15的随机数,将随机数作为数组下标,取得蓝球
        int blue = r.nextInt(16);

        //将红球打印
        System.out.print("红球：");
        for(int i=0; i<result.length; i++){
            if(i == result.length - 1){
                System.out.print(result[i]);
            }else{
                System.out.print(result[i] + ",");
            }
        }

        //将蓝球打印
        System.out.print(" 蓝球：" + balls[blue]);
    }
}
```

### 四、总结

以上就是了Random类了，它的作用是生成随机数，下一节我们来学习常用类中的枚举。
