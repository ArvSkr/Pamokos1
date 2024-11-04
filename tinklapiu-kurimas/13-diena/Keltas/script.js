"use strict"
const auto = parseInt(prompt("Automobilių skaičius:"))
const keltas = parseInt(prompt("Į keltą telpa automobilių:"))

const kartai = (auto / keltas).toFixed(0)
const kiekliko = auto % keltas
console.log(`Perkels per kartų: ${kartai}`)
console.log(`Liks neperkelta: ${kiekliko}`)