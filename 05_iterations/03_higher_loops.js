//for of loop


const arr=[1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}


const greetings="hi nikhil"
for (const greet of greetings) {
   // console.log(greet);
}

// maps works as key value pair    // it is know for its unique value and thier orders

const map= new Map()   //map are not iterable
map.set('IN', "india")
map.set('USA', "America")
map.set('fr', "France")

//console.log(map);

for (const [key, value] of map) {
    //console.log(key, '-' , value);
}


const myobject={     // obejcts are not iterable in for of loops
    game1:'nfs',
    game2:'pubg'
}
// for (const [key, value] of myobjectobject) {
//     console.log(key, '-', value);
// }