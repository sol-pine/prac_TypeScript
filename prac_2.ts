// 함수에 타입 지정

// 파라미터(변수) 타입 지정하지 않으면 default type 은 any
// 타입이 지정된 파라미터는 옵션이 아닌 필수
function n(x: number): number {
  return x * 2;
}
// 파라미터를 옵션으로 하고 싶을 때는
// 파라미터?: number = 파라미터: number | undefined
// 오브젝트도 마찬가지 {age?: number}
function option(x?: number): number {
  return x * 2;
}

// 함수 void 사용 => return 안할 때
function v(x: number): void {
  1 + 1;
}
