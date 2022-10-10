
## 类型断言
> 变量 as string  
>  (<类型>变量)
### 类型别名




```javascript
type nameList = 'zz' | 'tom' | 'tiger'

type add = (n1: number, n2:number) => number;
const addSum: add = (n1, n2) => {
      return n1 + n2;
}
type Person = {
      name: string,
      age:  number
}
const zz: Person = { name: 'zz', age: 18}

type sum2num1 = (n1: number, n2: number) => number;

const fn1: sum2num1 = (n1, n2) => n1 + n2;

const fn2: sum2num1 = function (n1, n2) {
      return n1 + n2
}



```

### 接口

1. 什么是接口？

接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现， 然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法


2. 格式

```JavaScript
interface IPerson {
      name: string;
      age: string
}
```

### 可选属性与只读属性

- 可选属性使用：？

- 只读属性使用：readonly

- readonly与const的区别：做为变量使用的话用 const，若做为属性则使用readonly


