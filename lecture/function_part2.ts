// function superPrint<V>(a: V[]) {
//   return a[0];
// }
function superPrint<T>(a: T[]) {
  return a[0];
}
// const a = superPrint([true, false, true, true]);
const a = superPrint<boolean>([true, false, true, true]);
const b = superPrint([1, 2, 3, 4]);
const c = superPrint(["true", "false", "true", "true"]);
const d = superPrint([1, 2, true, false]);

type Player<E> = {
  name: string;
  extraInfo: E;
};
// const nico: Player<{ favFood: string }> = {
//   name: "nico",
//   extraInfo: {
//     favFood: "pizza",
//   },
// };

// type NicoPlayer = Player<{
//   favFood: string;
// }>;
// const nico: NicoPlayer = {
//   name: "nico",
//   extraInfo: {
//     favFood: "pizza",
//   },
// };

type NicoExtra = {
  favFood: string;
};
const nico: Player<NicoExtra> = {
  name: "nico",
  extraInfo: {
    favFood: "pizza",
  },
};

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};

type A = Array<number>;
let a1: A = [1, 2, 3];
// let a1: A = ["hello", "world"];

// function printAllNumbers(arr: number[]) {}
function printAllNumbers(arr: Array<number>) {}
