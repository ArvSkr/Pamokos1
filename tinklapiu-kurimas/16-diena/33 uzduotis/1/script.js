"use strict";
const greentext = () => {
  const paragraph = document.getElementById("p");
  paragraph.style.color = "green";
};
const greenbutton = document.getElementById("zalia");
greenbutton.addEventListener("click", greentext);
const yellowtext = () => {
    const paragraph = document.getElementById("p");
    paragraph.style.color = "yellow";
  };
  const yellowbutton = document.getElementById("geltona");
  yellowbutton.addEventListener("click", yellowtext);


  const redtext = () => {
    const paragraph = document.getElementById("p");
    paragraph.style.color = "red";
  };
  const redbutton = document.getElementById("raudona");
  redbutton.addEventListener("click", redtext);
