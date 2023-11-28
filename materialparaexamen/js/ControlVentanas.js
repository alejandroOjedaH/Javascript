let largo = document.getElementById("windowHigh")
let ancho = document.getElementById("windowWidth");
let move = document.getElementById("movement");
let ventanaActual;
let ventanas =[];

function crearVentana(){
    ventanaActual = window.open("","",`toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=${ancho.value}, height=${largo.value}`);
    ventanas.push(ventanaActual);
}

function cambiarAlturaAnchura(){
    ventanaActual.resizeBy(ancho.value,largo.value);
    ventanaActual.focus();
}

function cerrarVentana(){
    ventanaActual.close();
    ventanas.pop();
    ventanaActual = ventanas[ventanas.length-1];
}

function arribaVentana(){
    ventanaActual.moveBy(0, move.value*-1);
    ventanaActual.focus();
}
function abajoVentana(){
    ventanaActual.moveBy(0, move.value);
    ventanaActual.focus();
}

function izquierdaVentana(){
    ventanaActual.moveBy(move.value*-1,0);
    ventanaActual.focus();
}

function derechaVentana(){
    ventanaActual.moveBy(move.value,0);
    ventanaActual.focus();
}