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
var el = document.getElementById("idk");
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
function someDemo(x, y) {
    if (x === y) {
    }
}
function getRuntime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    else {
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
var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
    }
    return User;
}());
var Company = /** @class */ (function () {
    function Company(name) {
        this.name = name;
    }
    return Company;
}());
function printName(entity) {
    if (entity instanceof User) {
        entity; // User
    }
    else {
        entity; // Company
    }
}
// // The key piece is animal is Cat
// This special function tells TS is the value is of type Cat
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal; // Cat
        return "Meow";
    }
    else {
        animal; // Dog
        return "Bark";
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "pig":
            animal; // Pig
            return "Oink";
        case "cow":
            return "moo";
        case "rooster":
            return "Cacadoodledoo";
        default:
            return "Invalid Anima;";
    }
}
var stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
};
console.log(getFarmAnimalSound(stevie));
