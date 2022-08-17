// TS 기본 문법

let first_name: string = "kim"; // 변수에 타입 지정
// 타입 : string, number, boolean, null, undefined, bigint, [], {}, etc..
let name_array: string[] = ["kim", "park"]; // array 내의 타입 지정
let name_object: { name?: string } = { name: "kim" }; // object 는 object 랑 같은 모양으로 타입 지정

let union_type: string | number = "kim"; // 다양한 타입이 들어올 수 있게 하는 union type

type Type = string | number; // 타입은 변수에 담아서 사용 가능
let type_alias: Type = 123; // (타입변수는 대문자로 지정해서 일반 변수와 구분)

// 아래 함수는 파라미터로 number, return 값으로 number
// return 값 타입 지정은 (파라미터): type
function 함수(x: number): number {
  return x * 2;
}

// tuple 타입 (Member 타입은 0은 number, 1은 boolean)
type Member = [number, boolean];
let john: Member = [123, true];

// type MemberObject = { name: string };
type MemberObject = { [key: string]: string }; // object 타입을 지정해야할 속성이 많다면
// string으로 된 모든 object 속성의 타입은 string으로
let tom: MemberObject = { name: "kim" };

// class 타입 지정
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
