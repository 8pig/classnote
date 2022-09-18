1. npm init
2. 安装 typescript
   1. 全局 cnpm install typescript -g
   2. 本地 cnpm i typescript -D
   3. yarn global add  typescript
3. 生成tsconfig
   1. tsc --init
4. tsconfig
   1. outDir: ./dist 编译后保存目录
   2. rootDir 编写的ts源文件所在目录
5. 运行tsc 编译
6. 安装 ts-node
   1. ts-node 直接运行ts代码  它是nodejs 包装
   2. yarn global add ts-node
7. nodemon
   1. 代码变化后可实时更新运行程序
   2. yarn global add nodemon / npm i nodemon -D
8. Parcel打包支持浏览器运行ts文件
   1. npm install parcel-bundler --save-dev
   2. start: parcel ./index.html