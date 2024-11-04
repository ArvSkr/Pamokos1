"use strict"
const puodeliai = parseInt(prompt("Puodelių, kuriuos reikia supakuoti, skaičius:"))
 const pilnas =  (puodeliai / 3).toFixed(0)
 const nepilnas = puodeliai % 3
 console.log(`Pilnas dėžučių skaičius: ${pilnas} `)
 console.log(`Nepilnas dėžučių skaičius: ${nepilnas} `)
