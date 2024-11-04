"use strict"
const Saldainiai = parseInt(prompt("Kiek saldainių gauna Marius?"))
const kieksuvalge = parseInt(prompt("Po kiek saldainių suvalgo?"))
const dienos = parseInt(prompt("Kelios dienos liko iki Kalėdų?"))

const dovanos = (Saldainiai * dienos)

console.log(`Marius dovanas paruoš ${dovanos} draugų`)