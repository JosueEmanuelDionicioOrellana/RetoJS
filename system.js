function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


var miArray = ["div1", "div2", "div3","div4","div5"];

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var targetElement = ev.target;

    // Buscar el ancestro con la clase adecuada (div1, div2 o div3)
    while (!targetElement.classList.contains("div1") &&
           !targetElement.classList.contains("div2") &&
           !targetElement.classList.contains("div3") &&
           !targetElement.classList.contains("div4") &&
           !targetElement.classList.contains("div5")) {
        targetElement = targetElement.parentNode;
    }

    // Solo permitir soltar en los elementos con clase div1, div2 o div3
    if (targetElement.classList.contains("div1") ||
        targetElement.classList.contains("div2") ||
        targetElement.classList.contains("div3") ||
        targetElement.classList.contains("div4") ||
        targetElement.classList.contains("div5")) {
        targetElement.appendChild(document.getElementById(data));
    }
}

var contadorBoton = 1;
var contadorDiv = 4;



function crear(divId){
    var nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.classList.add("tarjeta");
    nuevaTarjeta.id = "columna"+ contadorBoton;
    nuevaTarjeta.draggable = true;
    nuevaTarjeta.ondragstart = drag;

    var newPara = document.createElement("p");
    newPara.textContent = "Tarjeta #"+ contadorBoton;
    nuevaTarjeta.appendChild(newPara);

    var targetDiv = document.getElementById(divId);
    if (targetDiv) {
        targetDiv.appendChild(nuevaTarjeta);
    }
    contadorBoton++;
}

function creacionDiv(){
    var datos = "div"+contadorDiv;
    var nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("divVariado");
    nuevoDiv.id = datos;
    nuevoDiv.ondrop = drop; // Asigna la referencia de la función
    nuevoDiv.ondragover = allowDrop;
    var colorAleatorio = "#" + Math.floor(Math.random()*16777215).toString(16);
    nuevoDiv.style.backgroundColor = colorAleatorio;
    var nuevoBoton = document.createElement("button");
    nuevoBoton.classList.add("boton");
    nuevoBoton.onclick = function() { crear(datos); };
    nuevoBoton.textContent = "Crear Tarjeta";

    nuevoDiv.appendChild(nuevoBoton);
    document.body.appendChild(nuevoDiv);
    miArray.push(datos);
    console.log(miArray)
    contadorDiv++;
}
