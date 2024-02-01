//object literals
const mySym=Symbol("key1")
const Jsuser={
    name:"nikhil",
    "full name": "nikhil katiyar",
    [mySym]:"key1",
    age:23,
    location:"kanpur",
    email:"nikhil@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["monday", "saturday"]

}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])  // second method to print
// console.log(Jsuser[mySym])
// console.log(Jsuser["full name"])

Jsuser.email="nikhilkatiyar@gmail.com"  // to change or overright the value

//Object.freeze(Jsuser) // to freeze the object

Jsuser.greeting= function(){
    console.log("hello js user");
}
Jsuser.greeting2= function(){
    console.log(`hello js user , ${this.name}`);
}
console.log(Jsuser.greeting())
console.log(Jsuser.greeting2())