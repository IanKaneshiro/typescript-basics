// // classes in typscript
// class Player {
//   public readonly first: string; // You can also use readonly in classes. Meaning once set you cannot change
//   public readonly last: string; // Even tho public is default value, we can include clarity
//   private score: number = 0; // This is different from the "#" ->  You use one or the other. Public is the TypeScript way
//   constructor(first: string, last: string) {
//     (this.first = first), (this.last = last);
//     this.secretMethod();
//   }

//   private secretMethod() {
//     console.log("Secret Method");
//   }
// }

// // Public / Privite Modifiers
// // By default everthing is considered public
// // Readonly says we cant change it put we can still view it

// // We can put private in front of any property or method and it is not accessaible outside the class

// const elton = new Player("Elton", "Steele");
// // elton.secretMethod();

// // Cleaner way to do it. Parameter properties shorthand. Parameter properties
// class Player {
//   // public readonly first: string;
//   // public readonly last: string;
//   constructor(
//     public first: string,
//     public last: string,
//     protected _score: number
//   ) {} // We dont need to do the this.first = first when using this syntax

//   private secretMethod() {
//     console.log("Secret Method");
//   }

//   get fullName(): string {
//     return `${this.first} ${this.last}`;
//   }

//   get score(): number {
//     return this._score;
//   }

//   set score(newScore: number) {
//     if (newScore > 0) this._score = newScore;
//   }
// }

// class SuperPlayer extends Player {
//   public isAdmin: boolean = true;
//   maxScore() {
//     this._score = 9999999; // Private variables are only accesible in the main class. protected accesible in the main class and subclass/children classes
//   }
// }

// const elton = new Player("Elton", "Steele", 0);
// elton.fullName; // Cannot change with = assignments because it is only a getter

// ------------------ Interfaces with classes in TypeScript

// Useful for creating many classes that will have similar structure to begin

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful, Printable {
  constructor(public color: string) {}
  print() {
    console.log("Printed!");
  }
}

class Jacket implements Colorful {
  constructor(public color: string) {}
}

const bike1 = new Bike("red");
const prada = new Jacket("orange");

// --------------- Creating Abstarct Classes ---------------------

// abstract class Cat {}

// new Cat(); // Cannot create instance of abstract cat

abstract class Employee {
  constructor(public first: string, public last: string) {}
  // We can defind methods that must exists on subclasses
  abstract getPay(): number;
  greet() {
    console.log("Helll!!!!");
  }
}

class FullTimeEmployess extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployess extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployess("Betty", "White", 95000);
