"use strict"
const didintojas = () => {
    const nuotrauka = document.getElementById('img')
    nuotrauka.style.height = "500px"
}
const didinimoButton = document.getElementById('didelis')
didinimoButton.addEventListener('click', didintojas)
const mazintojas = () => {
    const nuotrauka = document.getElementById('img')
    nuotrauka.style.height = "20px"
}
const mazinimoButton = document.getElementById('mazas')
mazinimoButton.addEventListener('click', mazintojas)