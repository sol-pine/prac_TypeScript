// public & private

// public : 인스턴스에 새로운 값을 부여할 때 사용, 생략 가능(default)
// private : 인스턴스 필드 수정 안됨, class {} 안에서만 수정 및 사용 가능
class User {
  name: string;
  private familyName: string = "Park"; // familyName 변경 방지
  constructor(a) {
    this.name = a + this.familyName;
  }
  changeName() {
    this.familyName = "Kim"; // class 내에 변경 함수 만들어서 private 값 변경
  }
}
let user1 = new User("John");
user1.changeName();
console.log(user1);

class Person {
  constructor(public name) {
    // public 파라미터 = 인스턴스의 속성
    // this.name = "Kim";
  }
}

let kid = new Person("Kim");
console.log(kid); // {name: "Kim"}
