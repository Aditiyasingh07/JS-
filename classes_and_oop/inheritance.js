class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is : ${this.username}`);
    }
}

class Admin extends User{
    constructor(username, email, password){
        super(username)
        this.email =  email;
        this.password = password
    }

    adminCard(){
        console.log(`This is new Card Added by ${this.username}`);
    }
}

const user1 = new Admin ("John", "klds@kljds.com", 12345);
const  user2 = new User("Mr Wick");

user1.adminCard();
user1.logMe()
user2.logMe();

console.log(user1 instanceof Admin);
console.log(user1 instanceof User);

console.log(user2 instanceof User);
console.log(user2 instanceof Admin);