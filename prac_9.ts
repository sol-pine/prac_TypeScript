// interface로 object 타입 지정

// type SquareType = { color: string; width: number };
interface SquareType {
  color: string;
  width: number;
}

let square: SquareType = { color: "blue", width: 100 };

// interface는 extends 가능
interface StudentType {
  name: string;
}
interface TeacherType extends StudentType {
  // name: string;
  age: number;
}

let student: StudentType = { name: "Kim" };
let teacher: TeacherType = { name: "Kim", age: 20 };

// type는 intersection type(&) 쓰면 가능
// interface도 & 사용
type AnimalType = { name: string };
type CatType = { age: number } & AnimalType;

// interface는 중복 선언 가능 (type은 안됨)
interface Student {
  name: string;
}
interface Student {
  score: number;
}
let student: Student = { name: "Park", score: 80 };
