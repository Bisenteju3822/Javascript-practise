
///Number////
const score =450;
console.log(score)

const score1= new Number(55055)
console.log(score1)

console.log(score1.toString().length);
console.log(score1.toFixed(1));

const newnumber=1245.666656
console.log(newnumber.toPrecision(2));


const hundred =1000000
console.log(hundred.toLocaleString('en-IN'))


///======+++Maths+++++///
//Maths is the library which comes with the js bydefault

//basically math is object in which many property there

// console.log(Math);
// console.log(Math.abs(-4))//convert to the  positive but not convert to the positive to the negative
// console.log(Math.abs(4))
// console.log(Math.round(4.4))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.7))
// console.log(Math.min())
// console.log(Math.random())
console.log(Math.random())//THis gives the random value in the range of 0-1
console.log((Math.random()*10)+1)//THis gives the random value in the range of 0-1

let min =10;
let max=20;
console.log(Math.floor (Math.random()*(max-min+1))+min)//this give in range of min and max