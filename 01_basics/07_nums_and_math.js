const score=300
console.log(score);

const balance = new Number(100)     // define object by new which is number type.
console.log(balance)


console.log(balance.toString().length)
console.log(balance.toFixed(1))         // for the precision value in e-commerce product


const hundreds= 1000000
console.log(hundreds.toLocaleString('en-IN'))   // for indian value




//****************************************maths*************************** */

console.log(Math.PI)
console.log(Math.round(34.4))

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)   // value will return btw 1-9

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)    //to get the perticuler range