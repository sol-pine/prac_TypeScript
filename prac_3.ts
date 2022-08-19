// * type narrowing
// typeof 변수 , 속성 in 오브젝트 , 인스턴스 instanceof 부모

// 타입이 하나로 확정되지 않았을 땐 조건문으로 타입 확정
// if 조건문을 썼으면 끝까지 쓰기 (else, else if)
function a(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

function b(x: number | string) {
  let arr: number[] = [];
  let arr2: string[] = [];
  if (typeof x === "number") {
    arr[0] = x;
  } else {
    arr2[0] = x;
  }
}

// * type assertion 덮어쓰기
// narrowing 할 때 쓴다 (단순 타입 변경 x)
// 어떤 타입이 들어올 지 확실할 때 쓴다 (버그 추적 안됨)
function c(x: number | string) {
  let arr: number[] = [];
  arr[0] = x as number;
}

// [예제] 클리닝함수
function 클리닝함수(a: (number | string)[]) {
  let 클리닝완료: number[] = [];
  a.forEach((b) => {
    if (typeof b === "string") {
      클리닝완료.push(parseFloat(b));
    } else {
      클리닝완료.push(b);
    }
  });
  return 클리닝완료;
}
console.log(클리닝함수([123, "4"]));
