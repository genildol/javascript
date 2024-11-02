class Person {
  _age = 0;
  steps = 0;

  constructor(name) {
    this.name = name;
  }

  takeAStep() {
    this.steps++;

  }
  get age() {
    return this._age;
  }


}

let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.age = 20;

console.log(`${p1.name} tem ${p1.age} anos.`);


