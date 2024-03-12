
class User {
    constructor(username) {
        this.username = username; 
    }

    logMe() {
        console.log(`Username is: ${this.username}`); 
    }

    static createId() {
        return `12345`; 
    }
}

const hello = new User("John"); 

hello.logMe(); 

console.log(hello.createId());