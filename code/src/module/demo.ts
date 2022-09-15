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
