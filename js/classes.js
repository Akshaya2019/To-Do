const myPizza ={
    size:"medium",
    crust: "original",
    bake: function(){
        return console.log(`Baking a ${this.size} ${this.crust} crust pizza`);
    }
};
myPizza.bake();
// It used to create a object by using template




// class Pizza {
//     constructor(typePizza,sizePizza,crustPizza){
//         this.type= typePizza
//         this.size = sizePizza;
//         this.crust = crustPizza;
//     }
//     bake(){
//         return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`)
//     }
// }
// const anotherPizza = new Pizza("margarita","small","thin");
// anotherPizza.bake();
// const anPizza = new Pizza("Pepperonni","medium","original");
// anPizza.bake();


// class Pizza {
//     constructor(typePizza,sizePizza,crustPizza){
//         this.type= typePizza
//         this.size = sizePizza;
//         this.crust = crustPizza;
//         this.toppings = "olives";
//     }
//     getToppings(){
//         return this.toppings;
//     }
//     setToppings(toppingsPizzaa){
//         this.toppings = toppingsPizzaa;
//     }
//     bake(){
//         return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza with ${this.toppings}`)
//     }
// }
// const minePizza = new Pizza("margarita","small","thin");
// minePizza.setToppings("sausage");
// minePizza.bake();

// class Pizza {
//     constructor(sizePizza){
//         this.size = sizePizza;
//         this.crust = "original";
//         this.toppings = "olives";
//     }
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(crustPizza){
//         // this.toppings.push(toppingsPizza);
//         this.crust=crustPizza;
//     }
//     // bake(){
//     //     return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza with ${this.toppings}`)
//     // }
// }


//child class
// class specialPizza extends Pizza{
//     constructor(sizePizza){
//         super(sizePizza);
//         this.type = "Margarita"
//     }
//     slice(){
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices`)
//     }
// }
// const mysplPizza = new specialPizza("Small");
// mysplPizza.slice();


//Factory Function
function pizzaFactory(sizePizza){
    const crust = "original";
    const size = sizePizza;
    return{
        bake: ()=> console.log(`Baking a ${size} ${crust} crust pizza`)
    }
}
const misPizza=pizzaFactory("small");
misPizza.bake()
console.log(misPizza.crust); //infactory function we can't use . for print

class Pizza{
    crust = "original";
    #sauce ="tomato";
    constructor(sizePizza){
        this._size = sizePizza;
        // this._crust = "original"
    }
    getCrust(){
        return this._crust;
    }
    setCrust(crustPizza){
        this._crust=crustPizza;
    }
}




