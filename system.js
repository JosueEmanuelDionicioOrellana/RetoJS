function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var targetElement = ev.target;

    // Buscar el ancestro con la clase adecuada (div1, div2 o div3)
    while (!targetElement.classList.contains("div1") &&
           !targetElement.classList.contains("div2") &&
           !targetElement.classList.contains("div3")) {
        targetElement = targetElement.parentNode;
    }

    // Solo permitir soltar en los elementos con clase div1, div2 o div3
    if (targetElement.classList.contains("div1") ||
        targetElement.classList.contains("div2") ||
        targetElement.classList.contains("div3")) {
        targetElement.appendChild(document.getElementById(data));
    }
}

var contador = 5;

function crear(divId){
    var newTarjeta = document.createElement("div");
    newTarjeta.classList.add("tarjeta");
    newTarjeta.id = "columna"+ contador;
    newTarjeta.draggable = true;
    newTarjeta.ondragstart = drag;

    var newPara = document.createElement("p");
    newPara.textContent = "Tarjeta #"+ contador;
    newTarjeta.appendChild(newPara);

    var targetDiv = document.getElementById(divId);
    if (targetDiv) {
        targetDiv.appendChild(newTarjeta);
    }
    contador++;
}
