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
## 运行原理
	**http://localhost:8080/day13_tomcat/demo1**
`通过ip地址端口号可以找到主机, 通过day13_tomcat 找到项目,  然后再找到资源名称demo1, 在找到xml中urlpattern 有没有demo1,找到之后再找到servlet-name, 对应到servlet 标签下的demo1名称, 之后匹配servlet-calss cn.zzweb.servlet.Servlet_Demo1, 这是一个全类名, 反射, tomcat将全类名对应的字节码文件加载进内存, 创建它的对象class.forName(); clas.newInstace 调用service方法,因为我们复写了service 方法,所以一定会调用执行 ` 


----------

	1. 当服务器接收到客户端浏览器的请求后 会解析请求URL路径, 获取访问Servlet的资源路径
	2. 查找web.xml文件  查找是否有对应的 url-parttern 标签体内容
	3. 如果有 则找到对应的 Servlet-class 标签里全类名
	4. tomcat 会将对应的字节码文件 加载进内存 并且创建对象
	5. 调用其方法