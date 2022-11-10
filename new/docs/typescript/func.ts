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