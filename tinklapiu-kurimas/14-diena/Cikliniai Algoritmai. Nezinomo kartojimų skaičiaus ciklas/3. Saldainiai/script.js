"use strict";
let gautiSaldainiai = parseInt(prompt("Petriukas gavo saldainiu:"));
let saldainiaiLike = 0;
let suvalgytiSaldainiai = 0;

let dienos = 0;
while (gautiSaldainiai > 0) {
  suvalgytiSaldainiai = parseInt(prompt("Per diena suvalge:"));
  gautiSaldainiai -= suvalgytiSaldainiai;
  if (gautiSaldainiai > 0) {
    saldainiaiLike = gautiSaldainiai;
    dienos++;
  }
}
console.log(
  `Petriukui saldainiu uzteks ${dienos} dienoms ir jam liks ${saldainiaiLike} saldainiai`
);
