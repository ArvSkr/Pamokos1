"use strict"
function callNTimes(number, hello){
    for( let i = 1; i <= number; i++)  {
         hello()
    }
    
}
function hello() {
     console.log("Hello, world!")
}
callNTimes(5, hello)