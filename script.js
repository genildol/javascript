class Person {

  age = 0;
  steps = 0;

  constructor(name) {
    this.name = name;
  }

  takeAStep() {

    this.steps++;

  }
  setAge(newAge) {
    if (typeof newAge == 'number') {
      this.age = newAge

    } else {
      console.log("Não é um número");
    }

  }
}

let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");


p1.setAge(35);

console.log(`${p1.name} tem ${p1.age} anos.`);


// p1.takeAStep();
// p2.takeAStep();
// console.log(`Passos de ${p1.name}: ${p1.steps}`);
// console.log(`Passos de ${p2.name}: ${p2.steps}`);