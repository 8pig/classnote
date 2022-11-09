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
