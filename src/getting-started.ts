/* basic usage */
let name: string = "Andrew";

function printIt(value: string) {
    console.log(value);
}

printIt("aa");


interface Person {
    name: string;
    age: number;
}

class Greeter {
    name: string;
    sayHello() {
        console.log("Hello " + this.name);
    }
}

function sortByName(a: Person[]) {
    var result = a.slice(0);
    result.sort((x, y) => {
        return x.name.localeCompare(y.name);
    });
    return result;
}

sortByName([]);

interface Contact {
    name: string;
    email: string;
    phone: string;
}

let addressBook: Contact[] = [];
addressBook.push({
    name: "Tudor Fis",
    email: "tudor.fis@gmail.com",
    phone: "0040740815174"
});

