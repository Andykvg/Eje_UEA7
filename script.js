
function openPanel(element) {
    const texto = element.querySelector(".info").innerHTML;
    document.getElementById("panelText").innerHTML = texto;
    document.getElementById("panel").classList.add("open");
}

function closePanel() {
    document.getElementById("panel").classList.remove("open");
}

//para la imagen en superficie
let activeImg = null;

function openPanel(element) {

    const texto = element.querySelector(".info").innerHTML;
    const imagen = element.querySelector("img");

    document.getElementById("panelText").innerHTML = texto;
    document.getElementById("panel").classList.add("open");

    document.getElementById("overlay").classList.add("active");

    // quitar clase anterior si había
    if (activeImg) {
        activeImg.classList.remove("active-image");
    }

    // mover imagen
    imagen.classList.add("active-image");
    activeImg = imagen;
}

function closePanel() {
    document.getElementById("panel").classList.remove("open");
    document.getElementById("overlay").classList.remove("active");

    if (activeImg) {
        activeImg.classList.remove("active-image");
        activeImg = null;
    }
}