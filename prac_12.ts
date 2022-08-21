// never type => void로 대체 가능
// 리턴 값이 없어야 함
// endpoint가 없어야 함

function 함수(): never {
  throw new Error(); // 코드 실행 중단
}

function 함수2(): never {
  while (true) {} // 무한 실행
}

// narrowing 이상하면
function never(parameter: string) {
  if (typeof parameter === "string") {
    console.log(parameter);
  } else {
    console.log(parameter); // never
  }
}

// 함수 표현식 return 값이 없으면
let c = function () {
  throw new Error(); // never
};
