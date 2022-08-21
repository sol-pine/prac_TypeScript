// narrowing

// null 이나 undefined 타입 체크할 때 && 연산자 사용
// function 함수(a: string | undefined){
//     if(typeof a === 'string'){

//     } else {

//     }
// }
// 또는
function a(a: string | undefined) {
  if (a && typeof a === "string") {
    // a 가 undefined 면 실행 안함
    // a 가 string 이면 실행
  }
}

// object narrowing 은 in 키워드 사용
type Fish = { swim: string };
type Bird = { fly: string };

function b(animal: Fish | Bird) {
  // 서로 다른 속성을 가지고 있는 오브젝트는 in 키워드로 구분
  if ("swim" in animal) {
    animal.swim;
  }
}

// instanceof 연산자로 object narrowing
let date = new Date();
if (date instanceof Date) {
}

// 비슷한 타입을 가진 object면 literal type만들기
type Car = {
  wheel: "4";
  color: string;
};
type Bike = {
  wheel: "2";
  color: string;
};
function c(x: Car | Bike) {
  if (x.wheel === "4") {
    console.log("x는 Car");
  }
}
