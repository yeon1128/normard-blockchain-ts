type Age = number;
type Name = string;
// type Player = {
//   name: Name;
//   age?: Age;
// };

type Player = {
  readonly name: Name;
  age?: Age;
};

// const nico: {
//   name: Name;
//   age?: Age;
// } = {
//   name: "nicolas",
//   age: 23,
// };

const nico: Player = {
  name: "nicolas",
  age: 23,
};

const lynn: Player = {
  name: "lynny",
};

if (nico.age && nico.age < 10) {
}

function playerMaker(name: string) {
  return {
    // name: name,
    name,
  };
}

const nico2 = playerMaker("nico");
// nico2.age = 12

function playerMaker2(name: string): Player {
  return {
    name,
  };
}

const nico3 = playerMaker2("nico");
nico3.age = 30;

const playerMaker3 = (name: string): Player => ({ name });

playerMaker3.age = 10;

// nico.name = "hellos"; // error

// const numbers: readonly number[] = [1, 2, 3, 4];
const numbers: number[] = [1, 2, 3, 4];

numbers.push(1); // error
console.log(numbers);

const player: readonly [string, number, boolean] = ["1", 1, false];
// player[0] = 1 // error

// player[0] = "hi"; // error

let num: unknown;
// let b = a + 1;

if (typeof num === "number") {
  let b = num + 1;
}
if (typeof num === "string") {
  let b = num.toUpperCase();
}

function hello() {
  console.log("hello");
}
// function hello(): void {
//   console.log("hello");
// }
const a1 = hello();
// a1.toUpperCase(); // error

function hello1(): never {
  throw new Error("xxx");
  //   return "x";
}
const a2 = hello1();
// a2.toUpperCase();

function hello2(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name;
  }
}
