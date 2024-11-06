"use strict"
function compareBMI (markKg, markHeight, johnKg, johnHeight) {
    const markBMI = markKg / Math.sqrt(markHeight)
    const johnBMI = johnKg / Math.sqrt(johnHeight)
    const compare = markBMI > johnBMI
    return compare
}
console.log(compareBMI(70 , 1.85, 68, 1.87))