# JDBC 入门
## JDBC驱动
    * 定义了操作所有关系型数据库的规则(接口)
    * jdbc 本质: 官方定义的一套操作所有关系型数据库的规则, 即接口. 各个数据库厂商区实现这个套接口提供数据库驱动jar包
-----
    * 步骤
        1. 导入驱动jar 包
            1. 复制 jar 包到目录下
            2. add as library
        2. 注册驱动
        3. 获取数据库连接对象 connection  不能直接执行
        4. 定义sql
        5. 获取执行sql语句的对象 statement
        6. 执行sql 接受返回结果
        7. 处理结果
        8. 释放资源
```java
        //  1 导入jar 包
        //  2 注册驱动
        Class.forName("com.mysql.jdbc.Driver");
        // 3. 获取数据库连接对象 connection
        Connection conn =  DriverManager.getConnection("jdbc:mysql://localhost:3306/test","root","root");
        // 4. 定义一个sql 语句
        String sql = "update student set english = 10 where id = 6";
        // 5.  获取执行sql语句的对象 statement
        Statement stmt = conn.createStatement();
        // 6. 执行sql 接受返回结果
        int count = stmt.executeUpdate(sql);
        // 7.  处理结果
        System.out.println(count);
        // 8. 释放资源
        stmt.close();
        conn.close();
```