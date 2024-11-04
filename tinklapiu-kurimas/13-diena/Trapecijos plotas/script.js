"use strict"
const ilgo = parseInt(prompt(" Trapecijos ilgesniojo pagrindo ilgis:"))
const trumpo = parseInt(prompt(" Trapecijos trumpesniojo pagrindo ilgis:"))
const aukstinės = parseInt(prompt(" Trapecijos aukštinės  ilgis:"))

const plotas = ((ilgo + trumpo) / 2) * aukstinės
console.log(`Trapecijos plotas: ${plotas}`)