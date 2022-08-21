// rest parameter 타입 지정
function rest(...x: (number | string)[]) {
  console.log(x);
}
rest(1, 2, 3, "4");

// parameter destructuring 타입 지정
let person = { student: true, age: 20 };
type UserType = { student: boolean; age: number };

function test({ student, age }: UserType): void {
  console.log(student, age);
}
test(person);

// practice
type ArrayType = (number | string | boolean)[];

function abc([a, b, c]: ArrayType) {
  console.log(a, b, c);
}
abc([40, "wine", false]);
