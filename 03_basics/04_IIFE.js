// IIFE to add numbers


// (function add(a,b){
//     // return a+b
//     console.log(a+b);
    
// })(2,6)

// (function say(){
//     console.log("hey");
    
// })()

// //async

// const data=(async()=>await fetch())()


// For ATM purpose

const atm=(function(initialBalance){
    let balance=initialBalance       // private variable
    function withdraw(amt){     // closure concept
        if(amt>balance){
            return "are you kidding?";

            
        }
        else{
            balance-=amt
            return balance
        }
    }
    return {withdraw}

})
const Nikhil=atm(1000)
console.log(Nikhil.withdraw(100));


