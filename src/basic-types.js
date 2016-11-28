// Boolean
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// String
var color = "blue";
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n    I'll be " + (age + 1) + " years old next month.";
// Equivalent of
var sentence = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
// Array
var list = [1, 2, 3];
var list = [1, 2, 3];
var list = ["a", "b", "c"];
// Tuple
// declare
var x;
// initialize it correctly
x = ["hello", 10];
// initialize it incorrectly
x = [10, "hello"];
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(x[5].toString()); // OK, 'string and 'number' both have 'toString'
x[6] = true; // Error, 'boolean' isn't 'string | number'
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
alert(colorName);
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definetly a boolean
var notSure = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
prettySure.toFixed(); //Error: Property 'toFixed' doesn't exist on type 'Object'.
var list = [1, true, "free"];
list[1] = 100;
// Void
function warnUser() {
    alert("This is my warning message");
}
// you can only assign underfined or null to them
var unusable = undefined;
// Null and Undefined
// Not much else we can assign to these variables !
var u = undefined;
var n = null;
// Never
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infinteLoop() {
    while (true) {
    }
}
// Type Assertions
var someValue = "this is a string";
var strLength = someValue.length;
// as -syntax
var someValue = "this is a string";
var strLength = someValue.length;
