
// Dates

const date = new Date()

// console.log(date);

// console.log(`Change into toString ${date.toString()}`);

// console.log(`Change into toDateString ${date.toDateString()}`);

// console.log(`Change into toISOString ${date.toISOString()}`);

// console.log(`Change into toJSON ${date.toJSON()}`);

// console.log(`Change into toLocaleDateString ${date.toLocaleDateString()}`);



let newdate = new Date(2001, (11-1), 21)

// console.log(newdate.toDateString());


let time = Date.now()

// console.log(time);

let newDate = new Date()

// console.log(newDate.getMonth());

// console.log(newDate.getDay());

// console.log(newDate.getHours());

// console.log((newDate.getHours()) ,(newDate.getMinutes()), newDate.getSeconds());


console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));