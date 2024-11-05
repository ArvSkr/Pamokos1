"use strict";
const a = parseInt(prompt("Iveskite intervalo pradzia: "));
const b = parseInt(prompt("Iveskite intervalo pabaiga: "));

let marskineliai = 0;

for (let i = a; i <= b; i++) {
  if (i % 6 === 0) {
    marskineliai++;
  }
}
console.log(`Reikalingu marskineliu skaicius: ${marskineliai}`);
