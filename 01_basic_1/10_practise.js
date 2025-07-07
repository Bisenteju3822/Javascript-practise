//Dates in javascript
let myDate =new Date()

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof(myDate))
let mycreateDate=new Date(2027,0,23,9,4)
console.log(mycreateDate.toLocaleString())

let secondDate=new Date("01-24-2025")
//let myTimeStamp=Date.now()
console.log(secondDate)
let thirdnumber=new Date();
console.log(secondDate.getDay())
secondDate.toLocaleString(
    "default",{
        weekday:"long"
    }
)