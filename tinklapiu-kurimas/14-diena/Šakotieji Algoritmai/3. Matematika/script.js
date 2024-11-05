"use strict";
const pirmas = parseInt(prompt("Kokius pazymius gavo Petriukas?"));
const antras = parseInt(prompt("Kokius pazymius gavo Petriukas?"));
const trecias = parseInt(prompt("Kokius pazymius gavo Petriukas?"));
const ketvirtas = parseInt(prompt("Kokius pazymius gavo Petriukas?"));
const penktas = parseInt(prompt("Kokius pazymius gavo Petriukas?"));

const vidurkis = (pirmas + antras + trecias + ketvirtas + penktas) / 5;

if (vidurkis >= 9) {
  console.log("Petriukas gaus tris saldainius");
} else if (vidurkis >= 7 && vidurkis <= 9) {
  console.log("Petriukas gaus du saldainius");
} else {
  console.log("Petriukas gaus viena saldainius");
}
