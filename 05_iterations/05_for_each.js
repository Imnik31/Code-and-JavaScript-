const coding=["js,", "py","java"]
//  coding.forEach( function (value){                     // call back function does not have any name
//     console.log(value);
//  })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printme(item) {
//     console.log(item);
// }

// coding.forEach(printme)

coding.forEach((item,index, arr)=>{
    console.log(item,index,arr);
})




// object inside an array
const mycoding=[
    {
    languagename:"javascript",
    languagefilename:"js"
},
{
    languagename:"python",
    languagefilename:"python"
},
{
    languagename:"java",
    languagefilename:"java"
},
]

mycoding.forEach((item)=>{
    console.log(item.languagename);
})