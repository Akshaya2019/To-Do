//JSON Javascript Object Notation
//text format
//to send and recieve data in many programming languages

const myObj = {
    name : "Akshay",
    content : ["developer","bussiness","worker"],
    sub : function(){
        console.log("Thanks for your response")
    }
}
console.log(myObj)
console.log(myObj.name);
myObj.sub();

//send data
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON); //function will not change as text format only for object
console.log(sendJSON.name);
console.log(typeof myObj);
console.log(typeof sendJSON);

//recieve data
const recieveJSON = JSON.parse(sendJSON);
console.log(recieveJSON);
console.log(typeof recieveJSON);