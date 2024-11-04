"use strict"
const ilgis = parseInt(prompt("Sienos ilgis:"))
const aukstis = parseInt(prompt("Sienos aukstis:"))
const kaina = parseInt(prompt("Plytos kaina:"))

const plytoskiekis = (ilgis /0.2) * (aukstis / 0.1)
const plytukaina = plytoskiekis * kaina

console.log(`Plytu kiekis: ${plytoskiekis}`)
console.log(`Plytu kaina: ${plytukaina.toFixed(2)} Lt`)