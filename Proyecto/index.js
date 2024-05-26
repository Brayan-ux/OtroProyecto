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

    if(tipo == 1) {
        info.innerText = "los alumnos comienzan con conocimientos de los recursos naturales, se valoran y aprenden los impactos que tienen de manera turística. Los alumnos se enseñan a realizar rutas turísticas tienen prácticas profesionales respecto a hoteleria, cocina y finalizan con promoción, publicidad, mercadotecnia y  contaduría. Para esta carrera se cuenta totalmente con los espacios y utensilios necesarios para que los alumnos realicen sus prácticas profesionalmente.. "
        info.style.backgroundImage = "url('imgs/fondoEcoturismo.jpg')"
    } else if(tipo == 2) {
        info.innerText = "esta especialidad consiste en la utilización de diferentes lenguajes de programación para realizar elementos visuales,  páginas web , aplicaciones, entre otras cosas, para ello contamos con un laboratorio con los equipos necesarios,  y una biblioteca de laptops para el uso de los estudiantes."
        info.style.backgroundImage = "url('imgs/fondoProgra.jpg')"
    } else if(tipo == 3) {
        info.innerText = ""
        info.style.backgroundImage = "url('imgs/fondoMineria.jpg')"
    }
}