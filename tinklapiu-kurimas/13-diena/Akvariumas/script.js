"use strict"
const žuviukiekis = parseInt(prompt("Kiek žuvų gyvena akvariume?"))
const žuviuidedama = parseInt(prompt("Kiek žuvų į akvariumą įdedama kiekvieną dieną?"))
const dienos = parseInt(prompt("Kiek dienų praėjo?"))

const sum = žuviukiekis + (žuviuidedama * dienos)
console.log(`Po 3 dienų akvariume gyvens ${sum} žuvų`)