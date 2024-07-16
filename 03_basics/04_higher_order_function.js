// fuction that takes function as an arguments called higher order function
// where we can take time
// we can also return a function from function


function add(a,b, cb){
    let result= a+b
    cb(result)
}

// console.log(add(2,4));

add(2,3, function(val){
    console.log(val);
})