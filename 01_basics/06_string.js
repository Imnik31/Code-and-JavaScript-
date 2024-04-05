const name= "nikhil"
const repoCount=50
//previous days
console.log(name+ repoCount+ " value");
//now days  String interpolation
console.log(` my name is ${name} and my repoCount is ${repoCount}`)


//another way to difine strings
const gameName=new String('nikhil')   //new to identify objects and run this syntax in console of browser and get results.
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.indexOf('h'));

const newString= gameName.substring(0,4); //it does not take negative values
console.log(newString)

const anotherstring=gameName.slice(0,4)
console.log(anotherstring)
const anotherString=gameName.slice(-5,4)
console.log(anotherString)

const newString1="    nikhil         "
console.log(newString1)
console.log(newString1.trim())


const url ="https://nikhil.com/nikhil%20katiyar"
console.log(url.replace('%20', '-'))