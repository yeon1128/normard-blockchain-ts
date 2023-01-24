// 📍 class
abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}
// new User() // error ⭕️
class Player extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.firstName} ${this.lastName}`;
  }
}

// 📍 interface
interface User2 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
interface Human {
  health: number;
}
class Player2 implements User2, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.firstName} ${this.lastName}`;
  }
}
// function makeUser(user: User2) {
//   return "hi";
// }
function makeUser(user: User2): User2 {
  // new User() ❌
  return {
    firstName: "nico",
    lastName: "co",
    sayHi: (name) => `${name}`,
    fullName: () => "xxx",
  };
}
makeUser({
  firstName: "nico",
  lastName: "co",
  sayHi: (name) => `${name}`,
  fullName: () => "xxx",
});
// ✏️ 추상 class 대신 interface로 class 만들기
// - 장점: 파일 용량을 줄일 수 있음
// interface는 타입 스크립트만의 문법이어서 자바스크립트로 컴파일되지 않기 때문
// - 단점: private property를 사용할 수 없음
