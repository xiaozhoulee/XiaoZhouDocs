# 第01节：安装Node

### 一、安装Node

在windows环境下安装Node非常简单，下载地址如下所示：

[Node下载地址](http://nodejs.cn/download/)

下载完成之后，双击安装包，然后一直【下一步】就可以了。

![Node安装示意图](../images/0601_node.png)

### 二、测试Node

安装完成之后，打开命令行工具，我这里使用的是windows系统自带的命令行工具，输入下列命令：

``` bash
node -v
```

如果可以显示Node的版本号，说明Node已经安装成功，效果如下所示：

![Node安装示意图](../images/0601_nodetest.png)

### 三、测试NPM概述

在安装Node的时候，我们其实已经完成了Node和NPM的安装，这里直接打开命令行即可，输入如下命令，如果可以看到NPM的版本号，说明NPM安装成功。

``` bash
npm -v
```

![NPM安装示意图](../images/0601_npmtest.png)

### 四、总结

本节我们已经安装了Node和NPM，下一节我们讲解如何使用NPM管理包。