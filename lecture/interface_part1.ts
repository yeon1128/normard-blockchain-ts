type Nickname = string;
type Health = number;
type Friends = Array<string>;
// type Player = {
//   nickname: string;
//   healthBar: number;
// };
type Player = {
  nickname: Nickname;
  healthBar: Health;
};
const nico: Player = {
  nickname: "nico",
  healthBar: 10,
};

type Food = string;
const kimchi: Food = "delicious";

// type Team = string; // alias 타입
type Team = "red" | "blue" | "yellow"; // concrete 타입의 특정값
type Health2 = 1 | 5 | 10;
type Player2 = {
  // type
  nickname: string;
  team: Team;
  health: Health2;
};
interface Person {
  // interface
  nickname: string;
  team: Team;
  health: Health2;
}
const nico2: Player2 = {
  nickname: "nico",
  team: "red",
  health: 5,
};

// interface Hello = string // error ⭕️
// interface는 오로지 object나 class의 모양을 타입스크립트에게 설명해주기 위한 용도로 사용됨
// 반면 type은 다양한 용도로 활용 가능
// interface는 객체 지향 프로그래밍 개념을 활용해서 디자인

// 📍 interface
interface User {
  name: string;
  // readonly name: string;
}
interface Player3 extends User {}
const nico3: Player3 = {
  name: "nico",
};
// nico3.name = "lalal"; // error ⭕️
// 📍 type
type User2 = {
  name: string;
};
type Player4 = User2 & {};
const nico4: Player4 = {
  name: "nico",
};

// interface는 property 축적 가능
// 같은 interface에 다른 이름을 가진 property 축적 가능
interface User3 {
  name: string;
}
interface User3 {
  lastName: string;
}
interface User3 {
  health: number;
}
const nico5: User3 = {
  name: "nico",
  health: 10,
  lastName: "co",
};
