const myArr=[0,1,2,3,4,5]
const myArr2= new Array(1,2,3,4)
//console.log(myArr[1])


// array methods
myArr.push(6)
//console.log(myArr)


myArr.unshift(8)     // add value in the starting of te array
//console.log(myArr)

myArr.shift()
//console.log(myArr)     //remove the value from starting of the array
//console.log(myArr.includes(7))     //value exist or not
//console.log(myArr.indexOf(7))     //to know te index 

const newArr=myArr.join()
//console.log(myArr)
//console.log(newArr)


//slice, splice

console.log("A  ", myArr)

const myn1=myArr.slice(1,3)   // last  does not range include
console.log(myn1)

console.log("B", myArr)


const myn2=myArr.splice(1,3)   // last range does  include and manupulate the original array which means it remove the splices part from the original array
console.log("c", myArr)
console.log(myn2)

