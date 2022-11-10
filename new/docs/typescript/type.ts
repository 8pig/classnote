// type fn1 = (n: number, m: number) => number;

// let fn2: fn1 = (n: number, m: number) => {
//       return n + m;

// }

// const makeMoney = function(m, n) {
//       return m + m

// }

const fn1 = function (m: number, n: number): number {
      return m + n;
}

function fn2 (m: number, n: number) {
      return m + n;
}

const fn3 = (m: number, n: string): void => {
      console.log(`${m} + ${n}`);
}