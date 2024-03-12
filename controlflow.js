//  ------------------------if

// if(3 != 2){
//     console.log("Hello Boi!");
// }


// <, >, <=, >=, ==, === (this is compare value and type also)

// if (3 === "3") {
//     console.log("these are same");
// }
// else{
//     console.log("this is not same both have same value but different types");
// }

// const score = 500
// if (score > 200) {
//     let power = "super speed"
//     console.log(`user power: ${power}`);
// }

// console.log(power);



//  const newscore = 200

//  if(newscore > 100) console.log(`Score is ${newscore}`);

// if (newscore < 100) {
//     console.log("Less then 100");
// }else if (newscore < 150) {
//     console.log("Less then 150");
// }else if (newscore < 210) {
//     console.log("Less then 210");
// }
// else {
//     console.log("Less the All");
// }


const userloggedin = true
const debitcard = true
const loggedinfromGoogle = false
const loggedinfromEmail = true

// if (userloggedin && debitcard && 2 === "2") {
//     console.log("You can buy anything you want!");
// }

// if (loggedinfromGoogle || loggedinfromEmail) {
//     console.log("Hep! yor are loggedIn");
// }


// ------------------------------Switch case

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const months = 10

// switch (months) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("Mar");
//         break;
//     case 4:
//         console.log("Apr");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("Jun");
//         break;
//     case 7:
//         console.log("Jul");
//         break;
//     case 8:
//         console.log("Aug");
//         break;
//     case 9:
//         console.log("Sep");
//         break;
//     case 10:
//         console.log("Oct");
//         break;
//     case 11:
//         console.log("Nov");
//         break;
//     case 12:
//         console.log("Dec");
//         break;
//     default:
//         console.log("Invalid month number.");
//         break;
// }

const userEmail = "new@google.com"
// const userEmail = ""
// const userEmail = []

// if (userEmail) {
//     console.log("Got user's email address!");
// }
// else{
//     console.log("Don't have user email!");
// }

// falsy values - false, 0, -0,  BigInt 0n, "", null, undefined, NaN

// truthy values - "0", "false", " ", [], {}, function(){}

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0 ) {
//     console.log("Object is empty");
// }

// Nullish Coasledcring Operator (??): null undefined
 
// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10


// console.log(val1);

// -----------------------Terniary Operator

// condition ? true : false

const iceTeaPrize = 200
iceTeaPrize <= 180 ?  console.log("less then 180") : console.log("more then 180");