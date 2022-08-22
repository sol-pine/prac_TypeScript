// d.ts
// 1. 타입 저장 파일
// 2. 모든 타입을 정리해놓은 레퍼런스용 파일
// tsconfig.json => "declaration" : true (ts 파일 별 d.ts 파일 자동 생성)
// 3. 글로벌 모듈 아님
// tsconfig.json => "typeRoots" : ["./types"] (글로벌 모듈로 변경)

export type Age = number;
export interface Person {
  name: string;
  age: number;
}

// import { Age } from "./prac_18.d";
// let age: Age;
