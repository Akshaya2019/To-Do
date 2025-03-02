//objects =====> key:value
// const myObj = {name:"Akshaya"};
// console.log(myObj);
// console.log(myObj.name) //Access value

//Advance
const myObj = {name:"Akshaya"};
const anotherObj = {
    subscriber:true,
    no:88,
    content:{
        earn:"JS",
        grow:"Save"
    },
    friends:["me","you"],
    action: function(){
        return "Hello World!";
    }
};
console.log(myObj);
console.log(anotherObj.friends[0]);
console.log(anotherObj.content.earn);
console.log(anotherObj["subscriber"]);
console.log(anotherObj.action());

//to get inner object key in function

const otherObj = {
    subscriber:true,
    no:88,
    content:{
        earn:"JS",
        grow:"Save"
    },
    friends:["me","you"],
    action: function(){
        return `Earn by learning ${this.content.earn}`;
    }
};
console.log(otherObj.action());


//New
const vehicle = {
    doors:2,
    engine:function(){
        return "Sound";
    }
};
console.log(vehicle.engine());
//inherit propery
const car = Object.create(vehicle);
car.wheels=4;
car.engine=function(){return "cgyuj"}
console.log(car);
console.log(car.engine());



// New 2
// const movie = {
//     actor:"Kavin",
//     music:"arr",
//     director:"Lokesh",
//     producer:"Anbu"
// };
// delete movie.producer;
// console.log(movie.hasOwnProperty("producer"))
// console.log(Object.keys(movie));
// console.log(Object.values(movie));

// for (let job in movie){
//     // console.log(movie[job])
//     console.log(`${job}, it's ${movie[job]}`)
// }


//Destructuring Object
const movies = {
    actor:"Kavin",
    music:"arr",
    director:"Lokesh",
    producer:"Anbu"
};
// const{music: myFavMusicDirector, director:myFavD}=movies;
// console.log(myFavMusicDirector, myFavD)
const {actor,music,director,producer}=movies;
// console.log(music)
function sings({music}){
    return music
};
console.log(sings(movies));

