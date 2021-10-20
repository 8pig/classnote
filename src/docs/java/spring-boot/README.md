# 1. SpringBoot整合MybatisPlus

## 1.1 准备数据库脚本

~~~sql
DROP TABLE IF EXISTS user;

CREATE TABLE user
(
	id BIGINT(20) NOT NULL COMMENT '主键ID',
	name VARCHAR(30) NULL DEFAULT NULL COMMENT '姓名',
	age INT(11) NULL DEFAULT NULL COMMENT '年龄',
	email VARCHAR(50) NULL DEFAULT NULL COMMENT '邮箱',
	PRIMARY KEY (id)
);

INSERT INTO user (id, name, age, email) VALUES
(1, 'Jone', 18, 'test1@mszlu.com'),
(2, 'Jack', 20, 'test2@mszlu.com'),
(3, 'Tom', 28, 'test3@mszlu.com'),
(4, 'Sandy', 21, 'test4@mszlu.com'),
(5, 'Billie', 24, 'test5@mszlu.com');



~~~

```properties
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.url=jdbc:mysql://localhost:8889/springboot04?useUnicode=true&characterEncoding=UTF-8&serverTimeZone=UTC

## sql init 2.5.0 change into this file
spring.sql.init.schema-locations=classpath*:sql/*.sql
spring.sql.init.data-locations=classpath*:sql/data/*.sql

```

## 1.2 新建SpringBoot工程

~~~xml
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>


        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>


        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.4.3</version>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
    </dependencies>
~~~



## 1.3是

# 2. SpringBoot整合Redis



# 3. SpringBoot整合RocketMQ



# 4. SpringBoot整合ES



# 5. SpringBoot整合SpringSecurity

## 5.1 导入依赖

~~~xml
 <dependency>
            <groupId>org.springframework.boot</groupId>	
            <artifactId>spring-boot-starter-security</artifactId>
 </dependency>
~~~

## 5.2 数据库准备



## 5.3 代码

整合有两种方式

### 5.3.1 UserDetailService

