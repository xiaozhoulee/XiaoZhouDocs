# 第04节：字典（Dictionary）

### 本节目标
- 字典的介绍
- 创建字典的语法
- 字典常见操作
- 字典的循环遍历
### 一、字典的概念
Python字典是另一种可变容器模型，且可存储任意类型对象，如字符串、数字、元组等其他容器模型。  
### 二、创建字典
字典由键和对应值成对组成。字典也被称作关联数组或哈希表。基本语法如下：  
``` python
# 有数据的字典
dict1 = {"name": "疯不觉","age": 18,"sex": "男","list": [1,2,3]}
print(type(dict1))
# 空字典
dict2 = {}
print(type(dict2))
# 用函数创建的字典
dict3 = dict()
print(type(dict3))
```
注意：  
- 每个键与值用冒号隔开（:），每对用逗号，每对用逗号分割，整体放在花括号中（{}）。
- 键必须独一无二，但值则不必。
- 值可以取任何数据类型，但必须是不可变的，如字符串，数或元组。
- 一般称冒号前面的为键(key)，简称k；冒号后面的为值(value)，简称v。
### 三、字典的常用语法之新增
写法：字典序列[key] = 值  
注意：如果key存在，则修改这个key对应的值，如果key不存在，则新增此键值对   
实例：  
``` python
# 添加的key不存在
dict = {"name": "疯不觉","age": 18,"sex": "男"}
dict["hobby"] = "爱好女"
print(dict)
# 添加的key存在
dict = {"name": "疯不觉","age": 18,"sex": "男"}
dict["name"] = "王先生"
print(dict)
```
### 四、字典的常用语法之删除
- del:删除字典中指定的键值对  
- clear(): 清空字典
``` python
# 删除字典中指定的值
dict = {"name": "疯不觉","age": 18,"sex": "男"}
del dict["name"] # 删除name这个键值对
print(dict)
# 输出结果为 {'age': 18, 'sex': '男'}
# 清空字典
dict = {"name": "疯不觉","age": 18,"sex": "男"}
dict.clear() # 清空字典
print(dict) # 输出结果为一个空的字典
```
### 五、字典的常用方法之修改
字典的修改和上面学习的新增键可以说是一样的。  
语法：写法：字典序列[key] = 值  
实例：  
``` python
dict = {"name": "第五轻柔","age": 23,"sex": "男"}
dict["sex"] = "女" # 把男修改成女
print(dict) # 输出结果为{"name": "第五轻柔","age": 23,"sex": "女"}
```
### 六、字典的常用方法之查找
#### 1、通过key值查找
实例：  
``` python
# 如果查找的key值存在则返回对的值，不存在则会报错
dict = {'name': '第五轻柔', 'age': 23, 'sex': '男','hobby': '运筹帷幄'}
print(dict['name']) # 查找name的值
print(dict["id"]) # 报错
```
#### 2、get()函数
语法：  
``` python
字典序列.get(key,默认值)
# 一般在书写get()函数时都不会写默认值
```
注意：如果查找的key值不存在则返回默认值，如果没写默认值则返回None 

实例：  
``` python
dict = {"name": "韩立","age": 18,"sex": "男"}
print(dict.get('name')) # 输出结果为韩立
print(dict.get(id,110)) # 字典中没有id这个键对值，所以输出默认值110
print(dict.get(id)) # 字典中没有di这个键对值，默认值也没有，所以输出的是None
```
#### 3、keys()函数
描述：keys()函数的作用为查找列表中所有的key值（键），返回一个可迭代的对象(迭代的意思就是可以使用for遍历的对象)还可以使用 list() 来转换为列表。  
实例：  
``` python
dict = {"name": "韩立","age": 18,"sex": "男"}
print(dict.keys()) # 输出结果为字典：dict_keys(['name', 'age', 'sex'])

list(dict.keys()) # 将dict.keys()转换为列表
print(list(dict.keys())) # 输出结果为： ['name', 'age', 'sex']
```
#### 4、values()函数
描述： values()函数可以查找列表中所有键对值中的值，返回一个迭代器，可以使用 list() 来转换为列表，列表为字典中的所有值。  
实例：  
``` python
dict = {"name": "韩立","age": 18,"sex": "男"}
print(dict.values()) # 输出结果为字典：dict_values(['韩立', 18, '男'])

list(dict.values()) # 转换为列表（此步骤可以省略）
print(list(dict.values())) # 输出结果为列表： ['韩立', 18, '男']
```
#### 5、items()函数
描述：items() 方法以列表形式（并非直接的列表，若要返回列表值还需调用list函数）返回可遍历的(键, 值) 元组数组。  
实例：  
``` python
dict = {"name": "韩立","age": 18,"sex": "男"}
print(dict.items()) # 输出结果为字典：dict_items([('name', '韩立'), ('age', 18), ('sex', '男')])
list(dict.items()) # 转换为列表
print(list(dict.items())) # 输出结果为列表：[('name', '韩立'), ('age', 18), ('sex', '男')]
```
### 七、字典的循环遍历
#### 1、遍历字典的key
实例：  
``` python
dict = {"name": "韩立","age": 18,"sex": "男"}
for key in dict.keys(): # 遍历字典中key值
    print(key)

# 输出结果为：
            name
            age
            sex
```
#### 2、遍历字典的values
实例：  
``` python
dict = {"name": "韩立","age": 18,"sex": "男"}
for key in dict.values(): # 遍历字典中值
    print(key)

# 输出结果为：
            韩立
            18
            男
```
#### 3、遍历字典的键值对
实例：  
``` python
dict = {"name": "韩立","age": 18,"sex": "男"}
for item in dict.items(): # 遍历字典中的键值对
    print(item)

# 输出结果为：
            ('name', '韩立')
            ('age', 18)
            ('sex', '男')
```
#### 4、遍历字典的键值对（拆包）
实例：  
``` python
dict = {"name": "韩立","age": 18,"sex": "男"}
for key,value in dict.items(): # 分别遍历字典中key和value值
    print(f'{key} = {value}')

# 输出结果为：
            name = 韩立
            age = 18
            sex = 男
```
### 八、总结
本节需要熟练掌握的知识  

- 创建字典

- 常用操作 增/改

- 常用操作查找
  - 字典序列[key]
  - keys()
  - values()
  - items()
### 九、作业
有字典 dict = {"k1": "v1", "k2": "v2", "k3": "v3"}，实现以下功能：  

- 1、遍历字典 dict 中所有的key  
- 2、遍历字典 dict 中所有的value   
- 3、循环遍历字典 dict 中所有的key和value  
- 4、添加一个键值对"k4","v4",输出添加后的字典 dict  
- 5、删除字典 dict 中的键值对"k1","v1",并输出删除后的字典 dict   

参考答案：  
``` python
# 1、
dict = {"k1": "v1", "k2": "v2", "k3": "v3"}
for key in dict.keys():
    print(key)
# 2、
dict = {"k1": "v1", "k2": "v2", "k3": "v3"}
for value in dict.values():
    print(value)
# 3、
dict = {"k1": "v1", "k2": "v2", "k3": "v3"}
for key,value in dict.items():
    print(f'{key}= {value}')
# 4、
dict = {"k1": "v1", "k2": "v2", "k3": "v3"}
dict["k4"]="v5"
print(dict)
# 5、
dict = {"k1": "v1", "k2": "v2", "k3": "v3"}
del dict["k1"]
print(dict)
```







