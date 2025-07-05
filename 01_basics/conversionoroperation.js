//Important topic

// "33" => 33

// "33abc"  => NaN

//true => 1, false =>0


let isLoggedIn = 1


let booleanIsLoggedin = Boolean(isLoggedIn)

console.log(booleanIsLoggedin);

let someNumber = 33

let stringNumber = String(someNumber);

console.log(stringNumber);

console.log(typeof stringNumber);


// operation ///

let str1 = "kimi";

let str2 = " khaleel"

let str3 = console.log(str1 + str2);

console.log( "1" + 3);

console.log(1 + "2");

console.log( 1 + 2 + "3");

console.log("1" + "2");


console.log(+true);

console.log(+"");


//prefix and post fix

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
