let score ="33"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)    // to convert a string to number
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"->33
//"33asc"->NaN
//true->1


let isLoggedIn = 1
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);

//1->true: 0->false
//""->false
//"nikhil"->true


// operations

let value =3
let negValue= -value
console.log(negValue);

//some other operations

let str1= " hello"
let str2 = " nikhil"
let str3 = str1+str2
console.log(str3)

//some tricky things

// console.log("1" +2);  =>12
// console.log(1 +"2");  =>12
// console.log("1" +2 + 2); =>122
// console.log(1 +2 + "2"); =>32   intresting   :)


//  console.log(+true);
//  console.log(+"");

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion