const dec = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(dec);

// console.log(Math.PI);

// Math.PI = 4 // not  allowed
// console.log(Math.PI);

const user1 = {
    name: "John",
    age: 45,
    Nickname: "BabaYaaga",
    Fight: function(){
        console.log(`Kane vs ${this.Nickname}`);
    } 
}

// console.log(user1);

// console.log(Object.getOwnPropertyDescriptor(user1, "name"));

Object.defineProperty(user1, "name", {
    // writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(user1, "name"));


for (let [key, value] of Object.entries(user1)) {
    if (typeof value !== 'function' ) {
        console.log(`${key} : ${value}`);
    }
}