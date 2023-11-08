// // Different ways to annotate Objects
// function printName(person: { first: string; last: string }): void {
//   console.log(`${person.first} ${person.last}`);
// }

// printName({ first: "Thomas", last: "The Train" });

// // Annotate the type is a object
// let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// // This one throw a error, because if you directly put the object in, it makes sure that it is of the correct type.
// printName({ first: "Mick", last: "Jagger", age: 14 });
// const singer = { first: "Mick", last: "Jagger", age: 14 };
// // Doenst error out. It only check for properties outline and ignores excess
// printName(singer);

// ------------- TYPE ALIAS ----------------

// type Point = {
//   x: number;
//   y: number;
// };

// let coordinate: Point = { x: 34, y: 2 };

// function randomCoordinate(): Point {
//   return { x: Math.random(), y: Math.random() };
// }

// function doublePoint(point: Point): Point {
//   return { x: point.x * 2, y: point.y * 2 };
// }

// // You could do
// type MyNum = string;
// let number: MyNum = "hello";

// ------------------- Nested Objects ----------------------------

// type Song = {
//   title: string;
//   artist: string;
//   numStreams: number;
//   credits: { producer: string; writer: string };
// };

// const mySong: Song = {
//   title: "Unchained Melody",
//   artist: "Righteous Brothers",
//   numStreams: 12312321,
//   credits: {
//     producer: "Phil Spector",
//     writer: "Alex North",
//   },
// };

// function calculatePayout(song: Song): number {
//   return song.numStreams * 0.0033;
// }

// function printSong(song: Song): void {
//   console.log(`${song.title} - ${song.artist}`);
// }

// calculatePayout(mySong);
// printSong(mySong);

// -------- Optional Properties -----------------

type Point = {
  x: number;
  y: number;
  z?: number; // the ? makes this a optional value
};

// Doesnt error because z is optional with the ?
const myPoint: Point = { x: 1, y: 2 };

// ------------------- Read Only --------------------
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12345,
  username: "catgurl",
};

// Cannot assign to user.id as it is "READ ONLY"
// user.id = 1232312;

// If it is a reference type like a object or array. You can still add to it and remove it

// ------------------ Intersection Types -----------------

type Circle = {
  radius: number;
};
type Colorful = {
  color: string;
};

// Intersection with ampersan
type ColorFulCircle = Circle & Colorful;

const happyFace: ColorFulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLivees: number;
};

type Dog = {
  breed: string;
};

// Can add on to the other types
type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLivees: 4,
  breed: "Shepherd",
  age: 5,
};

// ---------------------- Object Exercise ----------------

type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUs: number;
    grossWorldWide: number;
  };
};

const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneueve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUs: 108327830,
    grossWorldWide: 400671789,
  },
};

function getProfit(movie: Movie): number {
  return movie.boxOffice.grossWorldWide - movie.boxOffice.budget;
}
