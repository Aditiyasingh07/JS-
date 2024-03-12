//singleton
// Object.create

// object literals

const sym = Symbol("Avengers")
const hero = {
    name: "Tony Stark",
    "super heroname": "Iron Man",
    powers: ["genius", "tech"],
    team: "Avengers",
    [sym]: "New Avengers Logo",
    age: 50,
    home: "Stark tower",
    Leader: true,
    teammemmers:  ["Thor", "Captain America", "Hulk"]
}

// console.log(hero["age"]);
// console.log(hero["home"]);

// console.log(hero.super heroname);
// console.log(hero["super heroname"]);

// console.log(hero[sym]);

// Object.freeze(hero)

// hero.Leader = false

// console.log(hero);

hero.greeting = function() {
    console.log(`thank u stanlee for marvel supersuper heroes`);
}

hero.greetingtwo = function() {
    console.log(`thank u stanlee for marvel supersuper heroes like ${this.name}`);
}

// console.log(hero.greeting);
console.log(hero.greeting());
console.log(hero.greetingtwo());
