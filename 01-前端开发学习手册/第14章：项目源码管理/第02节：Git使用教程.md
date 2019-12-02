# Git使用教程

### 一、Git简介

Git是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。 Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。

### 二、Git的安装

 在Windows上使用Git，可以从[Git官网](https://git-scm.com/download/win)直接下载安装程序，然后按默认选项安装即可。

安装完成后，在开始菜单里找到“Git”->“Git Bash”，蹦出一个类似命令行窗口的东西，就说明Git安装成功！

### 二、同步远程仓库的基本命令
1. 创建一个空的远程仓库：登录github =》 new repository
2. 初始化本地仓库
3. 编辑文件
4. 鼠标右键打开Git Bash
5. 初始化git本地仓库：git init  
6. 编辑区添加到暂存区：git add .
7. 暂存区提交到分支：git commit -m "备注"
8. 同步远程仓库：git push -u origin master
9. 创建远程主机名：git remote
10. 克隆项目：git clone url(你要克隆项目的链接)
11. 拉取项目代码: git pull

### 三、团队协作

1. 项目拥有者进入项目的settings选项 =》 Collaborators =》 添加项目成员
2. 给成员发送邀请链接，程序需要确认。此后项目成员可以使用自己的用户名和密码同步此项目。
3. 在开发web项目的过程中，每个成员需要创建一个自己的分支，在自己分支上开发，没有问题在合并到master分支。

### 四、分支管理

1. 查看分支:git branch，默认只有master分支
2. 创建分支 git branch teacher，创建teacher分支
3. 切换分支：git checkout teacher 
4. 在自己分支上修改文件并提交。
5. 合并分支：切换至master分支，git merge dev
6. 本地分支推送至远程分支:git push origin feature-branch:feature-branch
7. 远程分支拉倒本地：git checkout -b feature-branch origin/feature-branch

### 五、切换版本

1. 查看历史记录：git log
2. 恢复版本：git reset --hard <版本号>，版本号写前几位就可以
3. 查看命令记录：git reflog

