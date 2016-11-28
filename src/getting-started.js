/* basic usage */
var name = "Andrew";
function printIt(value) {
    console.log(value);
}
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
var addressBook = [];
addressBook.push({
    name: "Tudor Fis",
    email: "tudor.fis@gmail.com",
    phone: "0040740815174"
});
