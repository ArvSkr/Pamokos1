"use strict";
let sukauptiRiesutai = parseInt(prompt(" Sukauptas riesutu kiekis X ="));
let voveriukai = parseInt(prompt("Vovieriuku skaicius V="));


let dienos = 0;
while (sukauptiRiesutai >= (voveriukai * 3)) {
  sukauptiRiesutai -= (voveriukai * 3);

    dienos++;
  

}
if (dienos >= 92) {
  console.log(`Riesutu sukaupta ${dienos} dienoms`);
  console.log(`Riesutu uzteks visai ziemai`);
} else {
  console.log(`Riesutu sukaupta ${dienos} dienoms`);
  console.log(`Riesutu neuzteks visai ziemai`);
}
