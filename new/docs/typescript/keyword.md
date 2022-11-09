
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

## 接口

1. 什么是接口？

接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现， 然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法


2. 格式

```typescript
interface IPerson {
      name: string;
      age: string
}
```

### 可选属性与只读属性

- 可选属性使用：？

- 只读属性使用：readonly

- readonly与const的区别：做为变量使用的话用 const，若做为属性则使用readonly
- 当使用可选属性 默认值包含undefined


```typescript
interface IFullName {
      first: string;
      last?: string;
      readonly age: number ;
}

const my1: IFullName = {first: 'z', last: 'z', age: 12  }
my1.first = 'defineConfig'; 
```

### 索引签名

- 索引签名用于 描述 通过索引得到的类型
- 格式[ props: string]: any;
- 解决参数不定问题
> 接口定义后  那么变量实现接口的成员就必须一致,多一个少一个不可以, 实际开发中往往会出现多成员 少成员的情况

1. 可选属性 
   
```typescript
interface IFull {
      name?: string;
}
```

2. 变量 不推荐
   
```typescript
interface IFullName {
      first: string;
      last?: string;
      readonly age: number ;
}

let my1: IFullName = { first: 'z', last: 'z', age: 12  }
my1.first = 'defineConfig';

// my1.ot = 123;
const info = { first: 'z', last: 'z', age: 12, ot: 123  }
my1 = info;
   ```

3. 类型断言
```typescript

interface IFullName {
      first: string;
      last?: string;
      readonly age: number ;
}

let my1: IFullName = { first: 'z', last: 'z', age: 12  }
my1.first = 'defineConfig';

// my1.ot = 123;
const info = { first: 'z', last: 'z', age: 12, ot: 123  }
my1 = info;


let my2: IFullName = { first: 'z', last: 'z', age: 12, ot: 123  } as IFullName
```

4. 索引签名

```typescript

interface IFullName1 {
      first: string;
      last?: string;
      readonly age: number ;
      [props: string]: any;
}

let my3: IFullName1 = { first: 'z', last: 'z', age: 12, ot: 123  }
```