# 第07节：for循环

### 一、for循环的概念
for循环可以遍历任何序列的项目，如一个列表或者一个字符串。  
### 二、for循环语法
``` python
for 临时变量 in 序列:
    重复执行的代码1
    重复执行的代码2
    ......
```
### 三、实例
1、for循环字符串  
``` python
num = 'steam'
for i in num: # 这里面的i就临时变量（临时变量是由程序员自己命名的）
    print(i)
```
2、for循环数组  
``` python
python = ['绅士','怪叔叔,','怪阿姨','小北鼻']
for i in python:
    print(i)
```
### 四、在for循环中使用break和continue
1、break  
``` python
num = 'steamwegame'
for i in num:
    if i == 'e':
        print("遇到e不打印")
        break
    print(i)
```
2、continue  
``` python
num = 'steamwegame'
for i in num:
    if i == 'e':
        print("遇到e不打印")
        continue
    print(i)
```


