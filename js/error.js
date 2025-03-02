//Error handling
"use strict"; // use rules... in this we dont use var, let const... if you use var let const it will work

// reference error
// const variable = "Akshaya";
// console.log(variable)

//syntax error
// Object..create()

//Type Error
// variable ="Hello";

//To handle the error by using try catch & finally
// const makeError = () => {
//     try{
//         const name = "Akshaya";
//         name = "helo";
//     }
//     catch(err){
//         console.error(err.stack);
//         console.warn(err);
//         console.table(err)
//     }
// };
// makeError();


//Example
// const makeError = () => {
//     try{
//         throw new customError("This is a custom Error")
//     }
//     catch(err){
//         console.error(err.stack);
//     }
// };
// makeError();
// function customError(message){
//     this.message=message;
//     this.name = "customError";
//     this.stack=`${this.name}:${this.message}`;
// }


//finally
const makeError = () => {
    let i=0;
    while(i<=5){
    try{
        if(i%2!=0){
            throw new Error ("Odd Number");
        }
        console.log("Even Number")
    }
    catch(err){
        console.error(err.message);
    }
    finally{
        console.log("...finally");
        i++;
    }
}
};
makeError();
