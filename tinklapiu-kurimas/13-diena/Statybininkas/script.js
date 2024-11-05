"use strict"
const ilgis = parseInt(prompt("Sienos ilgis:"))
const aukstis = parseInt(prompt("Sienos aukstis:"))
const kaina = parseInt(prompt("Plytos kaina:"))

const plytuKiekis = (ilgis /0.2) * (aukstis / 0.1)
const plytuKaina = plytoskiekis * kaina

console.log(`Plytu kiekis: ${plytuKiekis}`)
console.log(`Plytu kaina: ${plytuKaina.toFixed(2)} Lt`)