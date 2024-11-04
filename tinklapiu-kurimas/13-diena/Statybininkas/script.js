"use strict"
const ilgis = 4
const aukstis = 3
const kaina = 0.5

const plytoskiekis = (ilgis /0.2) * (aukstis / 0.1)
const plytukaina = plytoskiekis * kaina

console.log(`Plytu kiekis: ${plytoskiekis}`)
console.log(`Plytu kaina: ${plytukaina.toFixed(2)} Lt`)