function square(num: number) {
  return num * num;
}

// We use type annotation in function parameters as well
function greet(person: string) {
  return `Hi there, ${person}`;
}

// You can have multiple with different type annotations

const doSomething = (person: string, age: number, isFunny: boolean) => {};

// TypeScript will tell you is you are missing parameters too!
doSomething("ChickenFace", 5, true);

// Default parameters with type annotation
function greet2(person: string = "stranger") {
  return `Hi, there ${person}`;
}

// function return types with type annotation
// TypeScript is smart and can infer this
// Its a good idea because it makes it obvious what the function is supposed to return
const addNums = (x: number, y: number): number => {
  return x * y;
};

function rando(num: number) {
  // String | Number => "Union Type"
  if (Math.random() < 0.5) {
    return num.toString();
  } else {
    return num;
  }
}

const colors = ["red", "orange", "yellow"];

// TypeScript can infer the type
colors.map((color) => {
  return color.toUpperCase();
});

// The VOID type
// Return value for functions that don't return anything
// Because we are only console loggin and not returning a value. This function returns void
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

// The NEVER type
// Annotates a function that should NEVER return.
// One that always throws a exception or continues to run
// It should never have a change to return anything
function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING");
  }
}

// Void vs Never
// Void returns undefined or null which is technically a value
// Never is a function that doesnt ever finish executing

const twoFer = (name: string = "you"): string => {
  return `One for ${name}, one for me`;
};

const isLeapYear = (year: number): boolean => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isLeapYear(2012)); // true
console.log(isLeapYear(2013)); // false
