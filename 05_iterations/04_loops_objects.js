// for in loop it mostly used on objects.

const myobjects={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}

for (const key in myobjects) {
   //console.log(key);
  // console.log(`${key} shortcut is for ${myobjects[key]}`);
}


const programming=["js,", "py","java"]

for (const key in programming) {
   // console.log(key);   // for key only
    //console.log(programming[key]); // for value
}


// const map= new Map()   //map are iterable
// map.set('IN', "india")
// map.set('USA', "America")
// map.set('fr', "France")


// for (const key in map) {
//     console.log(key);
// }