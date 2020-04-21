# 总结
---
## foreach map filter 区别
## promise 怎么捕获异常
## 数组去重
## new 一个对象的时候发生了什么
## 从输入网址到浏览器显示
## http 状态码
## 深拷贝浅拷贝
## addEventListener的第三个参数 都有什么代表什么
## 说下浏览器的缓存机制
:::tip
浏览器的缓存机制可分为强缓存和协商缓存，服务端可以在响应头中增加Cache-Control/Expires来为当前资源设置缓存有效期(Cache-Control的max-age的优先级高于Expires)，浏览器再次发送请求时，会先判断缓存是否过期，如果未过期则命中强缓存，直接使用浏览器的本地缓存资源，如果已过期则使用协商缓存，协商缓存大致有以下两种方案：
(1) 唯一标识：Etag(服务端响应携带) & If-None-Match(客户端请求携带)；
(2) 最后修改时间： Last-Modified(服务端响应携带) & If-Modified-Since (客户端请求携带) ，其优先级低于Etag。
服务端判断值是否一致，如果一致，则直接返回304通知浏览器使用本地缓存，如果不一致则返回新的资源。
:::

## GET和POST的区别
::: tip
(1) GET请求在浏览器回退和刷新时是无害的，而POST请求会告知用户数据会被重新提交；
(2) GET请求可以收藏为书签，POST请求不可以收藏为书签；
(3) GET请求可以被缓存，POST请求不可以被缓存，除非在响应头中包含合适的Cache-Control/Expires字段，但是不建议缓存POST请求，其不满足幂等性，每次调用都会对服务器资源造成影响；
(4) GET请求一般不具有请求体，因此只能进行url编码，而POST请求支持多种编码方式。
(5) GET请求的参数可以被保留在浏览器的历史中，POST请求不会被保留；
(6) GET请求因为是向URL添加数据，不同的浏览器厂商，代理服务器，web服务器都可能会有自己的长度限制，而POST请求无长度限制；
(7) GET请求只允许ASCII字符，POST请求无限制，支持二进制数据；
(8) GET请求的安全性较差，数据被暴露在浏览器的URL中，所以不能用来传递敏感信息，POST请求的安全性较好，数据不会暴露在URL中；
(9) GET请求具有幂等性(多次请求不会对资源造成影响)，POST请求不幂等；
(10) GET请求一般不具有请求体，请求中一般不包含100-continue 协议，所以只会发一次请求，而POST请求在发送数据到服务端之前允许双方"握手"，客户端先发送Expect:100-continue消息，询问服务端是否愿意接收数据，接收到服务端正确的100-continue应答后才会将请求体发送给服务端，服务端再响应200返回数据。
:::
##  跨标签页的通讯方式有哪些
::: tip
- BroadCast Channel
- Service Worker
- LocalStorage + window.onstorage监听
- Shared Worker + 定时器轮询(setInterval)
- IndexedDB + 定时器轮询(setInterval)
- cookie + 定时器轮询(setInterval)
- window.open + window.postMessage
- Websocket
:::
## delete 数组的itemm 数组的length 是否会-1
::: tip
    不会， 因为delete删除的是对象的属性  key 还会在
:::
## 前端性能优化
::: tip
    1. 减少请求资源大小或者次数　
        - 减少并发和css js 包体大小， 雪碧图
    2. 服务端开启gzip
    3. 代码优化
        - 减少闭包
        - 卸载事件监听 关闭订阅 定时器
        - css 和 js 加载
    4. vue框架
        - 懒加载路由
        - 打包分片
        - 缓存路由
        - 公共库cdn
:::