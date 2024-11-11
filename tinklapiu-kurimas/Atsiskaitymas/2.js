"use strict"
const positives = arr  => {
    if (!Array.isArray(arr)) { // !Array.isArray(arr) reikalingas todel kad patikrintu ar tai array jei ne paleis zinute apacioj
      console.error("Pateiktas neteisingas duomenų tipas, tikimasi masyvo.");
      return;
    }
    return arr.filter(num => num > 0);
  };
  console.log(positives([1, -3, 5, -3, 0])); // [1, 5]
console.log(positives([1, 2, 3]));         // [1, 2, 3]
console.log(positives([-1, -2, -3]));      // []
console.log(positives("ne masyvas"));      // Pateiktas neteisingas duomenų tipas, tikimasi masyvo.
