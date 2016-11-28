"use strict";
var greet_1 = require("./greet");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerHTML = greet_1.sayHello(name);
}
showHello("greeting", "TypeScript");
