
function openPanel(element) {
    const texto = element.querySelector(".info").innerHTML;
    document.getElementById("panelText").innerHTML = texto;
    document.getElementById("panel").classList.add("open");
}

function closePanel() {
    document.getElementById("panel").classList.remove("open");
}