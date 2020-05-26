# 软件
## sass 安装
    1. 首先安装ruby
    2. 安装完成后 ruby -v 会正确显示版本
    3. 安装淘宝镜像
        * gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/
        * gem sources -l 会出现china.org
        * gem install sass 
    4. 安装完毕后执行 sass -v
    
## jdk 配置
# 开发工具
 
 ## webstorm
 
 ### scss 
     1. 先安装ruby
     2. tools -> flie watcher
 ```
 --no-cache --sourcemap=none --update -t compact $FileName$:$FileNameWithoutExtension$.css 
 $FileNameWithoutExtension$.css
 ```