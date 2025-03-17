//Asynchronous JS


//Synchronous Method
console.log("First");
console.log("Second");
console.log("Third");

//Asynchronous Method
console.log("First");
//set timeout for 2 sec
setTimeout(()=> console.log("Second"),2000);
console.log("Third")

//callback
