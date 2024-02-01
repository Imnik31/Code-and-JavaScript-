
var a =200       //global scopes

if (true) {
    let a= 20
    const b=10      //local scopes
    var c =30        // creates the problem in local scopes.
}

//console.log(a);
//console.log(b);
//console.log(c);

function one() {
    const username="nikhil"


    function two() {
        const website="youtube"
       // console.log(username);
    }
    //console.log(website)
    two()
}

one()

if (true) {
    const username="nikhil"
    if (username==="nikhil") {
        const website="youtube"
       // console.log(username+website);
    }
   // console.log(website);              not accessible
}

//console.log(username);




function addone(num) {
    return num+1
}

console.log(addone(5))


const addtwo = function(num){          // expresions
    return num +2
}

console.log(addtwo(5))


// *********************function hoisting***********************************

console.log(addone(5))
function addone(num) {
    return num+1
}


console.log(addtwo(5))
const add3 = function(num){          // expresions
    return num +2
}

