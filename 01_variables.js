const accountId = 155656    // This is a constant , It will not change 
let accountEmail = "xyz@gmail.com"
var accountPassword = "xyz@1234"
accountCity = "Delhi"        /* this is a veriable defined but not correct way 
                             of defining a veriable in javaScript  */

let accountState;  // I haven't gave any value to this variable so it will 
// give "undefined" as output.                           
n
console.log([accountId, accountEmail, accountPassword, accountCity, accountState])
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// changing veriables stored values

//accountId = 25869  
/* This will give error if i include in this code because
   this constant variable , whose stored value can't be changed.
*/

accountEmail = "abc@gmail.com"
accountPassword = "abc@12345"
accountCity = "Jaipur"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/*  
 Prefer not to use var because of issue in block scope and functional scope

*/