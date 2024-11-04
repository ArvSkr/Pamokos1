"use strict"
let pirmadienis = parseInt(prompt("Kiek Pamokų yra pirmadienį:")) 
let antradienis = parseInt(prompt("Kiek Pamokų yra antradienį:")) 
let Treciadienis = parseInt(prompt("Kiek Pamokų yra treciadienį:")) 
let Ketvirtadienis = parseInt(prompt("Kiek Pamokų yra ketvirtadieniį:")) 
let penktadienis = parseInt(prompt("Kiek Pamokų yra penktadieni:")) 

let pmksk = pirmadienis+antradienis+Treciadienis+Ketvirtadienis+penktadienis
console.log(`Pamokų skaičius: ${pmksk}`)
console.log(`Isviso minuciu: ${pmksk *45}`)