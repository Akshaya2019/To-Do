//module

// to access other js file
// in link type="module" if you use it it refer module, use strict, defer

// import earnMoney from "./module2.js";
// import { growMoney, giveMoney } from "./module2.js";
// console.log(earnMoney());
// console.log(growMoney());
// console.log(giveMoney());

//also give name, if u want


// import earnMoney from "./module2.js";
// import { growMoney as grow, giveMoney as give } from "./module2.js";
// console.log(earnMoney());
// console.log(grow());
// console.log(give());



//other method to import all

// import * as money from "./module2.js";
// console.log(money.default()); // for earn money so avoid default
// console.log(money.giveMoney());


//3

import * as ab from "./module2.js";
import Subscriber from "./module2.js";

const me = new Subscriber("Akshaya")
console.log(me.emailme())