let nulVal: null = null;
let undefinedVal: undefined = undefined;

// Tuple: Fixed size and fixed type array
let user: [number, string] = [1, "Shohag"];

function summ(a: number, b: number): number {
    return a + b;
}

const sub = (c: number, d: number): number => {
    return c - d;
};

console.log("Sum:", summ(5, 56));
console.log("Sub:", sub(10, 4));

// unknown: Type-safe counterpart to any. Must be narrowed before use.
let unknownVal: unknown = 10;
unknownVal = "sh";

if (typeof unknownVal === "number") {
    console.log("Rounded number:", Math.round(unknownVal));
} else if (typeof unknownVal === "string") {
    console.log("String length:", unknownVal.length);
}

// never: Represents values that will never occur.
function infiniteLoop(): never {
    while (true) {
        // This function never returns
    }
}

// Union: Can be one of several types
let numOrStr: number | string = 10;
numOrStr = "Shohag";

// Custom Types
type Human = {
    name: string;
    age: number;
    isSuperHuman: boolean;
};

type SuperHuman = {
    power: string;
    strengthLevel: number;
};

const person: Human = {
    name: "Shohag",
    age: 25,
    isSuperHuman: true
};

const hero: SuperHuman = {
    power: "Flight",
    strengthLevel: 9000
};

console.log(`User: ${person.name}, Superhuman: ${person.isSuperHuman}`);
console.log(`Hero Power: ${hero.power}`);

// any: Disables type checking (use sparingly!)
let anyVal: any = 10;
anyVal = "Now I am a string";
anyVal = true;
console.log("Any value:", anyVal);

enum Days {
    sunDay,
    monDay,
    tuesDay,
    wednesDay,
    thursDay,
    friDay,
    saturDay
}
export class Cat{
    numberOfLegs:number =4;
    color :string ="orange"
}
