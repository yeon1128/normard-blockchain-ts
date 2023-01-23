// 📍 call signiture
// type Add = (a: number, b: number) => number;

// const add: Add = (a, b) => a + b;

// 📍 overloading
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};
const add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};
// Next.js
// Router.push("/home");
// Router.push({
//   path: "/home",
//   state: 1,
// });
type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Config): void;
};
const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

type Add2 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};
const add2: Add2 = (a, b, c?: number) => {
  return c ? a + b + c : a + b;
  //   return a + b;
};
add2(1, 2);
add2(1, 2, 3);

// 📍 polymorphism

// concrete type : 원래부터 존재하던 타입 ex) number, boolean, string, void, unknown
type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
  (arr: (number | boolean)[]): void;
};
const superPrint1: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};
superPrint1([1, 2, 3, 4]);
superPrint1([true, false, true, true]);
superPrint1(["true", "false", "true", "true"]);
superPrint1([1, 2, true, false]);

// generic type : 마치 placeholder와 같음, 어떤 타입이 들어올지 모를 때 사용
type SuperPrint2 = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void;
};
const superPrint2: SuperPrint2 = (arr) => {
  arr.forEach((i) => console.log(i));
};
superPrint2([1, 2, 3, 4]);
superPrint2([true, false, true, true]);
superPrint2(["true", "false", "true", "true"]);
superPrint2([1, 2, true, false]);

type SuperPrint3 = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};
const superPrint3: SuperPrint3 = (arr) => arr[0];
const one = superPrint3([true, false, true, true]);
const two = superPrint3([1, 2, 3, 4]);
const three = superPrint3(["true", "false", "true", "true"]);
const four = superPrint3([1, 2, true, false]);

type SuperPrint4 = {
  <T>(arr: T[]): T;
};
const superPrint4: SuperPrint4 = (arr) => arr[0];
const one1 = superPrint4([true, false, true, true]);
const two2 = superPrint4([1, 2, 3, 4]);
const three3 = superPrint4(["true", "false", "true", "true"]);
const four4 = superPrint4([1, 2, true, false]);
// four4.toUpperCase(); // error ⭕️

type SuperPrint5 = {
  (arr: any[]): any;
};
const superPrint5: SuperPrint5 = (arr) => arr[0];
const one11 = superPrint5([true, false, true, true]);
const two22 = superPrint5([1, 2, 3, 4]);
const three33 = superPrint5(["true", "false", "true", "true"]);
const four44 = superPrint5([1, 2, true, false]);
// four44.toUpperCase(); // error ❌

type SuperPrint6 = <T, M>(a: T[], b: M) => T;
const superPrint6: SuperPrint6 = (a) => a[0];
const aa = superPrint6([true, false, true, true], "s");
const bb = superPrint6([1, 2, 3, 4], 1);
const cc = superPrint6(["true", "false", "true", "true"], [1, 2]);
const dd = superPrint6([1, 2, true, false], true);
