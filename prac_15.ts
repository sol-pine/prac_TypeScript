// generics
function 함수(x: unknown[]) {
  return x[0];
}
let a = 함수([4, 2]); // a 는 unknown type
console.log(a + 1); // 이기 때문에 연산 안됨 => narrowing을 하거나 generic 함수

// generic 함수로 해결(파라미터로 타입 지정)
function 함수<MyType>(x: MyType[]): MyType {
  return x[0];
}
let a = 함수<number>([4, 2]); // a 는 number type
let b = 함수<string>(["4", "2"]); // b 는 string type

// 파라미터에 타입 제한
function 함수<MyType extends number>(x: MyType) {
  // MyType 이 number 타입인지 체크 (narrowing과 유사)
  return x - 1;
}
let a = 함수<number>(100);

// alias type, interface 도 extends 로 타입 제한 가능
interface Animal {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function 함수<Type>(x: string): Type {
  return JSON.parse(x);
}
let result = 함수<Animal>(data);
console.log(result);
