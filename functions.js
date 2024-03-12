function name() {
     console.log("A");
     console.log("B");
     console.log("C");
     console.log("D");
}

// name()

// function  sum(a, b) {
//     console.log(a+b);
//     return a+b
// }

function  sum(a, b) {
    let result = a+b;
    return result //after the execution of this block it will return the value
    console.log("hello"); //not executed after returning statement
}
const plus = sum(2,5)
// console.log("The sum of a and b is : ", plus);

// function loginuser (username){
//     if(username === undefined){
//         console.log(`plz enter your username`);
//         return
//     }
//     return `${username}, you are logged in.`
// }


//we are also use like this just using ! operator
function loginuser (username){
    if(!username){
        console.log(`plz enter your username`);
        return
    }
    return `${username}, you are logged in.`
}

// console.log(loginuser());


 function calculatecartprize(...num1){
    return num1 
 }

//  console.log(calculatecartprize(5, 50, 500, 5000, 50000));



const user =  {
    username: "naruto",
    prize: 255
}

function handelObjects(anyobjects){
    return `Username is ${anyobjects.username} and prize of toy is ${anyobjects.prize}`
}

console.log(handelObjects(user));
console.log(handelObjects({
    username: "newone",
    prize: 199
}));

const array = [10,100,1000,10000]

function newarray(getarray){
    return getarray[2]
}
console.log(newarray(array));