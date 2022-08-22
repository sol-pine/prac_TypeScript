// object index signatures

// interface StringOnly {
//   name: string;
//   age: string;
//   location: string;
// }

interface UserType {
  age: number;
  location: "Seoul"; // 리터럴 타입 가능
  [key: string]: string | number;
}

let user: UserType = {
  name: "John",
  age: 20,
  location: "Seoul",
};

// recursive
interface MyType {
  "font-size": MyType | number;
}

let css: MyType = {
  "font-size": {
    "font-size": {
      "font-size": 13,
    },
  },
};
