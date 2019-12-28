# 第09节：Nunjucks入门教程

### 一、Nunjucks基本概念

* Nunjucks是一个丰富强大的模板引擎。
* 模板引擎就是基于模板配合数据构造出字符串输出的一个组件。
* 绝大多数情况，我们都需要读取数据后渲染模板，然后呈现给用户。故我们需要引入对应的模板引擎。
* 简单来说Nunjucks就是用来实现在后台服务器显示内容的模板。

### 二、引入egg-view-nunjucks插件

    $ npm i egg-view-nunjucks --save

### 三、启用插件

    // config/plugin.js
    exports.nunjucks = {
        enable: true,
        package: 'egg-view-nunjucks',
    };

### 四、渲染页面

* 用render渲染页面
  ```js
  // controller/test.js
  async 方法名(){
        await this.ctx.render("渲染的网页",{
            data:"数据"
        })
    }
  ```
 
### 五、绑定数据

``` js
    // controller/test.js
    async test(){
        await this.ctx.render("test.html",{
            test:"hello world",

        })
    }
```

``` html
<!-- view/test.html -->
    <h1>
        {{test}}
    </h1>
    <img src="{{bannerUrl}}" alt="">
```

### 六、遍历数组

``` js
    async test(){
        await this.ctx.render("test.html",{
            test:"hello world",
            bannerUrl:"/public/images/banner.jpg",
            list:[
                {url:"../public/images/ice-suo.png",bt:'开门',sj:'2分钟前',dz:'杭州'},
                {url:"../public/images/ice-suo.png",bt:'开门',sj:'1天前',dz:'广东'},
                {url:"../public/images/ice-suo.png",bt:'开门',sj:'1天前',dz:'杭州'},
                {url:"../public/images/ice-suo.png",bt:'开门',sj:'18天前',dz:'上海'},
              ],
        })
    }
```

``` html
            {% for item in list %}
            <ul class="opul">
              <li>
                <img src={{item.url}} alt>
                {{item.name}}
                <span class="bt">{{item.bt}} </span>
                <span class="sj">{{item.sj}}</span>
                <span class="dz">{{item.dz}}</span>
              </li>
            </ul>
            {% endfor %}
```

### 七、继承模板

模板继承可以达到模板复用的效果。

* 有一个叫做 layout.html 的模板，如下所示：

``` html
  <ul>
    <li>
      水果
    </li>
    <li>
      体育用品
    </li>
    <li>
      海鲜
    </li>
  </ul>
```

* 有文件名为 fruits.html的网页，如下所示：

```html
    {% extends 'tZ.html' %} 
    {% block content %}
    <ul>
        <li>
            香蕉
        </li>
        <li>
            苹果
        </li>
        <li>
            鸭梨
        </li>
    </ul>
    {% endblock %}
```

这样就可以实现模板继承的效果了。