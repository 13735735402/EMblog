﻿# EMblog
E(Express)
M(Mysql)
blog

前言：
通过一个简单的个人博客项目，进一步了解Express框架和Mysql数据库的使用。通过前端界面设计、数据库设计、后端路由开发介绍了整个项目的开发流程。当然，有兴趣的朋友还可以继续优化这个博客项目，比如添加评论功能，标签分类功能，修改文章功能，文章分页功能，管理员权限功能等。

开发准备：
熟悉html,css,javascript基本操作，了解mysql数据库基本sql语句，Node.js的基础知识，NPM工具的简单使用。

开发流程：
一、前端界面和功能设计
首先：我们大致的将博客项目分为：首页、登录注册页面、文章详情页面、撰写文章页面、关于博客页面、友情链接页面。
我们可以先确定一些公共的页面：为每一个页面添加同样的header footer aside。

二、数据库设计
1、建立用户表user 管理用户的账户和密码；

2、建立文章表 article 管理文章的浏览和撰写。
