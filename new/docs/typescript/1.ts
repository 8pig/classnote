type sum2num1 = (n1: number, n2: number) => number;

const fn1: sum2num1 = (n1, n2) => n1 + n2;

const fn2: sum2num1 = function (n1, n2) {
      return n1 + n2
}





function say(a: number, b: number) {

}
function say1 ({a,b}: {a: string, b: string}){
      console.log(a, b);

}


const fn3:(a:number, b?: number) => number = (a, b) => {

      return a + (<number> b);
}
// fn1(1,2);

type fn = (o: any, k: any) => any
const getProperty=  <T, K extends keyof T>(o:T ,k: K): T[K] => {
     
      return o[k]
}

const obj = { age: 12, get:() => {}, name: new Map()}
const a = getProperty(obj, 'name')

