class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  public run() {
    console.log(this.name + "run");
  }
}
export default Person;

function name(params:string = '123') {
  return params;
  
}
function name1 (a = 1) {
  return a;
  

}

const b = name1()

function bbb(){

}
const bb: (a:number, b:number) => number = (a, b) => {
  return a+b;
}


function getLength(n: number): number;
function getLength(n: string): number;
function getLength(n: object):number;
function getLength(n: []): number;
function getLength (n: any): number {
  if(typeof n === 'number'){
    return 0
  }
  if(typeof n === 'string'){
    return n.length;
  }
  return n.length
}