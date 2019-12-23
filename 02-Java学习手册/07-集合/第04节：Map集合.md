# 第04节：Map集合

上一节学习了set集合，这一节我们学习Map集合。

### 一、什么是Map集合？

Map集合是提供key到value的映射,Map中不能包含相同的key值,每个key只能影射一个相同的value.key值还决定了存储对象在映射中的存储位置.但不是key对象本身决定的,而是通过散列技术进行处理,可产生一个散列码的整数值,散列码通常用作一个偏移量,该偏移量对应分配给映射的内存区域的起始位置,从而确定存储对象在映射中的存储位置.Map集合包括Map接口以及Map接口所实现的类.

### 二、Map集合的接口

Map接口概述

* 将键映射到值的对象
* 一个映射不能包含重复的键
* 每个键最多只能映射到一个值

Map接口和Collection接口的不同

* Map是双列的,Collection是单列的
* Map的键唯一,Collection的子体系Set是唯一的
* Map集合的数据结构值针对键有效，跟值无关;Collection集合的数据结构是针对元素有效

### 三、map的添加功能

* V put(K key,V value):添加元素。
* 如果键是第一次存储，就直接存储元素，返回null
* 如果键不是第一次存在，就用值把以前的值替换掉，返回以前的值

```java

import java.util.HashMap;
import java.util.Map;

public class Demo1_Map {

    public static void main(String[] args) {
        Map<String, Integer> map=new HashMap<>();
        Integer i1=map.put("张三", 23);
        Integer i2=map.put("李四", 24);
        Integer i3=map.put("王五", 25);
        Integer i4=map.put("赵六", 26);
        Integer i5=map.put("张三", 26);//把被覆盖的元素返回
        System.out.println(map);
        System.out.println(i1);
        System.out.println(i2);
        System.out.println(i3);
        System.out.println(i4);
        System.out.println(i5);
        //判断map中是否包含传入的Key
        System.out.println(map.containsKey(24));
        //判断map中是否包含传入的Value
        System.out.println(map.containsValue("李四"));
        //判断Map中的长度
        System.out.println(map.size());
        //获取map中的value
        Collection<String> c = map.values();
        System.out.println(c);
   }
```

### 四、map的删除功能

* map clear():移除所有的键值对元素
* V remove(Object key)：根据键删除键值对元素，并把值返回

```java

import java.util.HashMap;
import java.util.Map;

public class Demo1_Map {

    public static void main(String[] args) {
        Map<String, Integer> map=new HashMap<>();
        map.put("张三", 23);
        map.put("李四", 24);
        map.put("王五", 25);
        map.put("赵六", 26);

        Integer i1Value=map.remove("张三"); 
        System.out.println(i1Value);
        System.out.println(map);
        //清除所有的元素
        map.clear();

```

### 五、两种方式遍历Map集合

```java

import java.util.Iterator;
import java.util.Map;
import java.util.HashMap;
import java.util.Set;

public class MapTest {
    public static void main(String[] args){
        Map<Integer,String> map = new HashMap<>();
        map.put(1,"甘");
        map.put(2,"文");
        map.put(3,"璀");
        map.put(4,"山");

        Set<Integer> keySet = map.keySet();
        Iterator<Integer> iter = keySet.iterator();
        //遍历获取到key之后即可获取相应的value
        while(iter.hasNext()){
            Integer key = iter.next();
            System.out.println(key+map.get(key));
        }
    }
}

```

```java

import java.util.Iterator;
import java.util.Map;
import java.util.HashMap;
import java.util.Set;

public class MapTest {
    public static void main(String[] args){
        Map<Integer,String> map = new HashMap<>();
        map.put(1,"甘");
        map.put(2,"文");
        map.put(3,"璀");
        map.put(4,"山");

        Set<Map.Entry<Integer,String>> entrySet = map.entrySet();
        Iterator<Map.Entry<Integer, String>> iter = entrySet.iterator();
        while(iter.hasNext()){
            Map.Entry<Integer,String > entry = iter.next();
            Integer key = entry.getKey();
            String value = entry.getValue();
            System.out.println(key+value);
        }

```

### 六、总结
以上就是map集合的使用方法了，下一节我们来做一个集合知识点总结，总结一下这三种集合方法的优劣。