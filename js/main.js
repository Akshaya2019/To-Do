// Coding Challenge

const myName = "Akshay"
// 1. take any string (Eg: Your name). In that, any random alphabet will generate repeatedly.
console.log("FrontendDeveloper".charAt((Math.floor(Math.random()*11))))
//Best Solution:
console.log(myName.charAt((Math.floor(Math.random()*myName.length))))

//Exponentiation
let a=3;
let b=2;
let result = a ** b;
console.log(result)

let nr1 = 10;
let nr2 = 3;
let result1 = nr1 % nr2;
console.log(`${nr1} % ${nr2} = ${result1}`);



// Given height in inches and weight in pounds
let heightInInches = 70; // Example: 70 inches
let weightInPounds = 160; // Example: 160 pounds

// Convert to metric units
let heightInCm = heightInInches * 2.54; // Convert inches to cm
let heightInMeters = heightInCm / 100; // Convert cm to meters
let weightInKilos = weightInPounds / 2.2046; // Convert pounds to kilos

// Log the converted values
console.log(`Height: ${heightInCm.toFixed(2)} cm (${heightInMeters.toFixed(2)} m)`);
console.log(`Weight: ${weightInKilos.toFixed(2)} kg`);

// Calculate BMI
let bmi = weightInKilos / (heightInMeters ** 2);

// Log the BMI result
console.log(`BMI: ${bmi.toFixed(2)}`);






// 1. Create an empty shopping list array
let shoppingList = [];

// 2. Add Milk, Bread, and Apples
shoppingList.push("Milk", "Bread", "Apples");

// 3. Update "Bread" with Bananas and Eggs
let breadIndex = shoppingList.indexOf("Bread");
if (breadIndex !== -1) {
    shoppingList.splice(breadIndex, 1, "Bananas", "Eggs");
}

// 4. Remove the last item (Apples) and output it
let lastItem = shoppingList.pop();
console.log(`Removed item: ${lastItem}`);

// 5. Sort the list alphabetically
shoppingList.sort();

// 6. Find and output the index value of Milk
let milkIndex = shoppingList.indexOf("Milk");
console.log(`Index of Milk: ${milkIndex}`);

// 7. After Bananas, add Carrots and Lettuce
let bananasIndex = shoppingList.indexOf("Bananas");
if (bananasIndex !== -1) {
    shoppingList.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");
}

// 8. Create a new list with Juice and Pop
let newList = ["Juice", "Pop"];

// 9. Combine both lists, adding newList twice to the end
shoppingList = shoppingList.concat(newList, newList);

// 10. Get the last index of "Pop" and output it
let lastPopIndex = shoppingList.lastIndexOf("Pop");
console.log(`Last index of Pop: ${lastPopIndex}`);

// 11. Log the final list
console.log("Final Shopping List:", shoppingList);
