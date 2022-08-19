// Literal Types
// type 을 더 엄격하게 관리하거나 자동완성 이용 가능
let favorite: "nike" | "blue" | "pizza";

function say(a: "hello"): 1 | 0 {
  return 1;
}

// 예제
function game(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}
game("가위");

// as const의 효능
// 1. object value 값을 타입 지정
// 2. object 의 모든 속성을 readonly로 지정 (속셩 변경 X)
let user = { name: "Kim" } as const;
// user.name => "Kim"

function test(a: "Kim") {}
// 함수의 파라미터에 타입을 지정하면
// "Kim" 이라는 타입만 파라미터에 들어올 수 있다는 뜻 ("Kim"이라는 자료만 들어올 수 있다 X)
test(user.name);
