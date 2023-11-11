// ---------------- Generics ---------------------
// Allows us to define reusable function and classes that work with multiple
// types rather than a single type.
var nums = [];
var strings = [];
// Array<> is an example of a generic
// const inputEl = document.querySelector<HTMLInputElement>("#username");
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
// identity<number>(7);
// identity<string>("4");
// identity<Cat>({ });
// ------------ Another Generic Function
function getRandomElement(list) {
    var randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(["a", "b", "c"]));
// Inferring types in generics
