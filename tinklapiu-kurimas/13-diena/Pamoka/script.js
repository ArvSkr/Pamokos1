"use strict"
const pirmadienis = parseInt(prompt("Kiek Pamokų yra pirmadienį:")) 
const antradienis = parseInt(prompt("Kiek Pamokų yra antradienį:")) 
const treciadienis = parseInt(prompt("Kiek Pamokų yra treciadienį:")) 
const ketvirtadienis = parseInt(prompt("Kiek Pamokų yra ketvirtadieniį:")) 
const penktadienis = parseInt(prompt("Kiek Pamokų yra penktadieni:")) 

const pamokuskaicius = pirmadienis+antradienis+treciadienis+ketvirtadienis+penktadienis
console.log(`Pamokų skaičius: ${pamokuskaicius}`)
console.log(`Isviso minuciu: ${pamokuskaicius *45}`)