const accountId =144553
let accountEmail ="xyz@gmail.com"
var accountPassword ="12345"
accountCity ="Mumbai"
let accountState;


// accountId=2 // not allowed

accountEmail ="abc@gmail.com"
accountPassword="21212121";
accountCity ="Mayanagri"
// console.log(accountEmail,accountPassword,accountCity);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])