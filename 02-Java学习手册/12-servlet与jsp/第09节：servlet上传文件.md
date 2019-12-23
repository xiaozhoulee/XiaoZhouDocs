# 第08节：servlet上传文件

### 一、文件上传概念

文件上传指的是用户通过浏览器向服务器上传某个文件，服务器接收到该文件后会将该文件存储在服务器的硬盘中，通常不会存储在数据库中，这样可以减轻数据库的压力并且在文件的操作上更加灵活，常见的功能是上传头像图片。  
Servlet3.0 提供了专门的文件上传 API。 HttpServletRequest 的 getPart()方法可以完成单个文件上传，而 getParts()方法可以完成多个文件上传。注意，这两个方法是从 Servlet3.0 开始定义的。  

##### getPart

方法：Part getPart(String name) throws IOException, ServletException  
作用：获取 Multipart 请求中指定名称的"部分"。一般这里的参数是上传表单中的"file"表单项的 name 值。  

##### getParts

方法：java.util.Collection getParts()throws IOException, ServletException  
作用：获取 Multipart 请求中的所有"部分"。多文件上传时使用该方法。  

##### write

方法：void write(String fileName) throws IOException  
作用：将上传文件数据写入到指定的文件中。  

另外在Servlet3.1中的Part接口里面新增了getSubmittedFileName方法用来获取上传的文件名  

#### 文件上传的原理

所谓的文件上传就是服务器端通过request对象获取输入流，将浏览器端上传的数据读取出来，保存到服务器端。  

#### 文件上传的要求

提供form表单，表单的提交方式必须是post
form表单中的enctype属性必须是multipart/form-data
表单中提供input type="file"上传输入域

### 二、代码示例:

创建一个upload.jsp的文件，里面提供上传的按钮：  

``` jsp

```

创建servlet用来处理用户上传的文件  
创建servlet时，需要在Servlet中添加一个@MultipartConfig注解，表示当前 Servlet 可以处理 Multipart 请求。

``` java
import java.io.File;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 * 处理上传的servlet
 */
@WebServlet("/upload")
@MultipartConfig //表示当前servlet可以处理multipart请求
public class UploadServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //获取服务器存放上传文件的路径
        String path = this.getServletContext().getRealPath("/upload");
        System.out.println(path);
        //获取上传文件，photo是html表单中的name
        Part part = request.getPart("photo");
        //获取上传文件的名称，这是servlet3.1中加入的方法
        String fileName = part.getSubmittedFileName();

        //将上传的文件写入到指定的服务器路径中
        part.write(path + "/" + fileName);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}
```

#### 解决文件名重复问题

上面代码中有可能会出现多个用户上传的文件名重复的情况，此时之前在服务器中存储的文件会被后上传的同名文件替换掉，为了解决这个问题，可以将文件名修改一下，建议使用UUID的方式重命名。
uuid是Universally Unique Identifier的缩写，中文是通用统一识别码，uuid具有唯一性，uuid的生成跟系统的时间、mac地址、时间序列、随机数有关，所以通常所生成的uuid是不会重复的，两个相同的uuid出现的概率非常低（比太阳从西边出来还要低）。  

``` java
   //获取上传文件的名称，这是servlet3.1中加入的方法
    String fileName = part.getSubmittedFileName();

    //在文件名中添加uuid
    fileName = UUID.randomUUID() + "_" + fileName;
```

通过上面的代码就可以确保用户上传文件名的唯一性了。

#### 创建目录便于管理

如果用户上传的文件都放到一个文件夹下的话，随着时间的积累，该文件夹就会变的非常臃肿，不利于管理。因此，这里考虑将用户上传的文件放到不同的文件夹中，我们来按照年、月、日创建多级子目录的方式。比如用户在2018年1月25日上传了一个文件monkey.jpg，那就让该文件放到这样的文件夹目录中：/2018/1/25/monkey.jpg

