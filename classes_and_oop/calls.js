function setUserName (username){
    this.UserName = username
}

function createUser (username, email, password) {

    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const user = new createUser("John Doe", "john@doe.com", "123456")
console.log(user);