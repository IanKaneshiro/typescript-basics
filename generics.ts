// ---------------- Generics ---------------------
// Allows us to define reusable function and classes that work with multiple
// types rather than a single type.

const nums: Array<number> = [];
// const strings: Array<string> = [];
// Array<> is an example of a generic

// const inputEl = document.querySelector<HTMLInputElement>("#username");

function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any {
//   return item;
// }
interface Cat {
  name: string;
  breed: string;
}

function identity<T>(item: T): T {
  return item;
}

// identity<number>(7);
// identity<string>("4");
// identity<Cat>({ });

// ------------ Another Generic Function
function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

console.log(getRandomElement<string>(["a", "b", "c"])); // You could also leave out the <string> if the array  is a array of string. IT will infer this
// Inferring types in generics

// ---------- Generics with more than one type parameter

// T and U are the common parameter names, similar to I and J in loops
// ------------ Adding type contraints using extends keyword. Basically saying these parameters need to be of type object
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  };
}

const comboObj = merge({ name: "colt" }, { pets: ["Blue", "Steel"] });

// ---- more type contraints using interfaces

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(things: T): number {
  return things.length * 2;
}

// Default Type Parameters
// using the <T = number> syntax. This will default to number but can be other values if specified

function makeMtArray<T = number>(): T[] {
  return [];
}

// ---- Writing Generic Classes

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

// This on class can suit both songs and videos
class PlayList<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}
