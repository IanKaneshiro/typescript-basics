import Dog from "./Dog.js";
import ShelterDog from "./ShelterDog.js";
import { add, multiply, divide } from "./utils.js";

console.log("From index file!");

const elton = new Dog("Elton", "Aussie", 19);
elton.bark();
const buffy = new ShelterDog("Buffy", "Pitbull", 4, "Nice place");

console.log(add(4, 5));
console.log(multiply(2, 2));
console.log(divide(10, 2));