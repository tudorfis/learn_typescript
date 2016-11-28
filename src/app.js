var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter.greet());
/* basic usage
let name: string = "Andrew";

function printIt(value: string) {
    console.log(value);
}

printIt("aa");
*/
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.sayHello = function () {
        console.log("Hello " + this.name);
    };
    return Greeter;
}());
function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}
sortByName([]);
// Our first interface
// Example of description
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        // Error: property 'collor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var p1 = { x: 10, y: 20 };
p1.x = 5; // error !
// ReadonlyArray<T> same as Array<t> but with readonly properties
var a = [1, 2, 3, 4];
var ro = a;
ro[0] = 12; // error !
ro.push(5); // error !
ro.length = 100; // error !
a = ro; // error !
// Overriding with a type assertion
a = ro;
function createSquare(config) {
    // ...
}
var mySquare = createSquare({ colour: "red", width: 100 }); // error
// error: 'colour' not expected in type 'SquareConfig'
var mySquare = createSquare({ colour: "red", width: 100 });
// use type assertion
var mySquare = createSquare({ width: 100, opacity: 0.5 });
var squareOptions = { colour: "red", width: 100 };
var mySquare = createSquare(squareOptions);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return (result != -1);
};
// the names of parameters do not need to match
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return (result != -1);
};
// the types to not need to be specified
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return (result != -1);
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
// Consistency, 100 (a number) same as "100" (a string)
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    return Dog;
}(Animal));
var myArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error !
var Clock = (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var Clock = (function () {
    function Clock(h, m) {
    } // error because was created in the interface
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var square = {};
square.color = "blue";
square.sideLength = 10;
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
// Interface Extending Classes
var Control = (function () {
    function Control() {
    }
    return Control;
}());
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        _super.apply(this, arguments);
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        _super.apply(this, arguments);
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
var Image = (function () {
    function Image() {
    }
    Image.prototype.select = function () { };
    return Image;
}());
var Location = (function () {
    function Location() {
    }
    Location.prototype.select = function () { };
    return Location;
}());
// Variables
var a = 10;
// Inside a function
function f() {
    var message = "Hello, world!";
    return message;
}
// Within other functions
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
g(); // returns '11'
// Another example
function f() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
        return a;
    }
}
f(); // returns '2'
// Scoping rules
function f(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
f(true); // returns '10'
f(false); // returns 'undefined'
// Scoping rules mistakes
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
// Usage of IIFE, to capture i at each iteration
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}
// Block-scoping
function f(input) {
    var a = 100;
    if (input) {
        // still okay to reference a
        var b = a + 1;
        return b;
    }
    // return 'error' because b doesn't exist here
    return b;
}
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh, well.");
}
// Error, 'e' doesn't exist here
console.log(e);
// Can't be written or read before they are declared
a++; // illegal to use 'a' before it's declared
var a;
// Exceptions
function foo() {
    // okay to capture 'a'
    return a;
}
// illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
foo();
var a;
// Re-declarations and shadowing
function f(x) {
    var x;
    var x;
    if (true) {
        var x;
    }
}
// this works well, but let is not so forgiving
var x = 10;
var x = 20; // error: can't re-declare 'x' in the same scope
// variables don't necessarily need to both be block-scoped for TypeScript to tell us that there's a problem
function f(x) {
    var x = 100; // error: interferes with parameter declaration
}
function g() {
    var x = 100;
    var x = 100; // error: can't have both declarations of 'x'
}
function f(x) {
    var x = 100; // error: interferes with paramter declaration
}
function g() {
    var x = 100;
    var x = 100; // error: can't have both declarations of 'x'
}
