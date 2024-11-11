"use strict";
let suma = 0;

while (true) {
  let skaicius = parseInt(prompt("Įveskite skaičių: "));

  if (skaicius < 0) {
    break;
  }

  suma += skaicius;
}

console.log(suma);
