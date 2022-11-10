
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
