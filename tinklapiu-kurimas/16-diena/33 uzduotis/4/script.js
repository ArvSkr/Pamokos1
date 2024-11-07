"user strict";

const randomSkaicius = Math.floor(Math.random() * 100); // 100 reikalingas todel nes 
let spejimuSkaicius = 0;

const handlespejimas = (event) => {
  event.preventDefault();

  const userspejimas = parseInt(document.getElementById("number").value);
  spejimuSkaicius++;

  const resultatoTekstas = document.getElementById("resultText"); 
  const resultatoSkaicius = document.getElementById("resultCount");

 // sitie if leidzia nustatyti ar atspejo ar ne ir kodel reikalingas isNaN kad galetu nustatyi ar tai ne skaicius 
  if (isNaN(userspejimas)) {
    resultatoTekstas.textContent = "Please enter a valid number.";
  } else if (userspejimas < randomSkaicius) {
    resultatoTekstas.textContent = "Too low! Try again."; 
  } else if (userspejimas > randomSkaicius) {
    resultatoTekstas.textContent = "Too high! Try again.";
  } else {
    resultatoTekstas.textContent = `Correct! The number was ${randomSkaicius}.`;
    resultatoTekstas.style.color = "green";
  }

  resultatoSkaicius.textContent = `Number of guesses: ${guessSkaicius}`;
};

 document.querySelector("form").addEventListener("submit", handlespejimas);