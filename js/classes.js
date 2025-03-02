const myPizza ={
    size:"medium",
    crust: "original",
    bake: function(){
        return console.log(`Baking a ${this.size} ${this.crust} crust pizza`);
    }
};
myPizza.bake();


// It used to create a object by using template

