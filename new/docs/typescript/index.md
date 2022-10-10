## 类型系统
类型系统
从 TypeScript 的名字就可以看出来，「类型」是其最核心的特性。

我们知道，JavaScript 是一门非常灵活的编程语言：

它没有类型约束，一个变量可能初始化时是字符串，过一会儿又被赋值为数字。
由于隐式类型转换的存在，有的变量的类型很难在运行前就确定。
基于原型的面向对象编程，使得原型上的属性或方法可以在运行时被修改。
函数是 JavaScript 中的一等公民，可以赋值给变量，也可以当作参数或返回值。
这种灵活性就像一把双刃剑，一方面使得 JavaScript 蓬勃发展，无所不能，从 2013 年开始就一直蝉联最普遍使用的编程语言排行榜冠军[3]；另一方面也使得它的代码质量参差不齐，维护成本高，运行时错误多。

而 TypeScript 的类型系统，在很大程度上弥补了 JavaScript 的缺点。

## 静态类型语言 && 动态类型语言

> 静态类型语言：在编译阶段确定所有变量的类型

> 动态类型语言：在执行阶段确定所有变量的类型

```javascript
function Sum2 (a, b) {
      return a + b;
}

const getOrderById = (id, orderList) => {
      return orderList.filter(item => item.id === id);
}
// js编译器无法获知入参的类型与成员， 只有在执行的时候 根据实参才确定
```


```cpp
class C {
      public:
          int x;
          int y;
}

int add(C a, C b) {
      return a.x + a.y + b.x + b.y;
}

```
