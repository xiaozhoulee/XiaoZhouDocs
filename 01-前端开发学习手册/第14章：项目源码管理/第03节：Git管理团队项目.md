# Git管理团队项目 

### 一、团队项目分支管理

在我们创建项目时，会针对不同环境创建三个常设分支：

1. develop：开发环境的稳定分支，公开开发环境基于该分支构建。

2. pre-release：测试环境的稳定分支，测试环境基于该分支构建。

3. master：生产环境的稳定分支，生产环境基于该分支构建。仅用来发布新版本，除了从pre-release或生产环境Bug修复分支进行merge，不接受任何其它修改

平时开发工作中，会根据需要由开发人员创建两类临时分支：
1. 功能（feature）分支：为了开发某个特定的功能，从develop分支上分出来的。开发完成后，要merge（合并）到develop分支，功能分支的名，可以采用feature-（功能名）的形式命名。

2. BUG修复（fixbug）分支：为了修复某个bug，从常设分支上面分出来的。修复完成后，再merge到对应的分支。Bug修复分支的命名，可以采用fixbug-（bug单号）的形式命名。

### 二、流程规范
1.  从develop分支切出一个新分支，根据是功能还是bug，命名为feature-* 或 fixbug-*。

2. 开发者完成开发，提交分支到远程仓库。

3. 开发者发起merge（合并）请求，将新分支请求merge到develop分支。
4. 转测时，直接从当前develop分支merge（合并）到pre-release分支，重新构建测试环境完成转测。
5. 测试完成后，从pre-release分支merge（合并）到master分支，基于master分支构建生产环境完成上线。
流程图示如下
![示例图片](../images/1102_Flowchart.png)