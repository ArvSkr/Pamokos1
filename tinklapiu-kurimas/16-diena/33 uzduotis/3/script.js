"use strict";
const sum = () => {
  const pirmasskaicius = document.querySelector("input[name='firstNumber']").value;
  const antrasskaicius = document.querySelector("input[name='secondNumber']").value;
  const suma = parseFloat(pirmasskaicius) + parseFloat(antrasskaicius);

  document.getElementById("sum").textContent = isNaN(suma) ? "Invalid input" : suma // sitas leidzia nustatyti ar vienas is tu skaiciu sumoje raidziu jei yra tai rodys invalid input
};

const submitform = document.getElementById('form1')

submitform.addEventListener("submit", (event) => {
  event.preventDefault();
  sum();
});
