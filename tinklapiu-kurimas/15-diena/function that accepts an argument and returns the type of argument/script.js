"use strict"
function findType (value){
    if (typeof (value) === "number")
        console.log("number")
    if (typeof (value) === "string")
        console.log("string")
}
findType("Jurgis")

