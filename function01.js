const hero = {
    superheroname: "Iron Man",
    name: "Tony Stack",
    age: 45,
    
    message: function marvelhero (){
                    console.log(`This is most genius superhero and his superhero name is ${this.superheroname} and name is ${this.name} and he is ${this.age} year old.`)
    }
}

// hero.message();

hero.age = 50

// hero.message();


function other(){
    let username = "John Wick"
    console.log(this.username);
}

other()

const one = function () {
    let username = "Jack Reacher";
    console.log(this.username);
}

one()

const two = ()=>{
    let username = "Jack Reacher";
    console.log(this.username);
}

two()


// const add = (firstname, lastname) => {
//     return `${firstname} ${lastname}`
// }


//it is also use like this 
// const add = (firstname, lastname) => firstname + lastname

const add = () => ({username: "Mr. Wick"})

console.log(add());

// console.log(add("John", " Wick"));

// named IIFE
(function  Person(){
    console.log("John Wick");
})();

//IIFE (An immediately-invoked functional expression) is function that is called immediately after it is declared. Its protect from globla polluated variables.

// unamed IIFE
( ()=> {
    console.log("Hello Mr. Wick");
})() 