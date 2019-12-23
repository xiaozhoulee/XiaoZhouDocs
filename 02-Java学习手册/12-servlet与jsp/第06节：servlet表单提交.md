# 第05节：servlet表单提交

上一节我们学习了cookie与session，本节我们学习如何利用servlet实现表单提交的效果

### 一、需要的jsp页面介绍

需要三个页面，登录页面，处理页面，登陆后用户信息（列出登陆页面的属性）

#### 1. login.jsp

用户登录页面，提交给process.jsp。

#### 2. process.jsp

处理页面，若用户名为“admin”，密码为“000”，则跳转到show.jsp，否则跳转login.jsp。

#### 3. show.jsp

列出登录页面的属性。

### 二、代码展示

#### 以下是代码示例，后面会有代码解析

login.jsp

``` jsp
<form action="process.jsp" method="post">
  用户名：<input name="username" value="" /><br>
  用户密码：<input name="pwd" value="" /><br>
  用户性别：<input type="radio" name="sex" value="男">男
           <input type="radio" name="sex" value="女">女<br>
  用户爱好：<input type="checkbox" name="hobby" value="游泳">游泳
           <input type="checkbox" name="hobby" value="看书">看书 
           <input type="checkbox" name="hobby" value="看电影">看电影
           <input type="checkbox" name="hobby" value="写代码">写代码<br>
  用户籍贯：<select name="home">
             <option value="广州">广州</option>
             <option value="重庆">重庆</option>
             <option value="上海">上海</option>
           </select>
           <br>
  <input type="submit" value="提交">
  <input type="reset" value="重置">
</form>
```

process.jsp

``` jsp
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

    request.setCharacterEncoding("utf-8");

    String username = request.getParameter("username");
    String pwd = request.getParameter("pwd");
    String[] hobby = request.getParameterValues("hobby");	
    String sex = request.getParameter("sex");
    String home = request.getParameter("home");

    if("admin".equals(username) && "000".equals(pwd)){
        session.setAttribute("username", username);
        session.setAttribute("hobby", hobby);
        session.setAttribute("home", home);
        session.setAttribute("sex", sex);
        request.getRequestDispatcher("show.jsp").forward(request, response);
    }
    else{
        response.sendRedirect("login.jsp");
    }
%>

```

show.jsp

```jsp
<%  request.setCharacterEncoding("utf-8"); %>
    用户姓名：<%= session.getAttribute("username")%><br>
    用户性别：<%= session.getAttribute("sex")%><br>
    用户爱好：<%
               String[] hobby = (String[])session.getAttribute("hobby");
               for(int i=0; i<hobby.length; i++)
                 out.println(hobby[i]+"  ");
             %><br>
    用户籍贯：<%= session.getAttribute("home")%><br>
```

### 三、代码解析

#### 1、获取表单中对应name属性值的存放的value

``` jsp
String <变量名> = request.getParameter("<表单中的name属性值>");
```

#### 2、获取表单中复选框选中的所有值，存放在数据中

``` jsp
String[] <一维数组名> = request.getParameterValues("<表单中复选框统一的name属性值>");
```

#### 3、把数组传入sesstion

``` jsp
session.setAttribute("<存放的变量名或数组名>", <当前页面的变量名或数组名>);
```

#### 4、在另一页面传出session中存的值

``` jsp
//单值session
<%= session.getAttribute("<变量名>"); %> 

//数组session
String[] <数组名> = (String[])session.getAttribute("<数组名>");
    for(int i=0; i<<数组名>.length; i++)
        out.println(<数组名>[i]+"  ");
```

#### 5、重定向和转发

``` jsp
//重定向
request.getRequestDispatcher("xxx.jsp").forward(request, response);

//转发
response.sendRedirect("xxx.jsp");
重定向不传数据，地址栏发生变化；

转发是在同一个请求里，地址栏不发生变化。

当需要保存一个内容的时候，使用转发；不需要保存内容的时候，使用重定向。

### 四、总结

以上利用了servlet实现了表单的提交效果，后期可以结合数据库实现数据保存。本节内容结束下节学习