// ------------ Arrays -------------------
// This says activeUsers is of type "empty array"
// const activeUsers: [] = [];

// activeUsers.push("steven");

// We need to be more explicit with array types

// This says active users is an array of string
const activeUsers: string[] = [];
activeUsers.push("string");

const ageList: number[] = [56, 13];
ageList[0] = 99;

// ----------- More Array Syntax ------------------------
// These two are the same
const bools: Array<boolean> = [];
const bools2: boolean[] = [];

// type Point = {
//   x: number;
//   y: number;
// };

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });

// -------------- MultiDimentional Arrays  --------------------
// This says we want a 2 dimensional array of string
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: number[][][] = [[[5]]];

// ------------------- Array Type Exercise ---------------
const ages: number[] = [];

const gameBoard: string[][] = [];

// type Product = {
//   name: string;
//   price: number;
// };

function getTotal(product: Product[]): number {
  return product.reduce((acc, el) => {
    return acc + el.price;
  }, 0);
}
