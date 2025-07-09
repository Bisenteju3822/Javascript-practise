const color=["blue","white","green","orange"]
const anotherocolor=["pink","purple","silver"]
//color.push(anotherocolor)
//console.log(color)


const allnew=color.concat(anotherocolor)
//console.log(allnew)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
//console.log(real_another_array)
//console.log(Array.isArray("Hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({
    name:"teju",
    age:"22"
}))// intersting because  it can take as a string and the list but object is not iteratable 


//Plain Objects 👉 These are not iterable in the same way. They don’t have built-in rules that say “go over each key-value pair like a list,” unless you manually extract keys, values, or entries.

//Strings and Arrays 👉 These are iterable—JavaScript knows how to go through each character or item one by one.
