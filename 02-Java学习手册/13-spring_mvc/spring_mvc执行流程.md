# 第02节：spring_mvc执行流程
上一章我们学习了springMVC的简单概述与第一个项目本章节我们来学习SpringMVC的具体流程

### SpringMVC流程：

* 01、用户发送出请求到前端控制器DispatcherServlet。

* 02、DispatcherServlet收到请求调用HandlerMapping（处理器映射器）。

* 03、HandlerMapping找到具体的处理器(可查找xml配置或注解配置)，生成处理器对象及处理器拦截器(如果有)，再一起返回给DispatcherServlet。

* 04、DispatcherServlet调用HandlerAdapter（处理器适配器）。

* 05、HandlerAdapter经过适配调用具体的处理器（Handler/Controller）。

* 06、Controller执行完成返回ModelAndView对象。

* 07、HandlerAdapter将Controller执行结果ModelAndView返回给DispatcherServlet。

* 08、DispatcherServlet将ModelAndView传给ViewReslover（视图解析器）。

* 09、ViewReslover解析后返回具体View（视图）。

* 10、DispatcherServlet根据View进行渲染视图（即将模型数据填充至视图中）。

* 11、DispatcherServlet响应用户。

![images](../images/1402_img.png)

### 涉及组件分析：
以下组件通常使用框架提供实现：

* DispatcherServlet：前端控制器
用户请求到达前端控制器，它就相当于mvc模式中的c，dispatcherServlet是整个流程控制的中心，由它调用其它组件处理用户的请求，dispatcherServlet的存在降低了组件之间的耦合性。

* HandlerMapping：处理器映射器
HandlerMapping负责根据用户请求找到Handler即处理器，springmvc提供了不同的映射器实现不同的映射方式，例如：配置文件方式，实现接口方式，注解方式等。

* Handler：处理器
Handler 是继DispatcherServlet前端控制器的后端控制器，在DispatcherServlet的控制下Handler对具体的用户请求进行处理。由于Handler涉及到具体的用户业务请求，所以一般情况需要程序员根据业务需求开发Handler。

* HandlAdapter：处理器适配器
通过HandlerAdapter对处理器进行执行，这是适配器模式的应用，通过扩展适配器可以对更多类型的处理器进行执行。

* View Resolver：视图解析器
View Resolver负责将处理结果生成View视图，View Resolver首先根据逻辑视图名解析成物理视图名即具体的页面地址，再生成View视图对象，最后对View进行渲染将处理结果通过页面展示给用户。

* View：视图
springmvc框架提供了很多的View视图类型的支持，包括：jstlView、freemarkerView、pdfView等。我们最常用的视图就是jsp。一般情况下需要通过页面标签或页面模版技术将模型数据通过页面展示给用户，需要由程序员根据业务需求开发具体的页面。
