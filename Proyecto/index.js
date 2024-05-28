function infoEcologica() {
    let info = document.getElementById("info")
    let titulo = document.getElementById("tituloEco")
    let texto = document.getElementById("intro")
    let img1 = document.getElementById("fotoEco1")
    let img2 = document.getElementById("fotoEco2")

    if(titulo.style.display == "none") {
        info.style.background = "rgb(139, 255, 216)"
        titulo.style.display = "block"
        texto.innerText = "Aquí va información ecológica"
        texto.style.color = "black"
        img1.setAttribute("src", "imgs/ecologica1.jpg")
        img2.setAttribute("src", "imgs/ecologica2.jpg")
    } else {
        info.style.background = "none"
        titulo.style.display = "none"
        texto.innerText = ""
        texto.style.color = "white"
        img1.setAttribute("src", "imgs/cecytea2.jpg")
        img2.setAttribute("src", "imgs/cecytea1.jpg")
    }
}

function verDatos(tipo) {
    let boton = document.getElementById('botonPlanEstudios')
    let info = document.getElementById("infoCarreras")
    let fondo = document.getElementById("datos")

    boton.style.display = "block"

    if(tipo == 1) {
        info.innerText = "Los alumnos comienzan con conocimientos de los recursos naturales, se valoran y aprenden los impactos que tienen de manera turística. Los alumnos aprender a realizar rutas turísticas tienen prácticas profesionales respecto a hoteleria, cocina y finalizan con promoción, publicidad, mercadotecnia y contaduría. Para esta carrera se cuenta totalmente con los espacios y utensilios necesarios para que los alumnos realicen sus prácticas profesionalmente."
        fondo.style.backgroundImage = "url('imgs/fondoEcoturismo.jpg')"
        boton.setAttribute("href", "planEco.html")
    } else if(tipo == 2) {
        info.innerText = "Esta especialidad consiste en la utilización de diferentes lenguajes de programación para realizar elementos visuales,  páginas web , aplicaciones, entre otras cosas, para ello contamos con un laboratorio con los equipos necesarios,  y una biblioteca de laptops para el uso de los estudiantes."
        fondo.style.backgroundImage = "url('imgs/fondoProgra.jpg')"
        boton.setAttribute("href", "planProgra.html")
        } else if(tipo == 3) {
        info.innerText = "Aquí va texto de minería"
        fondo.style.backgroundImage = "url('imgs/fondoMineria.jpg')"
        boton.setAttribute("href", "planMine.html")
    }
}