
# 接口

1. 什么是接口？

接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现， 然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法


2. 格式

```typescript
interface IPerson {
      name: string;
      age: string
}
```

## 可选属性与只读属性

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

## 索引签名

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


## 接口的继承
1. 接口继承就是说接口可以通过其他接口来扩展自己。

2. Typescript 允许接口继承多个接口。

3. 继承使用关键字 extends。

```typescript
// 单继承

interface IAge {
      age: number;
}

interface IName extends IAge {
      name: string;
}

const lady1: IName = {
      age: 12,
      name: 'zz'
}

```

```typescript
// 多继承

interface IAge {
      age: number;
}

interface IName extends IAge {
      name: string;
}

const lady1: IName = {
      age: 12,
      name: 'zz'
}

```

## 接口的混合类型

```typescript     

interface ICounter {
      (start: number): string;
      interval: number;
      reset(): void;
}

function getCounter (): ICounter {
      const counter = <ICounter>function (start: number){};
      counter.interval = 1;
      counter.reset = () => {}

      return counter;

}
const c = getCounter();
c.interval = 2;
c.reset();



```