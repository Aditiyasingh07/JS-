// const pro = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network

//     setTimeout(function(){
//         console.log((`Async task is compelete`));
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log('Promise resolved');
// })

// pro.then(function(){
//     console.log('Promise resolved');
// })

// const newone = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({name: 'John', age: 32, lastname: "Wick"})
//     }, 1000)
// }).then(function(user){
//      console.log(user);
// })


// const newone = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({name: 'John', lastname: "Wick"})
//         }
//         else{
//             reject('Error: 😒')
//         }
//     }, 1000)
// }).then(function(user){
//     //  console.log(user);
//      return user.name
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Final block promise are resolved either rejected!");
// })


const profive = new Promise((resolve, reject)=>{
    setTimeout(function(){
                let error = true
                if(!error){
                    resolve({name: 'John', lastname: "Wick"})
                }
                else{
                    reject('Error: 😒')
                }
            }, 1000)
})  

// async function consumePro(){
//    try {
//     const res = await profive
//     console.log(res);
//    } catch (error) {
//     console.log(error);
//    }
// }

// consumePro()


// async function getapi() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(res);
//     const data = await res.json();
//     console.log(data);
//     } catch (error) {
//         console.log(`E: `, error);
//     }
// }

// getapi()

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log(error);
})