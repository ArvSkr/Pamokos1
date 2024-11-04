"use strict"
const iskepesausainiu = parseInt(prompt("Kiek sausainių iškepė Tautvydas?"))
const draugaisausainiai = parseInt(prompt("Keli draugai dar atsinešė po tiek pat sausainių?"))
const dalyviai = parseInt(prompt("Kiek žmonių iš viso dalyvavo šventėje?"))

const kiekis = dalyviai / ((iskepesausainiu + draugaisausainiai)/ draugaisausainiai)
const likutis = ((iskepesausainiu - draugaisausainiai)/ draugaisausainiai) % dalyviai 
console.log(`Kiekvienas šventės dalyvis gavo po ${kiekis} sausainius`)
console.log(`Tautvydu papildomai atiteko ${likutis} sausainiai`)