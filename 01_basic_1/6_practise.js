//Memory
//JS use two type of memory 

//Stack
//Stack use for primative datatypes

//heap

//Heap basically uses non-primative data type


//when we use stack  memory we get the copy of the variable
//when we use the heap memory then we get the refernce of the variable 

let first ="teju";
let second =first;
 second="nanu";

 console.log(second)
 console.log(first)

let firstname={
    "name":"teju",
    "email":"teju@gmail.com"

}

const secondname=firstname
// secondname={
//     "email":"tejasavebisen@gmail.com"
// }

console.log(secondname)