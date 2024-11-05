"use strict"
const monetai = parseInt(prompt("Kiek yra monetų po 5 ct?"))
const monetai2 = parseInt(prompt("Kiek yra monetų po 20 ct?"))
const monetai3 = parseInt(prompt("Kiek yra monetų po 2lt?"))

const sum = (0.05 *monetai  ) + (0.20*monetai2) + (monetai3 * 2)

console.log(`Taupyklėje yra ${sum} Lt`)