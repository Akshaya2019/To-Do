//Asynchronous JS


//Synchronous Method
// console.log("First");
// console.log("Second");
// console.log("Third");

//Asynchronous Method
console.log("First");
//set timeout for 2 sec
// setTimeout(()=> console.log("Second"),2000);
// console.log("Third")

//callback- we don't use
//refer freecodecamp

//Promises
// 3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve,reject)=>{
    const error=true;
    if(!error){
        resolve("yes! resolved the promise")
    }
    else{
        reject("No! rejected the promise")
    }
})

console.log(myPromise)
//use thenabels for value print
myPromise
.then(value => {
    return value + " welcome"
})
.then(newValue => {
    console.log(newValue)
})
.catch(err => {
    console.log(err)
})

//instead of .then, use async



