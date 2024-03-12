
class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    // getter and setter use for data security and also both at a time
    get password(){
        return this._password.toUpperCase();
    }

    set password(a){
        this._password = a
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(e){
        this._email = e
    }
}

const user1 = new User ("John", "new@google.com", "Password123");

// console.log(user1.password);
// console.log(user1.email);


// ************************Also we use like this************************

function User1(username, password) {
    this._username = username
    this._password = password

    Object.defineProperty(this, 'username', {
        get: function(){
            return this._username.toUpperCase();
        },
        set: function(u){
            this._username = u
        }

    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(p){
            this._password = p;
        }
    })
}

const user2 = new  User1("John Wick", 12345)
const user3 = new User1("Mr. Wick", "WickedPass")

console.log(user2.username);
console.log(user3.password);