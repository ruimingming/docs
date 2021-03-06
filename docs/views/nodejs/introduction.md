---
title: 什么是NodeJS
---
# 什么是NodeJS

1. node.js是一个构建在Chrome JavaScript运行环境的平台，这是很重要的一点，**node.js并不是一门语言，而是一个平台**
2. node.js致力于使构建速度快、稳定的网络程序更简单
3. node.js具有事件驱动和非阻塞I/O的特色，使之轻量级并且高效率
4. node.js非常适合在分布式设备运行数据密集型实时应用程序

**服务器端运行的JavaScript？**

Chrome JavaScript runtime也就是我们常说的 Chrome的V8 JavaScript Engine，也就是Goole开发的一个用于Chrome浏览器的底层JavaScript引擎，用于解析JavaScript语句创建其运行环境，保证我们写的语句在浏览器上的表现和我们预期的一致。

那么为什么说node.js是服务器端运行的JavaScript？好好地nodejs干嘛要和V8扯上关系？除了Google搞的V8解释JavaScript十分的快，十分重要的一个原因是V8 JavaScript 引擎并不仅限于在浏览器中运行，可以嵌入任何应用程序中运行。Node.js 和.net framework类似是一个平台（这里有些搞不明白，望大神们指点一二），但它没有像.net一样创造了一门语言——C##在这个平台上运行，而是很巧妙的借用了web开发人员已经非常熟悉的JavaScript语法，使用V8引擎来解析语句，并将其重建可在服务器上使用。所以严格上说node.js并不是服务器端运行的Javascript，而是可以在服务器端运行JavaScript语法的平台。