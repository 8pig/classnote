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

## any

> any表示任意类型，当我们不清楚某个值的具体类型的时候我们就可以使用any
> 
> 定义为 any 类型的变量允许被赋值为任意类型
> 
> 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型;不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查

1. 变量的值动态改变, 比如用户的输入
2. 改写 重构现有代码， any 任意值允许在编译时可选的包含或移除类型检查
    - 有风险
3. 定义存储各种类型的数据 对象/数组

> 如果使用any  那么访问一个对象的属性或者方法时没有类型检查与提示
> 换句话说 使用any 就是在写普通的JavaScript


## object 类型
> 表示一个对象
> 定义了一个只能保存对象的变量




## void类型

> 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。

> 当一个函数没有返回值时，你通常会见到其返回值类型是 void / 在TS中只有null和undefined可以赋值给void类型
> 如果 null赋值报错 请检查tsconfig "strict": true, 严格模式下不允许赋值null

```javascript
function add(): void {
    // return 'a'   error
    // do smt
}
```

## 枚举
> 枚举表示用于固定的几个取值
1. 性别
2. 月份/星期一 ~ 星期二

## null && undefined
TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：

> 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。

>然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。 再次说明，稍后我们会介绍联合类型。




## unknown
## never
#### 实际开发中很少碰到， 只需要记住在抛出异常的时候可以使用never
>never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

>never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

下面是一些返回never类型的函数：
```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```