# IOC

上一节咱们学习了第一个Spring程序，本节咱们介绍一下第一节中提到的特性IOC。并且进一步分析一下上一节的代码。

### 一、什么是IOC？

**咱们上一章做的入门案例其实就包含了IOC。**

IOC也叫控制反转，它可以说是一种思想。指的是将创建对象的操作权交给容器（例如spring），通过容器来装配和管理对象的创建，控制反转其实就是对这些对象控制权的反转，控制权由程序本身反转给了外部容器。

可以通俗的把IOC理解成一个思想，无需要再创建对象，而是由外部创建spring容器后传递数据给程序。
让Spring和Bean用配置文件关联到一起。而不是像创建对象之类的以硬编码的方式耦合再一起。

### 二、IOC程序的分析

我们接下来进一步分析上一节的程序，先把上一节中的测试类代码再次展示出来给大家看一下。

``` java
   /**
         * 使用spring之后的写法：直接通过spring获取对象
         */
        @Test
        public void springType() {
            ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
            //从spring中获取对象
            StudentService studentService = (StudentService) context.getBean("studentService");
            studentService.study();
        }
```

### 三、ApplicationContext接口

可以看到我们是通过ApplicationContext接口获取到Spring注入给程序的对象。那么**在这段代码中，ApplicationContext可以说是充当了IOC容器**。Applicationcontext使用了反射的方式创建bean对象，并且在读取配置文件之后将里面注册的bean全部创建为对象。我们可以通过这个接口的两个实现类来创建容器：

* ClassPathXmlApplicationContext
  如果spring的配置文件在项目的类路径下，可以使用该类创建容器
  (比如咱们的第一个案例)

* FileSystemXmlApplicationContext
  如果spring的配置文件不在类路径下，可以使用该来创建容器
  (比如配置文件的路径是"F:\\\xiaozhoubg\\\xxx\\\applicationContext.xml)

### 四、BeanFactory接口

除了ApplicationContext接口，我们还可以使用BeanFactory接口来充当IOC容器。BeanFactory是ApplicationContext的父级接口。
BeanFactory的方式不是在读取配置文件之后创建里面的Bean对象，而是在使用的时候才会创建。

``` java

   @Test
    public void springType2(){

        DefaultListableBeanFactory factory = new DefaultListableBeanFactory();
        XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(factory);
//                                                        因为这里用到了FileSystemResource方法。所以说需要填写配置文件的全路径
        reader.loadBeanDefinitions(new FileSystemResource("C:\\Users\\Administrator\\Desktop\\mybatis-study-master\\spr01\\src\\main\\resources\\applicationContext.xml"));
        //当使用该bean的时候才会创建其对象
        StudentService studentService = (StudentService)factory.getBean("studentService");
        studentService.study();
    }
```

#### 除了上面的方法之外，有些旧点的教程中会使用下面方式创建BeanFactory对象：

``` java
BeanFactory xmlBeanDefinitionReader = new XmlBeanFactory(new ClassPathResource("applicationContext.xml"));
```

这种方式以及被spring标记为废弃的了，咱们就不用了。

### 五、使用BeanFactory接口还是ApplicationContext接口呢？

这两个接口的作用很相似，大家可能会有个疑问了，那到底使用哪个呢？

* 主要使用ApplicationContext接口，因为它的功能相比于BeanFactory接口会更全面。

再咱们的实际工作中要是没有特殊情况都会用ApplicationContext接口。  

除非配置很低的机器，内存受限等等才会使用BeanFactory接口，用了这个接口，事务管理和AOP功能会失效。
所以说一般情况都用ApplicationContext接口。

### 六、总结

以上就是IOC的介绍了，spring ioc容器将bean对象创建好并传递给使用者的过程叫做bean的装配。那么咱们下一节就来学习一下bean的装配。