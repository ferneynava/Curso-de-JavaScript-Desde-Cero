// Copying an Array

const originalArray = [1, 2, 3, 4, 5];
const copyOfAnArray = [...originalArray];

console.log(originalArray);
console.log(copyOfAnArray); 

// Combining Arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combiniedArray = [...array1, ...array2];

console.log(array1);
console.log(array2);
console.log(combiniedArray);

// Creating Arrays with Additional Elements

const baseArray = [1, 2, 3];
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6];    

console.log(baseArray);
console.log(arrayWithAdditionalElements);

// Pass elements to functions

function sum (a, b , c) {
    return a + b + c;
}

const numbers = [1, 2, 3];	
console.log(sum(...numbers)); // 6

