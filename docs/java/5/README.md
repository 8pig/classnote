# Servlet

----------

## 快速入门
	1. 创建web项目  在src下创建class 在web目录下 重写方法
	2. service 方法  提供服务的方法
## 配置servlet
	`web.xml`

```java
<servlet>
    <servlet-name>demo1</servlet-name>
    <servlet-class>cn.zzweb.servlet.Servlet_Demo1</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>demo1</servlet-name>
    <url-pattern>/demo1</url-pattern>
</servlet-mapping>
```
