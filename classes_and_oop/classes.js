 
class User {
    constructor(username, email, password ){
        this.username = username
        this.email= email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUpperCase (){
        return `${this.username.toUpperCase()}`
    }
}

const anotheruser = new User("John", "hello@google.com", 12345)

console.log(anotheruser);
console.log(anotheruser.encryptPassword());
console.log(anotheruser.changeUpperCase());

// console.log(User);