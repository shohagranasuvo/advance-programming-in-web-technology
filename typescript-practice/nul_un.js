let nulVal = null;
let undefinedVal = undefined;
// Tuple: Fixed size and fixed type array
let user = [1, "Shohag"];
function summ(a, b) {
    return a + b;
}
const sub = (c, d) => {
    return c - d;
};
console.log("Sum:", summ(5, 56));
console.log("Sub:", sub(10, 4));
// unknown: Type-safe counterpart to any. Must be narrowed before use.
let unknownVal = 10;
unknownVal = "sh";
if (typeof unknownVal === "number") {
    console.log("Rounded number:", Math.round(unknownVal));
}
else if (typeof unknownVal === "string") {
    console.log("String length:", unknownVal.length);
}
// never: Represents values that will never occur.
function infiniteLoop() {
    while (true) {
        // This function never returns
    }
}
// Union: Can be one of several types
let numOrStr = 10;
numOrStr = "Shohag";
const person = {
    name: "Shohag",
    age: 25,
    isSuperHuman: true
};
const hero = {
    power: "Flight",
    strengthLevel: 9000
};
console.log(`User: ${person.name}, Superhuman: ${person.isSuperHuman}`);
console.log(`Hero Power: ${hero.power}`);
// any: Disables type checking (use sparingly!)
let anyVal = 10;
anyVal = "Now I am a string";
anyVal = true;
console.log("Any value:", anyVal);
var Days;
(function (Days) {
    Days[Days["sunDay"] = 0] = "sunDay";
    Days[Days["monDay"] = 1] = "monDay";
    Days[Days["tuesDay"] = 2] = "tuesDay";
    Days[Days["wednesDay"] = 3] = "wednesDay";
    Days[Days["thursDay"] = 4] = "thursDay";
    Days[Days["friDay"] = 5] = "friDay";
    Days[Days["saturDay"] = 6] = "saturDay";
})(Days || (Days = {}));
export class Cat {
    numberOfLegs = 4;
    color = "orange";
}
