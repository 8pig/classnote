# 函数

# ## 函数定义

1. 匿名函数

```typescript
const fn1 = function (m: number, n: number) {
      return m + n;
}

```

2. 命名函数

```typescript
function fn2 (m: number, n: number) {
      return m + n;
}

```

3. 箭头函数

```typescript
function fn2 (m: number, n: number) {
      return m + n;
}

```

## 函数接口

```typescript

export {}

interface IMoney {
      (salary: number, reward: number): number;
}

const mySalary: IMoney = (salary, reward) => {
      return salary+reward

}
const mySalary2: IMoney = function (a, b) {
      return a + b;

}
mySalary2(1,2);
```

## 函数重载

>  函数名相同 入参不同 返回值可以相同也可以不同

```typescript
function isMe(age: number): void;
function isMe(name: string): void;


```
