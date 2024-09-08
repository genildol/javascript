class Person {

  _age = 0;
  steps = 0;

  // Primeira parte
  // constructor(name) {
  //   this.name = name;
  // }


  // Segunda parte

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  takeAStep() {

    this.steps++;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get age() {
    return this._age;
  }

}


let p1 = new Person("João", "Silva");
let p2 = new Person("Maria", "Leite");
let p3 = new Person("Pedro", "Duarte");



console.log(`${p1.fullName} tem ${p1.age} anos.`);


