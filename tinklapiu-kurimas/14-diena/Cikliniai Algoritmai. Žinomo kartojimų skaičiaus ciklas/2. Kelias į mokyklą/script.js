"use strict"
const zingsniai = parseInt(prompt("Iveskite zingsniu kieki iki mokyklos: "))
let suplojimai = 0
let spragtelejimai = 0

for( let i = 0; i <= zingsniai; i++)
{
    if(i === 0){
        suplojimai++
    } else 
    if(i % 10 === 5){
        spragtelejimai++
    }
    
}
console.log(`Suplojimu bus: ${suplojimai}`)
console.log(`Spragtelejimu bus: ${spragtelejimai}`)