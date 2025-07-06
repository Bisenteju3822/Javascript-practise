//primative


//7 types :String,Number,Boolean ,null ,undefined,symbol


//bigint


//Reference (non primitive)
//Array ,objects,functions
const firstvalue=100.3;
//console.log(typeof(firstvalue));

const first  =Symbol("1234");
const second =Symbol("1234");
console.log(first===second?"true":"false");


const array=["teju","tushar","pallav"];
console.log(array[0]);
{

}
//"=" which is used to assign the value
//"=="  lose comparision 
//"===" strict comparision 
//obj
let obj={
    "name":"teju",
    "age":22,
    "color":"white"
}

console.log(obj.name)

//function 

// 1.// function  exporession
// //const express=function(){
//     const a=22;
//     const b=33;
//     console.log(a+b) 
// }//
//express()//
// simple function
function greet (){
 
}

//arrow function
const arrow=()=>{
    console.log("arrow function")
}
arrow()
// typeof "John"         // Returns string
// typeof ("John"+"Doe") // Returns string
// typeof 3.14           // Returns number
// typeof 33             // Returns number
// typeof (33 + 66)      // Returns number
// typeof true           // Returns boolean
// typeof false          // Returns boolean
// typeof 1234n          // Returns bigint
// typeof Symbol()       // Returns symbol
// typeof x              // Returns undefined
// typeof null           // Returns object
