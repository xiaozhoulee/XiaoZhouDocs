# 第9节：循环中的else

### 一、循环中的else简介
循环可以和else配合使用，else下方缩进的代码指的是当循环正常结束之后循环的代码，循环不正常的话就不会执行  
### 二、while...else
1、语法  
``` python
while 条件:
    条件成立重复执行的代码:
else:
    循环正常结束之后要执行的代码：
```
2、实例  
``` python
# 需求：输出5遍疯狂的网瘾少年，完成之后再执行雷电法王杨永信已上线
i=0
while i<5:
    print("疯狂的网瘾少年")
    i+=1
else:
    print('雷达法王杨永信已上线')
```
3、while...else之break  
``` python
# 需求：网瘾少年不听话，在第三天包宿时被发现并送去了杨永信戒网所！
i=0
while i<5:
    if i ==3:
        print("网瘾少年被抓去戒网了")
        break
    print("疯狂的网瘾少年")
    i+=1
else:
    print('雷达法王杨永信已上线')
    #else是指循环正常结束之后再执行的代码，所以如果是break阻止的循环，下面else里面的代码是不会执行的。 
```
4、while...else之continue  
``` python
# 需求：网瘾少年不听话，在第三天包宿时被发现送去了杨永信戒网所！但是他又跑出来了继续包宿！
i=0
while i<5:
    if i ==3:
        print("网瘾少年被抓去戒网了")
        continue
    print("疯狂的网瘾少年")
    i+=1
else:
    print('雷达法王杨永信已上线')
    #因为continue是退出当前一次循环，继续下一次循环，所以该循环在continue控制下是可以正常结束的，当循环结束后就执行了else里的代码。
```  
### 三、for...else
1、语法   
``` python
for 临时变量 in 序列:
    重复执行的代码  
else:
    循环正常结束之后再执行的代码
```
2、实例  
``` python
num = 'steamweg'
for i in num:
    print(i)
else:
    print("循环正常结束后执行的代码")
```
3、for...else之break
``` python
num = 'steamweg'
for i in num:
    if i=='e':
        print("遇到e不打印")
        break
    print(i)
else:
    print("循环正常结束后执行的代码")
    #else是指循环正常结束之后再执行的代码，所以如果是break阻止的循环，下面else里面的代码是不会执行的。
```
4、for...else之continue   
``` python
num = 'steamweg'
for i in num:
    if i=='e':
        print("遇到e不打印")
        i+=1
        continue
    print(i)
else:
    print("循环正常结束后执行的代码")
    #因为continue是退出当前一次循环，继续下一次循环，所以该循环在continue控制下是可以正常结束的，当循环结束后就执行了else里的代码。
```



