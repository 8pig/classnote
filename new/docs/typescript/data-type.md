---
title: 数据类型

---
## 数据类型
> JavaScript 的类型分为两种：原始数据类型和对象类型。
## 原始数据类型
      1. number
      2. string
      3. boolean
      4. undefined
      5. null
      6. Symbol *
      7. BigInt *


### string
```typescript
const str1: string = 'abc';
let str2 = 'abc'; // 不加类型注解 默认自动推导
// str2 = 123
// str2 = false // 不能将其他类型分配给string
```
### number
```typescript
const num1: number = 12;
let num2 = 3.14; // 不加类型注解 默认自动推导

```
## 对象类型
### 数组
> 数组： 声明变量的一组集合称之为数组 ArrayList
```typescript
export default  {}

const numArr = [1,2,3,4,5]
const strArr: string[] = ['a', 'b', 'c']

interface IPerson {
    name: string;
    age: number
}
const perArr: IPerson[] = [ {name:'zz', age: 19} ]

```

```typescript
export default  {}
// 泛型声明
const a: Array<number> = [1,2,3,4,5]
const b: Array<string> = ['a', 'b', 'c']
const c: Array<IPerson> =  [ {name:'zz', age: 19} ]

```

```typescript
export default  {}
// 联合类型
const a: Array<number | string> = [1,2,3,4,5, 'a']
const strArr: (string | number)[]= ['a', 'b', 'c', 1]
const c: Array<IPerson| number> =  [ {name:'zz', age: 19} , 10]

```
```typescript
export default  {}
// any
const a: Array<any> = [1,2,3,4,5, 'a']
const strArr: any[]= ['a', 'b', 'c', 1]


```

## 枚举
> 枚举表示用于固定的几个取值
1. 性别
2. 月份/星期一 ~ 星期二
## any 
## null
## undefined
## unknown
## never