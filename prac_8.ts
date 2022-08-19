// TypeScript constructor()

class Person {
  name: string;
  constructor(a: string) {
    this.name = a;
  }
  say(a: string) {
    console.log("hi" + a);
  }
}

let human1 = new Person("Kim");
let human2 = new Person("Bob");

// practice 1
class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }
  tax(): number {
    return this.price * 0.1;
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1); // { model : '소나타', price : 3000 }
console.log(car1.tax()); // 300

// practice 2
class Word {
  num: number[];
  str: string[];

  constructor(...param) {
    let numbers: number[] = [];
    let strings: string[] = [];

    param.forEach((x) => {
      if (typeof x === "number") {
        numbers.push(x);
      } else if (typeof x === "string") {
        strings.push(x);
      }
    });

    this.num = numbers;
    this.str = strings;
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); // [3,5]
console.log(obj.str); // ['kim', 'park']
