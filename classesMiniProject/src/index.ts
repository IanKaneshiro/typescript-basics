// classes in typscript
class Player {
  readonly first: string; // You can also use readonly in classes. Meaning once set you cannot change
  readonly last: string;
  score: number = 0;
  constructor(first: string, last: string) {
    (this.first = first), (this.last = last);
  }
}

const elton = new Player("Elton", "Steele");
