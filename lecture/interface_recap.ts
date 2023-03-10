// π type
type PlayerA = {
  name: string;
};
const playerA: PlayerA = {
  name: "nico",
};
// type μ μμ
type PlayerAA = PlayerA & {
  lastName: string;
};
const playerAA: PlayerAA = {
  name: "tomato",
  lastName: "to",
};

// π interface
interface PlayerB {
  name: string;
}
const playerB: PlayerB = {
  name: "lynn",
};
// interfaceμ μμ
interface PlayerBB extends PlayerB {
  lastName: string;
}
interface PlayerBB {
  health: number;
}
const playerBB = {
  name: "lula",
  lastName: "la",
  health: 10,
};

// π class
type Player1 = {
  firstName: string;
};
interface Player2 {
  lastName: string;
}
class User1 implements Player1 {
  constructor(public firstName: string) {}
}
class User2 implements Player2 {
  constructor(public lastName: string) {}
}
