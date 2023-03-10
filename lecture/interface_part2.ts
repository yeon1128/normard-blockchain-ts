// ๐ class
abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}
// new User() // error โญ๏ธ
class Player extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.firstName} ${this.lastName}`;
  }
}

// ๐ interface
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
  // new User() โ
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
// โ๏ธ ์ถ์ class ๋์  interface๋ก class ๋ง๋ค๊ธฐ
// - ์ฅ์ : ํ์ผ ์ฉ๋์ ์ค์ผ ์ ์์
// interface๋ ํ์ ์คํฌ๋ฆฝํธ๋ง์ ๋ฌธ๋ฒ์ด์ด์ ์๋ฐ์คํฌ๋ฆฝํธ๋ก ์ปดํ์ผ๋์ง ์๊ธฐ ๋๋ฌธ
// - ๋จ์ : private property๋ฅผ ์ฌ์ฉํ  ์ ์์
