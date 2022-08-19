// 함수 type alias 지정
type FunctionType = (a: string) => number;
// 함수 type alias 사용 시엔 함수 표현식으로만 사용
let test: FunctionType = function (a) {
  return 10;
};

// methods 내 타입 지정
type MemberType = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let user: MemberType = {
  name: "Kim",
  age: 20,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("hey");
  },
};
user.plusOne(10);
user.changeName();

// phone number practice
function cutZero(x: string): string {
  let result = x.replace("0", "");
  return result;
}
function removeDash(x: string): number {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
}

function phone(x, func1, func2) {
  let result = cutZero(x);
  let _result = removeDash(result);
  console.log(_result);
}
phone("010-1234-1234", cutZero, removeDash);
