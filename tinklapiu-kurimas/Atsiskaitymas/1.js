"use strict"
// suskaiciuos visus teigiamus

function Calculate(n){
    let suma = 0
    for(let i = 0; i < n; i++){
        if (i % 2 === 0) {
            console.log(i)
             suma += i
           
        }
        
    }
    return suma;
}   
console.log(`Suma:${Calculate(20)}`)