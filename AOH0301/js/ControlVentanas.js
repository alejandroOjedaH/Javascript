let largo =document.getElementById("windowHigh")
let ancho = document.getElementById("windowWidth");
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
}