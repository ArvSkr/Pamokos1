"use strict"
const svoris = parseInt(prompt("Kiek sveria varle?"));
const norimaStebeti = parseInt(prompt("Kiek varliu norima stebeti?"));

const stebejimoSvoris = svoris * norimaStebeti

if(stebejimoSvoris > 5000)
{
    console.log("Varliu stebejimui pakanka")
} else{
    console.log("Varliu stebejimui per mazai")
}