``` java
//获取当前系统时间的年月日
LocalDate now = LocalDate.now();
int year = now.getYear();
int month = now.getMonthValue();
int day = now.getDayOfMonth();
String path = this.getServletContext().getRealPath("/upload");
//在upload下分别创建年、月、日三级子目录
path = path + "/" + year + "/" + month + "/" +day;
//创建父目录
File parentDir = new File(path);
//如果父目录不存在，则创建
if(!parentDir.exists()){
    parentDir.mkdirs();
}
```

按照上面完善后的代码：

``` java
package com.monkey1024.servlet;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 * 处理上传的servlet
 */
@WebServlet("/upload")
@MultipartConfig //表示当前servlet可以处理multipart请求
public class UploadServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //获取服务器存放上传文件的路径
        String path = this.getServletContext().getRealPath("/upload");
        System.out.println(path);
        //获取上传文件，photo是html表单中的name
        Part part = request.getPart("photo");
        //获取上传文件的名称，这是servlet3.1中加入的方法
        String fileName = part.getSubmittedFileName();

        //在文件名中添加uuid
        fileName = UUID.randomUUID() + "_" + fileName;

      //获取当前系统时间的年月日
        LocalDate now = LocalDate.now();
        int year = now.getYear();
        int month = now.getMonthValue();
        int day = now.getDayOfMonth();

        //在upload下分别创建年、月、日三级子目录
        path = path + File.separator + year + File.separator + month + File.separator +day;
        //创建父目录
        File parentDir = new File(path);
        //如果父目录不存在，则创建
        if(!parentDir.exists()){
            parentDir.mkdirs();
        }

        //将上传的文件写入到指定的服务器路径中
        part.write(path + File.separator + fileName);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }


}
```

### 三、设置上传文件的大小

在@MultipartConfig注解中有两个属性：
maxFileSize：表示上传一个文件的最大值，单位是byte
maxRequestSize：表示一次请求中上传文件的最大值，一次可能上传多个文件，这些文件大小的之和。单位是byte

如果上传的文件超出了设置的最大值时，系统会在

``` java
Part part = request.getPart("photo");
```

抛出一个IllegalStateException的异常，我们可以通过捕获该异常从而向用户提示友好信息。将代码修改至如下：

```java
@MultipartConfig(maxFileSize = 1024*5) // 表示当前servlet可以处理multipart请求
```

``` java
  // 获取上传文件，photo是html表单中的name
        Part part;
        try{
            part = request.getPart("photo");
        }catch(IllegalStateException e){
            //上传的单个文件超出maxFileSize或者上传的总的数据量超出maxRequestSize时会抛出此异常
            e.printStackTrace();
            out.write("文件上传失败，请上传小于5kb的文件");
            return;
        }
```

### 四、多文件上传

用户在客户端有时需要进行多文件上传，此时可以通过下面方法获取Part对象的集合：

``` java
Collection<Part> parts = request.getParts();
```

然后遍历该集合分别处理part对象即可：

``` java
  // 一次上传多个文件
        Collection<Part> parts;
        try {
            parts = request.getParts();
        } catch (IllegalStateException e) {
            // 上传的单个文件超出maxFileSize或者上传的总的数据量超出maxRequestSize时会抛出此异常
            e.printStackTrace();
            out.write("文件上传失败，请上传小于5kb的文件");
            return;
        }
```

* bootstrap-fileupload组件
如果希望实现一些更炫的前端效果，可以借助使用bootstrap-fileupload，该组件基于bootstrap实现，使用前需要引入bootstrap相关文件，里面的文档和demo都非常丰富，感兴趣的同学可以自行查看。
在线文档：http://plugins.krajee.com/file-input
在线demo：http://plugins.krajee.com/file-input/demo

<<<<<<< HEAD
=======
### 五、总结

>>>>>>> develop
以上就是servlet上传文件了，下一节我们来学习servlet下载文件。
