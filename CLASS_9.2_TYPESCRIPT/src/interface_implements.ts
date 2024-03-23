interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee implements Person{
  name:string;
  age:number;
  constructor(n:string,a:number){
    this.name = n;
    this.age = a;
  }

  greet(phase:string){
    console.log(`${phase} ${this.name}`);
  }
}

const e = new Employee("Navneet",25);
console.log(typeof e);
console.log(e.name);
e.greet("Good morning!");


