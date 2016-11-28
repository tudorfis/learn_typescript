// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.
    I'll be ${ age + 1 } years old next month.`;

// Equivalent of
let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
        "I'll be " + (age + 1) + " years old next month.";

// Array
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
let list: Array<string> = ["a", "b", "c"];

// Tuple

// declare
let x: [string, number];

// initialize it correctly
x = ["hello", 10];

// initialize it incorrectly
x  = [10, "hello"];

console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(x[5].toString()); // OK, 'string and 'number' both have 'toString'
x[6] = true; // Error, 'boolean' isn't 'string | number'

// Enum
enum Color {Red, Green, Blue};
let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;

enum Color {Red = 1, Green = 2, Blue = 4};
let c: Color = Color.Green;

enum Color {red = 1, Green, Blue};
let colorName: string = Color[2];

alert(colorName);

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definetly a boolean

let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); //Error: Property 'toFixed' doesn't exist on type 'Object'.

let list: any[] = [1, true, "free"];
list[1] = 100;

// Void
function warnUser(): void {
    alert("This is my warning message");
}

// you can only assign underfined or null to them
let unusable: void = undefined;

// Null and Undefined

// Not much else we can assign to these variables !
let u: undefined = undefined;
let n: null = null;

// Never

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infinteLoop(): never {
    while (true) {

    }
}

// Type Assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as -syntax
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;




































