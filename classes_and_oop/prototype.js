// let name = "John          "
// console.log(name.trim().length);
// console.log(name.truelength);


let heros = ["Shaktiman", "Raj", "Doga"]

let PowersofHeros = {
    shaktiman: "Super Strong",
    Raj:"Super Smarter",
    Doga :"Invincible",

    getShaktimanPower: function() {
        console.log(`From Indian Gurus ${this.shaktiman}`);
    }
}

Object.prototype.adi = function(){
    console.log(`This is present in function`);
}

Array.prototype.Adi = function(){
    console.log("This is somthing new");
}

// PowersofHeros.Adi()
// heros.Adi()


// Inheritance

const user = {
    name: "Adi",
    email: "Aditya@gmail.com",
    password: 1234567890
}
const teacher = {
    makeVidoes : true
}

const TeacherSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssigment : 'JS',
    fullTime: true,
    __proto__: TeacherSupport
}
 
teacher.__proto__= user;

// morden syntax

Object.setPrototypeOf(TeacherSupport, teacher)

let another = "helloMan        "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

another.trueLength();
"JohnWick".trueLength()
"   ".trueLength()  