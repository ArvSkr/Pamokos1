"use strict"
const myArray = ['sunday', 'monday', 'tuesday', 'wednesday' , 'thursday', 'friday', 'saturday']

const third = myArray.slice(2,3)
console.log(third)
myArray[2] = null
const index = myArray.indexOf(null);
console.log(index)