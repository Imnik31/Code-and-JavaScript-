//const useremail = "nik@gmail"
// if (useremail) {
//     console.log("got user email");
// } else {
//     console.log("do not have");
// }


// falsy value
// false, 0, -0, bigInt, "", null, undifined, NaN, 0n

// truthy value
// "0", "false", " ", [], {}, function(){}

// const useremail = []
// if (useremail.length===0) {
//     console.log("array is empty");
// }

const emptyObject={}
if (Object.keys(emptyObject).length===0) {     // object convert into array
    console.log("object is empty");
}


// nullish coalescing operator(??):  null undifined

let val1;
//val1=5??10
//val1=null??23
//val1=undefined??80



console.log(val1);


//********terniary operator********** */

//condition ? true: false

const iceTea=100
iceTea>=80 ? console.log("less than 80") : console.log("more than 80");