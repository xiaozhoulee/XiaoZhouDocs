# 第03节：Set集合

上一节我们简单了解了List集合，本节详细讲解set集合。

### 一、Set集合有什么特点？

Set集合类似于一个罐子，程序可以依次把多个对象“丢进”Set集合，而Set集合通常不能记住元素的添加顺序。实际上Set就是Collection只是行为略有不同(Set不允许包含重复元素)。
Set集合不允许包含相同的元素，如果试图把两个相同元素加入同一个Set集合中，则添加操作失败，add()方法返回false，且新元素不会被加入。

### 二、HashSet类介绍

HashSet是Set接口的典型实现，大多数时候使用Set集合时就是使用这个实现类。HashSet按Hash算法来存储集合中的元素，因此具有很好的存取和查找性能。底层数据结构是哈希表。
哈希表
一个元素为链表的数组，综合了数组与链表的优点。

HashSet具有以下特点：

* 不能保证元素的排列顺序，顺序可能与添加顺序不同，顺序也可能发生变化；
* HashSet不是同步的；
* 集合元素值可以是null；

```java

import java.util.HashSet;
import java.util.Set;
public class HashSetTest {

    public static void main(String [] args){
        Set<String> set = new HashSet<>();
        boolean b1 = set.add("a");
        boolean b2 = set.add("a");
        System.out.println(b1);
        System.out.println(b2);
        System.out.println(set.size());
        System.out.println(set);
        //因为set集合的元素不能重复
    }
}

```

### 三、内部存储机制

当向HashSet集合中存入一个元素时，HashSet会调用该对象的hashCode方法来得到该对象的hashCode值，然后根据该hashCode值决定该对象在HashSet中的存储位置。如果有两个元素通过equals方法比较true，但它们的hashCode方法返回的值不相等，HashSet将会把它们存储在不同位置，依然可以添加成功。
也就是说。HashSet集合判断两个元素的标准是两个对象通过equals方法比较相等，并且两个对象的hashCode方法返回值也相等。

靠元素重写hashCode方法和equals方法来判断两个元素是否相等，如果相等则覆盖原来的元素，依此来确保元素的唯一性

没有重写hashCode和equals方法

```java
 Student s1 = new Student("小龙女", 23);
        Student s2 = new Student("任盈盈", 24);
        Student s3 = new Student("小龙女", 23);
        Student s4 = new Student("东方不败", 25);
        Student s5 = new Student("伊琳", 29);
        Student s6 = new Student("周芷若", 30);
        HashSet<Student> hashSet = new HashSet<>();
        hashSet.add(s1);
        hashSet.add(s2);
        hashSet.add(s3);
        hashSet.add(s4);
        hashSet.add(s5);
        hashSet.add(s6);
        for (Student student : hashSet) {
            System.out.println(student.getName()+"=="+student.getAge());
        }
    }

```

```java

public class Student {
    private String name;
    private int age;

    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

```

运行结果是：

* 任盈盈 == 24
* 伊琳 == 29
* 东方不败 == 25
* 周芷若 == 30
* 小龙女 == 23
* 小龙女 == 23

### 四、在元素类中重写hashCode和equals方法

```java

  //判断判断两个对象是否相等，对象是否存在，对象的name和age是否相等
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return age == student.age &&
                Objects.equals(name, student.name);
    }

    //返回对象的name和age的hash值
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }

```

重写之后不是判断两个对象hashCode是否相等，而是判断对象的name和age是否同时相等，如果同时相等则判断为同一对象，不能重复出现在集合中。
再次遍历结合，运行结果：

* 周芷若 == 30
* 东方不败 == 25
* 伊琳 == 29
* 小龙女 == 23
* 任盈盈 == 24
  
可以看到重复的元素已经被覆盖，保证了集合中元素的唯一性。
如果需要把某个类的对象保存到HashSet集合中，重写这个类的equals方法和hashCode方法时，应尽量保证两个对象通过equals发那个法比较返回true时，他们的hashCode方法返回值也相等。

### 五、总结

以上就是Set集合的内容了，接下来我们学习Map集合。