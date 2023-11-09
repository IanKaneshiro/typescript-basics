// Union types allows us to give a value a few different possible types.
// We do this by using the single pipe character |
// "This thing is allowed to be this OR this"

// WE typically want to avoid this
let age: number | string = 21;

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  lng: number;
};

let coordinates: Point | Loc = { x: 1, y: 23 };
coordinates = { lat: 343, lng: 343 };

// Union Types and functions

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge("86");

function calculateTax(price: number | string, tax: number) {
  // Type Narrowing using "typeof"
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

// Union types and Arrays
// const nums: number[] = [1, 2, 3, 4, 5];
// const nums: any[] = [1, 2, 3, 4, 5, "sdf"];

// This says a array that could have numbers AND string
const stuff: (number | string)[] = [];
// This says it could be a array of numbers OR a array of string
const stuff2: number[] | string[] = [];

// Literal Types
// This is literally the value 0
let zero: 0 = 0;

// You can have very fine tuned value types
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

// This wont work
// mood = "Angry";

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

let today: DayOfWeek = "Monday";

// Exercise

let highScore: number | boolean = 2;

const stuff3: number[] | string[] = [];

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

type RGB = {
  r: number;
  b: number;
  g: number;
};
type HSL = {
  h: number;
  s: number;
  l: number;
};

const colors: (RGB | HSL)[] = [];

function greet(input: string | string[]): void {
  if (Array.isArray(input)) {
    input.forEach((person) => {
      console.log(`Hello, ${person}`);
    });
  } else {
    console.log(`Hello, ${input}`);
  }
}
