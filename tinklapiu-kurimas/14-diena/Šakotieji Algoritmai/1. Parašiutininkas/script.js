"use strict";
const h = parsefloat(prompt("Is kokio aukscio soka prasiutininkas?"));
const t = parseInt(prompt("Per kiek sekundziu issiskleidzia jo parasiutas?"));

const fallTime = Math.sqrt((2 * h) / 9.8);

if (fallTime > t) {
  console.log(`Parasiutas issiskleis`);
} else {
  console.log(`Parasiutas neisiskleis`);
}
