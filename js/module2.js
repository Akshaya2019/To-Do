// const earnMoney = () => {
//     return "Earn Money in right way"
// };

// const growMoney = () => {
//     return "Grow money by investing"
// };

// const giveMoney = () => {
//     return "Give money for poor peoples"
// };

// export default earnMoney; // must one func can default
// export {growMoney, giveMoney}


// also write as:

//In this, in function arrow func will not work

// export default function earnMoney() {
//     return "Earn Money in right way"
// };

// export const growMoney = () => {
//     return "Grow money by investing"
// };

// export const giveMoney = () => {
//     return "Give money for poor peoples"
// };

//3
export default class Subscriber {
    constructor(name) {
        this._name = name;
    }
    emailme() {
        return `Hi I am ${this._name} emailed to abc@gmail.com`
  
    }
}
