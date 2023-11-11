"use strict";
// classes in typscript
class Player {
    constructor(first, last) {
        this.score = 0;
        (this.first = first), (this.last = last);
    }
}
const elton = new Player("Elton", "Steele");
