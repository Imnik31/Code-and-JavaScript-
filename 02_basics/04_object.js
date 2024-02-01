//singalton

//const tinderUser= new Object()  // singalton object
const tinderUser={} // non singalton object
tinderUser.id="123asd"
tinderUser.name="nikhil"
tinderUser.isLoggedIn=false
//console.log(tinderUser)

const regularUser={
    email:"nk@gmail.com",
    fullname:{
        userfullName:{
            firstname:"nikhil",
            lastname:"katiyar"
        }
    }
}

console.log(regularUser.fullname.userfullName.firstname);

//combine to objects
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1, obj2}
//const obj3= Object.assign({}, obj1, obj2)

const obj3={...obj1, ...obj2}     //spread
//console.log(obj3)


//array of objects for the database purpose
const users=[
    {

    },
    {

    },
    {

    },
]
//*************most important******************** */
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));   //its return type is Array
console.log(Object.values(tinderUser));   //its return type is Array
console.log(Object.entries(tinderUser)); // least use  //its return type is Array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // give the boolean results.


//************************destructuring********************************* */

const course={
    courseName:"js in by Nikhil",
    price :"999",
    courseInstructor:"nikhil"
}

//course.courseInstructor
 
const {courseInstructor:instructor}= course    // destructuring syntax 
//console.log(courseInstructor);
console.log(instructor);