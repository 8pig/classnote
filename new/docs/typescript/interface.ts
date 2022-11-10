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

interface IFullName1 {
      first: string;
      last?: string;
      readonly age: number ;
      [props: string]: any;
}

let my3: IFullName1 = { first: 'z', last: 'z', age: 12, ot: 123  }


interface IArr {
      [index: number]: string;
}

const arr1: IArr = ["1", "2", "3"]

// interface IAge {
//       age: number;
// }

// interface IName extends IAge {
//       name: string;
// }

// const lady1: IName = {
//       age: 12,
//       name: 'zz'
// }


interface IAge {
      age: number;
      // name: number; 相同属性必须类型一致
}

interface IName {
      name: string;
}
interface IPerson extends IAge, IName {
      sex: 1 | 2
}
const lady1: IPerson = {
      age: 12,
      name: 'zz',
      sex: 1
}


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