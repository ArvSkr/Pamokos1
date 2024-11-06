"use strict"
const numbers = [1, 5, 10, 9, 4, 1]
function max(value){
    let highestNum = 0
   for ( const number of value){
        if (number > highestNum) {
            highestNum = number
        }
   }
   return highestNum
}
console.log(max(numbers))