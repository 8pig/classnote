# interface & type

## 异同
1. 相同点
      - 都可以描述属性或方法
      - 都允许拓展
2. 不同点
      - type 可以声明基本数据类型 联合类型 数组等; interface 只能声明变量
      - type interface 声明同名数据时, type报错, interface 会组合
      - type不会自动合并 interface会