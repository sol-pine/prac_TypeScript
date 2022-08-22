// protected : class 카피하면서 private 처럼 범위를 설정하고 싶을 때
class User {
  private x = 10; // private 은 class {} 내에서만 사용 가능
  protected y = 10; // protected 는 class {} & extends class {} 내에서 사용 가능
}

class NewUser extends User {
  doThis() {
    // this.x = 20;
    this.y = 20;
  }
}

// static : 인스턴스에 상속 안되는 속성, 인스턴스가 사용할 필요가 없는 변수들 관리
// private / static / public + static 함께 사용 가능
class User {
  static x = 10;
  y = 20;
}
let son = new User();
console.log(User.x);

// static practice
class User {
  static skill = "JS";
  intro = User.skill + "전문가입니다";
}
let John = new User();
console.log(John);
User.skill = "TS"; // 여기서부터는 TS 전문가입니다
let Mike = new User();
console.log(Mike);

// static practice
class Sum {
  private static x = 10;
  public static y = 20;
  static addOne(a: number) {
    Sum.x += a;
  }
  static printX() {
    console.log(Sum.x);
  }
}
Sum.addOne(3); //이렇게 하면 x가 3 더해져야함
Sum.addOne(4); //이렇게 하면 x가 4 더해져야함
Sum.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
