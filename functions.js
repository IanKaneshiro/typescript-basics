function square(num) {
    return num * num;
}
// We use type annotation in function parameters as well
function greet(person) {
    return "Hi there, ".concat(person);
}
// You can have multiple with different type annotations
var doSomething = function (person, age, isFunny) { };
// TypeScript will tell you is you are missing parameters too!
doSomething("ChickenFace", 5, true);
// Default parameters with type annotation
function greet2(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi, there ".concat(person);
}
// function return types with type annotation
// TypeScript is smart and can infer this
// Its a good idea because it makes it obvious what the function is supposed to return
var addNums = function (x, y) {
    return x * y;
};
function rando(num) {
    // String | Number => "Union Type"
    if (Math.random() < 0.5) {
        return num.toString();
    }
    else {
        return num;
    }
}
var colors = ["red", "orange", "yellow"];
// TypeScript can infer the type
colors.map(function (color) {
    return color.toUpperCase();
});
// The VOID type
// Return value for functions that don't return anything
// Because we are only console loggin and not returning a value. This function returns void
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
// The NEVER type
// Annotates a function that should NEVER return.
// One that always throws a exception or continues to run
// It should never have a change to return anything
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("GAME LOOP RUNNING");
    }
}
// Void vs Never
// Void returns undefined or null which is technically a value
// Never is a function that doesnt ever finish executing
var twoFer = function (name) {
    if (name === void 0) { name = "you"; }
    return "One for ".concat(name, ", one for me");
};
var isLeapYear = function (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
