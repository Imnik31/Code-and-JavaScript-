//  Immediatly invoked function expressions(IIFE)
// to remove the global scope pollution
(function chai(params) {    // named IIFE
    console.log(`DB CONNECTED`);
})(); 

// it is compulsory to use semicolon(;) when one function ends otherwise it will create error

(()=>{      // Unnamed IIFE
    console.log(`DB CONNECTED2`);
})();

((name)=>{
    console.log(`DB CONNECTED3 ${name}`);
})("nikhil")