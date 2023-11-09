// Interfaces
// ALMOST THE EXACT SAME AS THE type alias
// We can use they to create reusable, modular types that describe the shape of objects

// These use commas or semicolons. VSCODE auto corrects to semicolons
interface Point {
  x: number;
  y: number;
}

interface Person {
  readonly id: number; // set when initialized with readonly
  firstName: string;
  lastName: string;
  nickname?: string; // optioonal using the ?
  sayHi: () => string; // sayHi must be a methods and it must return a string with no parameters
  //   sayHi(): string; can also do it this way
}

const thomas: Person = {
  id: 10,
  firstName: "Thomas",
  lastName: "Hardy",
  nickname: "yooy",
  sayHi: () => "Hello",
};

// Interface methods
// -- Methods with params
interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number; // takes a number parameter and returns a number
}

// Reopening Interfaces
// We can reopen and add new things to interfaces after they have been defined
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "elton",
  age: 0.5,
  breed: "Dog",
  bark() {
    return "woof";
  },
};

// Extend interfaces similar to classes
// We can extend the dog interface to add all those things to our new ServiceDog interface
interface ServiceDog extends Dog {
  // Union type
  job: "drug sniffer" | "bomb" | "guide dog";
}

// Interface multiple inheritance
interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const piere: Engineer = {
  name: "Piere",
  email: "sdfjnsdjkf",
  id: 10010101,
  level: "senior",
  languages: ["JS", "Python"],
};

// Interface vs Type alias
/*
- Interfaces can only descript the shape of objects
- Type can describe anything
- We can reopen and extend interfaces
- type Color = "red" | "blue" -> Type can do variables too
- We can't reopen types
- Interface can extends. Types cannot extend we have to use intersection with the &



*/
