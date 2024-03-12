
// const code = ["js", "python", "ruby", "java"]

// const values = code.forEach(function (lang) {
//     console.log(lang);
//     // In forEach don't have return values
// })

// console.log(values);


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const values = num.filter((nu) => {
//     return nu * 2 > 8;
// })

const newnum = []

num.forEach((item)=>{
    if(item >= 5){
        newnum.push(item)
    }
})
// console.log(num);
// console.log(newnum);
// console.log(values);


// const newNum = num.map((item)=>{
//    return item + 10
// })

const newNum = num.map((item)=>{
    return item*10
}).map((item)=>{
    return item + 1
}).filter((item)=>{
    return item <= 50
})

// console.log(newNum);


const num1 = [1,2,3,4]

const sumofnum = num1.reduce((acc, curval)=>{
    // console.log(`acc: ${acc} and curval: ${curval}`);
    return acc + curval
}, 1)

// console.log(sumofnum);


const card = [
    {
        course: "Web dev",
        prize: 1200
    },
    {
        course: "Data base",
        prize: 800
    },
    {
        course: "UI/UX",
        prize: 1600
    }
]

const add = card.reduce((acc, items) => {
    return acc + items.prize
}, 0)

console.log(add);