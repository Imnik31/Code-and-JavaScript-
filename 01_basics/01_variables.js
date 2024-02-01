const accoutId = 12345
let accoutEmail = "nikhil@gmail.com"
var accoutPassword = "11111"
accoutCity ="Kanpur"    //can use this declaration too
let accountState

// accoutId = 12

console.log(accoutId);
/*prefer not to use var 
because of issue in block scope and functional scope */
accoutEmail="nik@gmail.com"
accoutPassword="23456"
accoutCity="lucknow"

console.table([accoutId, accoutEmail, accoutPassword, accoutCity, accountState])    //run at tabuler form not seperatly