function infoEcologica() {
    let info = document.getElementById("info")

    if (info.style.display == "none")
        info.style.display = "block"
    else
        info.style.display = "none"
}

function mostrar(tipo) {

    let infoEco = document.getElementById('infoEcoturismo')
    let infoProgra = document.getElementById('infoProgramacion')
    let infoMineria = document.getElementById('infoMineria')

    switch (tipo) {
        case 1:
            infoEco.style.display = "block"
            infoProgra.style.display = "none"
            infoMineria.style.display = "none"
            break;
        case 2:
            infoEco.style.display = "none"
            infoProgra.style.display = "block"
            infoMineria.style.display = "none"
            break;
        case 3:
            infoEco.style.display = "none"
            infoProgra.style.display = "none"
            infoMineria.style.display = "block"
            break;
    }
}