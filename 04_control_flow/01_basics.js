//if

if (true) {
    //code to be executed
}

if (true) {
    console.log("true");
} 
else {
    console.log("false");
}

// block scope

// const score =200
// if (score>200) {
//     let power="fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

const userlogIn=true
const debitCard=true

if (userlogIn && debitCard) {
    console.log("allow to buy courses for free");
}