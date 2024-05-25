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
    
    if(tipo == "Progra") {
        info.innerText = ""
    } else if(tipo == "Mine") {
        info.innerText = ""
    } else {
        info.innerText = ""
    }
}