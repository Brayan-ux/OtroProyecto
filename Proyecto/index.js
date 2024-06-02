let infoEco = document.getElementById('infoEcoturismo')
let infoProgra = document.getElementById('infoProgramacion')
let infoMineria = document.getElementById('infoMineria')
let intro = document.getElementById('historia')

let boton1 = document.getElementById('b1')
let boton2 = document.getElementById('b2')
let boton3 = document.getElementById('b3')

boton1.addEventListener('click', mostrarEco)
boton2.addEventListener('click', mostrarProgra)
boton3.addEventListener('click', mostrarMineria)

function mostrarEco() {
    if (infoEco.style.display == "none") {
        infoEco.style.display = "block"
        infoProgra.style.display = "none"
        infoMineria.style.display = "none"
        intro.style.display = "none"
    } else
        mostrarInicio()
}

function mostrarProgra() {
    if (infoProgra.style.display == "none") {
        infoEco.style.display = "none"
        infoProgra.style.display = "block"
        infoMineria.style.display = "none"
        intro.style.display = "none"
    } else
        mostrarInicio()
}

function mostrarMineria() {
    if (infoMineria.style.display == "none") {
        infoEco.style.display = "none"
        infoProgra.style.display = "none"
        infoMineria.style.display = "block"
        intro.style.display = "none"
    } else
        mostrarInicio
}

function mostrarInicio() {
    infoEco.style.display = "none"
    infoProgra.style.display = "none"
    infoMineria.style.display = "none"
    intro.style.display = "grid"
}
