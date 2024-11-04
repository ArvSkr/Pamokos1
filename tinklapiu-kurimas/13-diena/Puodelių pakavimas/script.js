"use strict"
const puodeliai = parseInt(prompt("Puodelių, kuriuos reikia supakuoti, skaičius:"))
 const pilna_deze =  (puodeliai / 3).toFixed(0)
 const nepilna_deze = puodeliai % 3
 console.log(`Pilnas dėžučių skaičius: ${pilna_deze} `)
 console.log(`Nepilnas dėžučių skaičius: ${nepilna_deze} `)
