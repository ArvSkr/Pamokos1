"use strict";
const sum = () => {
  const pirmasskaicius = document.querySelectorAll(".form-control");
  const antrasskaicius = document.querySelectorAll(".form-control");
  let suma = document.getElementById("sum");
  suma = pirmasskaicius + antrasskaicius;
  return suma;
};
const rezultatas = sum()
const submitform = document.getElementById('form1')

submitform.addEventListener("submit", (event) => {
  event.preventDefault();
  
});
