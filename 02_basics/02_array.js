const marvel=["thor","spiderman", "ironman"]
const dc=["superman", "batman"]

//marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][1])

 const allhero=marvel.concat(dc)
console.log(allhero)

const all_new_hero=[...marvel, ...dc]        //spread
//console.log(all_new_hero)

const another_array=[1,2,3,[4,5,6],7,[6,7,[5,9]]]       // array in array
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("nikhil"))
console.log(Array.from("nikhil"))
console.log(Array.from({name:"nikhil"}))


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))

