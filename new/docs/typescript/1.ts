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


function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
      const arr = [] as T[K][]
      keys.forEach(item => {
            arr.push(obj[item])
      })
      return arr;
}


const result = getValues({a:"1",b:2}, ['a', 'b'] )

type Condition<T> = T extends string ? string : number
type res = Exclude<string | number | boolean, bigint | number>
interface III {
      name: string,
      age: number
}
const ababa: III = {
      name: "123",
      age: 12
}
type aaaa = keyof III
type a = Exclude<typeof ababa, string>


type ElementOf<T> = T extends Array<infer E> ? E : T;

type avava = ElementOf<string []>
type adada = ElementOf<number []>
type booleanadada = ElementOf<boolean []>
type boolea21nadada = ElementOf<{name: string}>