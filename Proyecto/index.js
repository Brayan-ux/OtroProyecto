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
    let infoProgra = document.getElementById("datosProgra")
    let infoMineria = document.getElementById("datosMine")
    let infoEcotu = document.getElementById("datosEcotursimo")
    
    if(tipo == "Progra") {

    } else if(tipo == "Mine") {

    } else {

    }
}