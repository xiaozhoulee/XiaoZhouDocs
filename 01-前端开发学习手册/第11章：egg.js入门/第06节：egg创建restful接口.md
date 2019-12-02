# 第6节：egg创建restful接口

### 一、思路分析

同学们都看了上一张的知识点多少对restful有点理解了，那怎么用egg创建restful呢，请下看

**1. 这俩张图是最基本的前后台交互的接口,router都是对应home.js中的每个方法。**

![10061a](../images/1006_1a.png)
![10-06-01b](../images/1006_1b.png)

**2. 使用restful接口**
    如图所示,通过 ``app.resources`` 方法，我们将 home 这个资源的增删改查接口直接映射到了 ``app/controller/home.js`` 文件中的方法。
    优点就是  简化代码、不再像图一图二那样一次性写四个数据接口。

![10-06-01c](../images/1006_1c.png)

**3. 这是每中请求对应的每种方法 如get对应index，切记不可自定义方法名称，否则无效**

![10-06-01d](../images/1006_1d.png)
