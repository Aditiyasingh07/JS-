// const users = new Object() //singleton

const users = {}

users.id = "2110"
users.firstname = "John"
users.lastname = "Wick"
users.isloggedIn = true

// console.log(users);

const newuser = {
    email: "newuser@gamil.com",
    userfullname: {
        username: {
            firstname: "Jhon",
            lastname: "Shanow"
        }
    }
}

// console.log(newuser);
// console.log(newuser.userfullname.username.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const onj3 = {obj1, obj2}

console.log(onj3);

// const obj4 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1, ...obj2}

// console.log(obj4);

console.log(users);

console.log(Object.keys(users));  // return as an array format []
console.log(Object.values(users)); // return as an array format []

console.log(Object.entries(users));    // returns key value pairs in the array of arrays format [ [] ] array under the array

console.log(users.hasOwnProperty("id"));   // check




const course = {
    name: "JS in hindi",
    prize: 299,
    couserInstructor: "Mr. Smith"
}

// const {couserInstructor} = course
const {couserInstructor: con} = course
const {prize} = course

// console.log(couserInstructor);
// console.log(con);
// console.log(prize);
