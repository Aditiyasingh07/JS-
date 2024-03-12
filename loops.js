// for of


// const hero = ["shaktiman", "raj", "doga", "krrish"]
// for (const heros of hero) {
//     console.log(heros);
// }


// const arr = "Hello Boi!"
// for (const hello of arr) {
//     console.log(hello);
// }

// Map
const map = new Map()

map.set("name", "Shakti")
    .set("age", 25)
    .set("country", "India")

    // console.log(map);


// for (const [key, value] of map) {
//     console.log(key, "-" ,value);
// }  


// const lang = {
//      js: "javascript",
//      cpp: "C++",
//      rb: "ruby",
//      swift: "swift"
// }

// for (const key in lang) {
//     console.log(lang[key], " - ", key);
// }

// let lang = ["js", "java", "cpp", "py"]

// for (const key in lang) {
//     console.log(`${key} Index value is : ${lang[key]}`);
// }


const code = ["java", "python", "javascript", "ruby"]

// code.forEach(function (lang) {
//     console.log(`I can write code in ${lang}`)
// })

// code.forEach((yep)=>{
//     console.log(`I can write code in ${yep}`);
// })

// code.forEach(hello)

// function hello(item) {
//     console.log(`Hello ${item}`);
// }


// code.forEach((yep, ind, ar)=>{
//         console.log(yep, ind, ar);
//     })


const hycode = [
    {
        langName: "Javascript",
        fileName: "js"
    },
    {
        langName: "Python",
        fileName: "py"
    },
    {
        langName: "C++",
        fileName: "cpp"
    }
]

hycode.forEach((item)=>{
    console.log(item.fileName);
})