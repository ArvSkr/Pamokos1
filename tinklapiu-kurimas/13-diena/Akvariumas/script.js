"use strict"
let žuvis = parseInt(prompt("Kiek žuvų gyvena akvariume?"))
let žuvis1 = parseInt(prompt("Kiek žuvų į akvariumą įdedama kiekvieną dieną?"))
let dienos = parseInt(prompt("Kiek dienų praėjo?"))

let sum = žuvis + (žuvis1 * dienos)
console.log(`Po 3 dienų akvariume gyvens ${sum} žuvų`)