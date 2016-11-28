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
    }
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
function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f(true); // returns '10'
f(false); // returns 'undefined'

// Scoping rules mistakes
function sumMatrix(matrix: number[][]) {
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
    (function(i){
        setTimeout(function(){
            console.log(i);
        }, 100 * i);
    })(i)
}

// Block-scoping
function f(input: boolean) {
    let a = 100;

    if (input) {
        // still okay to reference a
        let b = a + 1;
        return b;
    }

    // return 'error' because b doesn't exist here
    return b;
}

try {
    throw "oh no!"
}
catch (e) {
    console.log("Oh, well.");
}

// Error, 'e' doesn't exist here
console.log(e);

// Can't be written or read before they are declared
a++; // illegal to use 'a' before it's declared
let a;

// Exceptions
function foo() {
    // okay to capture 'a'
    return a;
}

// illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
foo();

let a;

// Re-declarations and shadowing
function f(x) {
    var x;
    var x;

    if (true) {
        var x;
    }
}
// this works well, but let is not so forgiving
let x = 10;
let x = 20; // error: can't re-declare 'x' in the same scope

// variables don't necessarily need to both be block-scoped for TypeScript to tell us that there's a problem
function f(x) {
    let x = 100; // error: interferes with parameter declaration
}

function g() {
    let x = 100;
    var x = 100; // error: can't have both declarations of 'x'
}

function f(x) {
    let x = 100; // error: interferes with paramter declaration
}

function g() {
    let x = 100;
    var x = 100; // error: can't have both declarations of 'x'
}





