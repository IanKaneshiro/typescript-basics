// Type Annotations
// Strings

let movieTitle: string = "Amadeus";
movieTitle = "Arrival";

// Number
let myNumber: number = 6;

// Boolean
let myBoolen: boolean = true;

// Type Inference
// TypeScript can infer based on initial value
// There is a place for type annotation tho
let tvShow = "Arrow";

let isFunny = false;

isFunny = true;

// any
// When using this type it removes all the checks that TypeScript uses
// We avoid this typically
let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();

// You'll want to use type annotation when you declare a variable berfore assigning it
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
// let foundMovie; // Is "any" type right now.
let foundMovie: string; // This will prevent the implicit "any"
for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus"; // When we assign here we can reassign it to anything
  }
}
