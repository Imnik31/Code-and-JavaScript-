//object litrals

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);              // this means current context
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);          // when we use this in global object it willgive us {}, but when we use this in browser it will give window object


const promiseOne= new Promise()         // new is the constructor function constructor fucntion gives us a new instance everytime

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("nikhil", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);                           // constructor is property which is reference for itself like User
//console.log(userTwo);