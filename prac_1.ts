// 여러 타입의 변수를 만들 때 (Union Type)
let member: number | string = 123;

// array object union type
let members: (number | string)[] = [1, " 2", 3];
let object: { a: number | string } = { a: "123" };

// any type 모든 타입의 데이터 허용 => 일반 자바스크립트화 / 타입 관련 버그 캐치할 수 없음
let _name: any;
_name = 123;
_name = true;
_name = [];

// any 유사 unknown type
let name2: unknown;
name2 = 123;
name2 = {};
// unknown 이 any 보다 안전
// let unknown: string = name2; 버그 캐치해서 에러 띄워줌
// unknown 은 수학연산 불가능
// name2 - 1; => error

// any는 에러가 안나지만 unknown은 에러가 난다 => 그래서 안전
let name3: unknown;
// name3 -1; => error
// name3.data; => error

let age: string | number;
// age + 1; => error
// string + 1; 허용
// number + 1; 허용
// string | number + 1; nope!
