
let myDate = new Date();

console.log(myDate);

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate.toLocaleString());

console.log(typeof myDate);


let myCreateDate = new Date(2023,0,23) //month will start from 0 in JS

console.log(myCreateDate.toDateString());



let myNewCreateDate = new Date(2023,0,23,6,2);

console.log(myNewCreateDate.toDateString());

console.log(myNewCreateDate.toLocaleString());

console.log(myNewCreateDate.toLocaleDateString());

