let myDate= new Date()    // date is an object in js
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toJSON())

let myCreatedDate= new Date(2023,0,23)
console.log(myCreatedDate.toDateString());     // in js  array month starts with 0

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());    // to compare the date with other time

console.log(Math.floor(Date.now()/1000)); //convert the date into seconds


myDate.toLocaleString('default', {   //most important method
    weekday:"long"                       //ctrl+space for suggesions
})