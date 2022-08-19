// type alias 타입 변수 만들기
type AnimalType = string | number | undefined;
let animal: AnimalType = "cat";
// let animal: string | number | undefined;

type HumanType = { name: string; age: number };
let human: HumanType = { name: "John", age: 30 };

// TS는 오브젝트 자료 수정을 막을 수 있음 (readonly)
// 에러 "표시" 일 뿐 실행은 가능
type FriendType = { readonly name: string };
const friend: FriendType = { name: "Paul" };
// friend.name = "Sky"; => read-only property 수정 안됨

// 타입 변수를 union 타입으로 extend
type Name = string;
type Age = number;
type Person = Name | Age;

// 오브젝트 타입 변수는 &연산자로 extend
type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };
