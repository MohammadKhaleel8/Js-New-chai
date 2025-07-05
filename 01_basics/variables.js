const account_Id = 144553 //cannot change if you change const
let account_Email = "Khaleel3498@gmail.com" // we need to use let only
var account_Password = "test123" //should not use, because it does not know scope if(condition){}
account_City = "Pulivendula"

let accountState;

/*
preferred not to use var beacause of issue in scope
*/

// account_Id = 2 //not allowed

account_Email = "test@mail"
account_Password = "kjew123"
account_City = "kadapa"

console.table([account_Email,account_Password,account_City,accountState]);

