const user ={
    username:"nikhil",
    price:999,


    welcomeMsg: function() {
        console.log(`${this.username}, welcome to website`);   // this refers to current context

        console.log(this);   // this console gives us current object
    }
}

// user.welcomeMsg()

// user.username="sam"      // current context due to this
// user.welcomeMsg()


console.log(this);     // console give us empty object



// function chai(params) {
//     let username="nikhil"
//     console.log(this.username);   give us undifined because it is not support in functions
// }

// chai()

// const chai= function(params) {
//     let username="nikhil"
//     console.log(this.username);   give us undifined because it is not support in functions
// }

// chai()
//********************************arrow function***************************** */


const chai= () =>{
     let username="nikhil"
     console.log(this.username);   //give us undifined because it is not support in functions
 }

//chai()

// const addTwo= (num1, num2)=>{
//     return num1+num2             // expicit return
// }

// console.log(addTwo(2,4));



//***********implicit return********************* */
//const addTwo= (num1, num2)=>  num1+num2

//console.log(addTwo(2,4));

// const addTwo= (num1, num2)=>  (num1+num2)

// console.log(addTwo(2,4));

const addTwo= (num1, num2)=>  ({username:"nikhil"})

console.log(addTwo(2,4));