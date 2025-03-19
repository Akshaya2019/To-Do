// const myPromise = new Promise((resolve,reject)=>{
//     const error=false;
//     if(!error){
//         resolve("yes! resolved the promise")
//     }
//     else{
//         reject("No! rejected the promise")
//     }
// })

// const next = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve("My Next Promise")
//     },3000)
// })
// next
// .then(value => {
//     console.log(value)
// })
// myPromise
// .then(value => {
//     console.log(value)
// })




//pending

// const users = fetch("https://jsonplaceholder.typicode.com/users")
// .then(response =>{
//     // console.log(response)
//     return response.json() // for readable
// }).then(users=>{
//     // console.log(users) ------->2
//     users.forEach(user => {
//         console.log(user)
//     })
// })
// console.log(users)


//async & await

// const userss = async ()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const userData =await response.json()
//     console.log(userData)
//     return userData
// }
// userss()

//2
const myUsers = {
    userList:[]
}
const userss = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const userData =await response.json()
    // anotherFun(userData)
    return userData
}

const anotherFun = async () => {
    const data = await userss()
    myUsers.userList=data
    console.log(myUsers)
    return data
}

anotherFun()
console.log(myUsers) // Array will empty becaz await can't wait, it is global