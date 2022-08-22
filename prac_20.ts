// object type mapping

type Car = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
  // keyof MyType => 'color' | 'model' | 'price'
};

type NewType = TypeChanger<Car>;

// 타입 조건식, 삼항연산자로

type Age<T> = T extends string ? string : unknown;
let a: Age<string>;
let unknown: Age<number>;

// 조건문에서 쓰는 infer

type Person<T> = T extends infer R ? R : unknown;
// infer R 왼쪽에서 타입 뽑아서 R 변수에 담음

type 타입추출<T> = T extends (infer R)[] ? R : unknown;
type a = 타입추출<string[]>;
// array 내부의 타입 추출

type 함수타입추출<T> = T extends () => infer R ? R : unknown;
type a = 함수타입추출<() => void>;
// 함수의 return 타입 추출
// 이것보다 유용하고 실용적인 건
type b = ReturnType<() => void>;
