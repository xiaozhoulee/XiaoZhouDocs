# 第05节： ajax请求 ResponseBody响应json数据

本节我们来学习异步ajax请求 ResponseBody响应json数据了。

### 一、内容概述

我们之前肯定是学到过ajax的，这里简单介绍一下，ajax是由javascript、xml、XMLHttpRequest组合在一起、能实现异步提交的功能，是一种创建交互式网页应用的网页开发技术。

同步提交：当用户发送请求时，当前页面不可以使用，服务器响应页面到客户端，响应完成，用户才可以使用页面。  

异步提交：当用户发送请求时，当前页面还可以继续使用，当异步请求的数据响应给页面，页面把数据显示出来。  

也就是说咱们可以通过ajax实现局部刷新的方法。

java接收到的ajax请求可以通过ResponseBody注解的方法向页面返回json格式的数据

### 二、下载并引用jQuery文件

我们前台发送的异步请求是使用ajax实现的，所以我们需要下载jQuery文件，并引用。
[jQuery下载地址](https://jquery.com/download/)

#### 创建目录

下载好后我们放到静态资源文件夹下，如图，创建静态资源文件夹  
![jtzy](..\images/1405_mulu.png)
建议将静态文件创建到如图位置。

#### 启用静态资源

然后在springmvc.xml中添加如下代码来配置不过滤静态文件。  
如果不配置会被核心控制器过滤掉（就是说静态文件不会生效）。  
location表示，“xx”下的资源不过滤  
mapping表示，目录中带“xx”不过滤  

``` xml
<!-- springmvc.xml -->
<!-- 设置静态资源不过滤 -->
    <mvc:resources location="/css/" mapping="/css/**"/>
    <mvc:resources location="/images/" mapping="/images/**"/>
    <mvc:resources location="/js/" mapping="/js/**"/>
```

#### 引用jQuery

在index.jsp的body标签中写入

``` jsp

<script src="js/jquery.min.js"></script>
```

到这咱们的jquery引入成功了，下面教大家如何实现

### 三、代码示例

#### 前端发送ajax请求

在index.jsp中新建script标签

``` js
<script>
    $(function () {
     $("#btn").click(function () {
         $.ajax({
             // 请求路径
             url:"/user/testAjax",
             //设置编码集为utf-8
             contentType:"application/json;charset=UTF-8",
             //发送到服务器的数据
             data:'{"username":"xiaozhou","password":"123","age":"20"}',
             //设置为json返回格式
             dataType:"json",
             //设置请求格式
             type:"post",
             success:function (data) {
              //data服务器端响应的json数据，进行解析

             }
         })
     })
    })
</script>
```

#### controller接收传值

由上面代码咱们可以看到请求路径是"/user/testAjax"，所以说咱们需要在controller中写上对应的方法。

``` java
//这里注解对应了前端请求路径
 @RequestMapping("/testAjax")
 //@RequestBody注解接收json
    public @ResponseBody User testAjax(@RequestBody User user){
        //这里咱们创建了个User类，要说明一下
        //前端发的json数据springmvc会自动封装到User类里，但是需要引用一个额外的jar包
        //稍后我们引用额外的jar包
        //@ResponseBody注解可以将自动封装到User类里的值变成json格式响应

        // 重新定义age值为30
        user.setAge(30);

        System.out.println(user);

        // 做出个响应
        return user;
    }
```

编写JavaBean类（User）

写出如图所示的私有类，并且快捷生成getter and setter 和 toString 方法。
![User](..\images/1405_user.png)

引入上面注释中提到的jar包,在pom.xml中编写如下代码

``` xml
<dependency>
<groupId>com.fasterxml.jackson.core</groupId>
<artifactId>jackson-databind</artifactId>
<version>2.9.0</version>
</dependency>
<dependency>
<groupId>com.fasterxml.jackson.core</groupId>
<artifactId>jackson-core</artifactId>
<version>2.9.0</version>
</dependency>
<dependency>
<groupId>com.fasterxml.jackson.core</groupId>
<artifactId>jackson-annotations</artifactId>
<version>2.9.0</version>
</dependency>
```

#### 前端做出响应

回到刚才的index.jsp

咱们在ajax请求中包含了一个success方法，作用是：data服务器端响应的json数据，进行解析
可能大家有些不太理解，通俗的说就是，咱们可以在这个方法里面处理响应的json数据，实现一些方法。

``` js
success:function (data) {
              //data服务器端响应的json数据，进行解析

                //下面这个弹框的内容是user类中的username属性
                 alert(data.username)
                 alert(data.password)
                 alert(data.age)

             }
```

配置好tomcat运行项目，发现弹框age值是30，说明了这个值是从User类中调用的，前端发的json数据springmvc会自动封装到User类里。

### 四、总结

以上就是ajax请求 ResponseBody响应json数据了。

在实际开发中具体用哪个方法请求和响应还要看实际情况。

[案例链接](https://github.com/xiaozhoulee/java-examples/tree/master/14-spring_mvc/%E7%AC%AC05%E8%8A%82%EF%BC%9A%E8%AF%B7%E6%B1%82%E5%93%8D%E5%BA%94/springmvc02)