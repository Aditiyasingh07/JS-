const SuperHero = {
    name: "Captain",
    power: "Super Strength",
    age: 150,
    TeamCaptain: true,
    TeamMembers: function(){
        console.log(`IronMan, Hulk, Thor, ${this.name}`);
    } 
} 

// console.log(SuperHero);
// console.log(SuperHero.TeamMembers());


function user(username, loginCount, isLoggedIn){
     this.username = username
     this.loginCount = loginCount
     this.isLoggedIn = isLoggedIn

    // Not mendatory 
     return this
}

// const userOne = user('John', 34, false)
// const userTwo = user('Mr. Wick', 30, true)

// without using new keyword overwrite the previose user details
// with (new) keyword create new object and assign to a variable

const userOne = new user('John', 34, false)
const userTwo = new user('Mr. Wick', 30, true)

console.log(userOne.constructor);
// console.log(userTwo);