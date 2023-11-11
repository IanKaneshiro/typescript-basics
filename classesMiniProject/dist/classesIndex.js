// Recap of classes in JavaScript
// Classes allow us to create patterns that describe objects
class Player {
  // static methods or properties exist on the class itsself. not the instance
  static description = "Player in our Game"; // This exists on the player class
  #score = 0; // This tells JS that this property should only be usable in the class instance. Other convention would be "_score"
  numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
    console.log("In constructor");
  }
  // Static example
  static randomPlayer() {
    return new Player("randomFirst", "randomLast");
  }

  // Getter
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  get score() {
    return this.#score;
  }
  set score(newScore) {
    if (newScore < 0) throw new Error("Score must be positive");
    this.#score = newScore;
  }
  taunt() {
    console.log("booyah!");
  }
  loseLife() {
    this.numLives -= 1;
    return this.numLives;
  }
  getScore() {
    return this.#score;
  }
  updateScore(score) {
    this.#score = score;
    return this.#score;
  }
}

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);

    this.powers = powers;
  }
  // Super keyword
  isAdmin = true;
}

const player1 = new Player("blue", "steele");
const admin = new AdminPlayer("admin", "mcAdmin");
// const player2 = new Player("charlie", "brown");

console.log(player1);
console.log(admin);
console.log(player1.numLives);
player1.loseLife();
console.log(player1.numLives);
console.log(player1.fullName);
console.log(player1.score);
