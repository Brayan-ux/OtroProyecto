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
    let intro = document.getElementById("historia")

    switch (tipo) {
        case 1:
            if (infoEco.style.display == "none") {
                infoEco.style.display = "block"
                infoProgra.style.display = "none"
                infoMineria.style.display = "none"
                intro.style.display = "none"
            } else
                infoEco.style.display = "none"
                infoProgra.style.display = "none"
                infoMineria.style.display = "none"
                intro.style.display = "block"
            break;
        case 2:
            if(infoProgra.style.display == "none") {
                infoEco.style.display = "none"
                infoProgra.style.display = "block"
                infoMineria.style.display = "none"
                intro.style.display = "none"
            } else {
                infoEco.style.display = "none"
                infoProgra.style.display = "none"
                infoMineria.style.display = "none"
                intro.style.display = "block"
            }
            break;
        case 3:
            if(infoMineria.style.display == "none") {
                infoEco.style.display = "none"
                infoProgra.style.display = "none"
                infoMineria.style.display = "block"
                intro.style.display = "none"
            } else {
                infoEco.style.display = "none"
                infoProgra.style.display = "none"
                infoMineria.style.display = "none"
                intro.style.display = "block"
            }
            break;
    }
}