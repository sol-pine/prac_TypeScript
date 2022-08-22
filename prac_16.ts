// tuple type 타입 위치 지정

// let paw: (string | boolean)[] = ["dog", true];
// 옵셔널 체이닝은 뒤에서부터 (타입 위치 때문)
let paw: [string, boolean?] = ["dog", true];

// function 함수(...x: number | string[]) {
//   console.log(x);
// }
// rest parameter에도 tuple type 적용
function 함수(...x: [number, string]) {
  console.log(x);
}

// spread operator 타입 지정
let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];
