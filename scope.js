// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a);  //this is not decreare as a global variable so it will show an error because this is decreare as a scope variable

// console.log(b);  //this is also not decreare as a global variable so it will show an error because this is decreare as a scope variable

// console.log(c); // var is  global, so it can be accessed outside the block scope

function one() {
  const firstname = "John";

  function two() {
    const lastname = "Wick";
    console.log(firstname);
  }
    // console.log(lastname);

  // two();
}

// one();

const Wick = true
if(Wick === true){
  const username = "John Wick"
  if(username === "John Wick"){
    const skills = " has best Shooting Skills"
    console.log(username + skills);
  }
}
else{
  console.log("not found");
}