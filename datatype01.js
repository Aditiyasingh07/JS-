// Primitive

//  7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt.

// Reference (Non primitive )

// Array, Objects, Function


const bignum = 4354874354874531377645698674n;  //Output BigInt

// console.log(typeof bignum);

// Array is a collaction of same or multiple data types and contain in square brackets only [...].

const hero = ["shaktiman", "Raj", "Naagraj", "Krrish"]

// Object it is a collaction of key and value pairs in  curly brackets only {...}.

let supervillains = {
    marvel: "Thanos",
    ChotaBheem: "Krimadha",
    Shaktiman: "TamrajKilvish",
}

const myFunction = function name(params) {
    console.log("Hello Boi! ");
}

console.log(typeof supervillains);

console.log(typeof myFunction);


// ******************************************************************

// Stack (Primitive) , Heap (Non-Primitive )

//Example of Stack Memory
let userone = "Hello"

let usertwo = userone

usertwo = "World"

console.log(userone);
console.log(usertwo);

//Example of Heap Memory
let nameone = {
    firstName: "Adi",
    lastName: "Shankar"
}

let lastName = nameone.lastName = "Singh"

console.log(nameone.lastName);

console.log(lastName);

console.log(nameone);   

