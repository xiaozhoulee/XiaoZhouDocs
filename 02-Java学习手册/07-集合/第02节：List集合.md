# 第02节：List集合

上一节我们简单了解了集合，本节详细讲解List集合

### 一、什么是List集合？

元素有顺序，有下标，元素可重复
有序collection（也称为序列 ）。 该界面的用户可以精确控制列表中每个元素的插入位置。 用户可以通过整数索引（列表中的位置）访问元素，并搜索列表中的元素。

列表通常允许重复的元素。 更正式地，列表通常允许元素e1和e2成对使得e1.equals(e2) ，并且如果它们允许空元素，它们通常允许多个空元素，list集合的特点就是有序和可重复。

### 二、入门案例

#### List特有的方法

List中除了Collection里面的方法以外，内部还有一些方法，通过这些方法，开发者可以更方便的操作List接口的实现类。List接口是继承Collection接口，所以Collection集合中有的方法，List集合也继承过来。
使用for循环遍历数组

```java

 import java.util.ArrayList;
 import java.util.List;
 import java.util.Iterator;
 List list=new ArrayList();
        list.add("a");
        list.add("b");
        list.add("d");
        list.add("a");
// list.sizi = list集合中有多少个数组。
        for (int i = 0; i < list.size(); i++) {
			//list.get(i)获取第i位的值
            System.out.println(list.get(i));
        }

```

### 三、进阶案例

使用ListIterator完成需求，判断一个list里是否有c，如果有就像集合里添加1234

```java

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

public class ListTest {

    public static void main(String[] args){
        List list = new ArrayList();
        list.add("a");
        list.add("b");
        list.add("c");
        ListIterator lsititer = list.listIterator();
        while (lsititer.hasNext()){
            String s = (String)lsititer.next();
            if("c".equals(s)){
                //不能使用list中的add方法要使用ListIterator中的add方法
                lsititer.add("1234");
            }
        }
    System.out.println(list);
```

* 利用循环语句循环，循环list的值，并且进行比较，如果存在“C”就添加字符串1234。
* 上面代码在向list中添加完元素之后再执行到String str = (String)iter.next();这行时，报出ConcurrentModificationException异常，通过ArrayList的源码可以看到，当modCount不等于expectedModCount时才会报出这个异常，上面代码在遍历集合时添加了一个元素，这样就修改了集合中的元素个数，所以会导致modCount不等于expectedModCount，这样就会报出ConcurrentModificationException异常。

### 四、拆箱与装箱性质

将基本数据类型转换为引用数据类型，被专业称为装箱的过程；将引用数据类型转换为基本数据类型，被专业称为拆箱的过程。

``` java
 List list=new ArrayList<>();
        //new Integer(23):将基本数据类型转换为引用数据类型，被专业称为装箱的过程
        list.add(34);
        list.add(new Integer(23));
        list.add(new Integer(35));
        list.add(new Integer(9));
        list.add(new Integer(274));

        for (int i = 0; i < list.size(); i++) {
            Object obj = list.get(i);
            if(obj instanceof Integer) {
            Integer tt=(Integer)obj;
            //tt.intValue():将引用数据类型转换为基本数据类型，被称为拆箱
            int iv = tt.intValue();
            if(iv%2==0) {
                System.out.println(iv);
                }
            }

```

### 五、ListIterator中方法简介

在ListIterator中有个previous()和hasPrevious()方法，通过这两个方法，可以将集合中的元素倒序遍历。

``` java
{

    public static void main(String[] args) {

        List list = new ArrayList();
        list.add("a");
        list.add("b");
        list.add("world");
        list.add("c");
        list.add("d");
        list.add("e");

        ListIterator listIter = list.listIterator();
        while(listIter.hasNext()) {
            System.out.println(listIter.next());//获取元素并将指针向后移动
        }

        System.out.println("-----------------");

        while(listIter.hasPrevious()) {
            System.out.println(listIter.previous());         //获取元素并将指针向前移动
        }
    }

}
```

* 需要注意的是在倒序遍历之前要将集合先正序遍历。

### 六、总结

以上就是List集合的内容了，本章最后一节会对整个集合有个知识点的总结，下一节我们学习Set集合。