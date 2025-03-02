//Arrays
const myArray = []
// console.log(myArray)

//Adding Element
myArray[0]="Akshaya"
myArray[1]="Developer"
myArray[2]=99
myArray[3]=true
console.log(myArray)

//length
console.log(myArray.length)

//print last element
console.log(myArray[myArray.length-1])

// Adding in last Elements
myArray.push("hello");
console.log(myArray);
myArray.pop();
console.log(myArray);

// Adding in first
myArray.unshift("hi");
console.log(myArray);
myArray.shift();
console.log(myArray);

const lastItem = myArray.push("FD");
console.log(lastItem)
console.log(myArray)