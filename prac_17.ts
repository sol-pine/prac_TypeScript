// ts 파일은 ambient 모듈 (전역 변수)

export {}; // export 키워드를 하나 추가하면 이 파일은 로컬 모듈

let a = 10;

declare global {
  // 로컬 모듈에서 글로벌 변수
  type DogType = string;
}
