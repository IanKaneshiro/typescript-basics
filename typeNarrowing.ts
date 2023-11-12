// Type Narrowing
// function triple(value: number | string) {
//   // We need to be more precise and narrow the type in the function
//   if (typeof value === "string") {
//     return value.repeat(3);
//   }
//   // TypeScript is smart enough to know this will be a number.
//   return value * 3;
// }

// Truthiness guard
const el = document.getElementById("idk");

// const printLetters = (word?: string) => {
//   if (word) {
//     for (let char of word) {
//       console.log(char);
//     }
//   } else {
//     console.log("You did not pass in a word!");
//   }
// };

// Equality Narrowing
function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
  }
}

// Narrowing with the in operator
// "name" in pet

interface Movie {
  title: string;
  duration: number;
}

interface TvShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TvShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  } else {
    return media.duration;
  }
}

// instance of narrowing
// If the value is a instance of a certainn class, Array, Data. Anything we instantiate with the "new" keyword

// function printFullDate(date: string | Date) {
//   if (date instanceof Date) {
//     console.log(date.toUTCString());
//   }
//   console.log(new Date(date).toUTCString());
// }

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity; // User
  } else {
    entity; // Company
  }
}

// Type Predicates
// Allows us to write custom functions that can narrow the type of a value.
// These function have a very special return type called a predicate
// parameterName is Type

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

// // The key piece is animal is Cat
// This special function tells TS is the value is of type Cat
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal; // Cat
    return "Meow";
  } else {
    animal; // Dog
    return "Bark";
  }
}

// discriminated unions
// Creating literal property that is common across multiple types

// They must all have the same parameter that we can reference to find which one we are using. Essentially a label
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

type FarmAnimal = Pig | Rooster | Cow;

// function getFarmAnimalSound(animal: FarmAnimal) {
//   switch (animal.kind) {
//     case "pig":
//       animal; // Pig
//       return "Oink";
//     case "cow":
//       return "moo";
//     case "rooster":
//       return "Cacadoodledoo";
//     default:
//       return "Invalid Anima;";
//   }
// }

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));

// Exhasiveness checking. Using the never type
function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      animal; // Pig
      return "Oink";
    case "cow":
      return "moo";
    case "rooster":
      return "Cacadoodledoo";
    default:
      //  We should never make it here if we handles all cases correctly
      // Just a check to catch if we miss adding a type
      const shouldNeverGetHere: never = animal;
      return shouldNeverGetHere;
  }
}
