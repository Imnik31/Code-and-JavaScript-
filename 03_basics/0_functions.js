function saymyName(){
    console.log("n");
    console.log("i");
    console.log("k");
    console.log("h");
    console.log("i");
    console.log("l");
}

saymyName   // fucntion reference
saymyName()// function execution


// function addTwoNumbers(number1, number2,){             // function and its parameters in ()
//     console.log(number1+ number2);                    // to print above number
// }

// addTwoNumbers(1,2,)                                    // function call with arguments in ()

function addTwoNumbers(number1, number2,){             
    let result = number1+number2
   // console.log("nikhil");             // acceptable 
    //return result      or 
    return number1+number2
    console.log("nikhil");            // not acceptable after return statement nothing will execute
}
const result = addTwoNumbers(3,5)
// console.log("result:", result);



function loginUser(username="nik") {
    if (username===undefined) 
    {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
    
}

// console.log(loginUser());
// console.log(loginUser("nikhil"));

//********************function for shopping purpose************** */

function calculateCartPrice(...num1)   // ... is rest or spread operator to pass multiple value
    
{
    return num1
}

console.log(calculateCartPrice(200, 400, 500));


//object to paas in a function

const user ={
    username: "nikhil",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username}  and price is ${anyobject.price}`);  
}

//handleObject(user)
handleObject({
    username:"sam",
    price:299
})

//pass array  
const mynewarray=[200, 400, 500]

function returnsecondvalue(getarray){
    return getarray[2]


}

console.log(returnsecondvalue(mynewarray));