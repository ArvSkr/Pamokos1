"use strict";
let snaiges = parseInt(
  prompt("Iveskite, kiek snaigiu nukrito per pirmaja sekunde: ")
);
const sekundes = parseInt(prompt("Iveskite, kiek sekundziu snigo: "));

let snaigesPerSekundes = 0;
for (let i = 1; i <= sekundes; i++) {
  if (i > 1) {
    snaiges *= 2
  }
  snaigesPerSekundes += snaiges;
}
console.log(snaigesPerSekundes);
