class Person {

  age = 0;

  constructor(name) {
    this.name = name;
  }

  // constructor(name, age) {
  //   this.name = name;
  //   this.age = age;
}


let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");


p1.age = 20;

console.log(`${p1.name} tem ${p1.age} anos`);

// console.log(p3);