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