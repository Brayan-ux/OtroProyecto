function infoEcologica() {
    let info = document.getElementById("infoEcologica")
    let boton = document.getElementById("plantita")
    if(info.style.display == "none") {
        info.style.display = "block"
        boton.style.background = "#13AFDF";
    } else
        info.style.display = "none"
}

function verDatos(tipo) {
    let info = document.getElementById("datos")
    let fondo = document.getElementById("fondoCarreras")

    if(tipo == 1) {
        info.innerText = ""
        fondo.style.backgroundImage = "url('imgs/fondoEcoturismo.jpg')"
    } else if(tipo == 2) {
        info.innerText = ""
        fondo.style.backgroundImage = "url('imgs/fondoProgra.jpg')"
    } else if(tipo == 3) {
        info.innerText = ""
        fondo.style.backgroundImage = "url('imgs/fondoMineria.jpg')"
    }
}