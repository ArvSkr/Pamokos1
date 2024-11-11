"use strict";

function intrestCalculator() {
  let number = parseFloat(document.getElementById("number").value);
  let interest = parseFloat(document.getElementById("interest").value);
  let years = parseInt(document.getElementById("years").value, 10);

  let sum = (number * interest * years) / 100;

  console.log(`If you deposited ${number}...`);
  console.log(`at interest rate of ${interest}%`);
  console.log(`You will receive an amount of ${sum} after ${years} years.`);
}

document.querySelector("button").addEventListener("click", intrestCalculator);
