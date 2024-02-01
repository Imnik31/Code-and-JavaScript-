//primitive data types (this type of data type is call by value)
//string
//number
//bigint
//boolean
//null
//undifined
//symbol

// const id= symbol('123')
// const anotherId= symbol('123')
// console.log(id === anotherId);

//non primitive or reference type

//array
//object
//function

//*************************************************************/

// stack(primitive) -> we get only copy of this original files

let myYoutubeName = "Nikhilkatiyar"
let anotherName =myYoutubeName
anotherName="nik"
console.log(myYoutubeName);
console.log(anotherName);
//heap(non primitive)  -> we get original value of the file

let user1={
    email:"user1@gmail.com",
    pass:123
}

let user2=user1

user2.email="nikhil@gmail.com"
console.log(user1.email)
console.log(user2.email)
   

