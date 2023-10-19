/*1.Dado un  HTML con tres párrafos sin nombre, id ni class y 
un input de tipo color.

Escribir un programa en JavaScript para establecer el color de 
fondo de el segundo párrafo en función del valor que 
tiene en cada momento el input de tipo color. */
let parrafos = document.getElementsByTagName("p");
let color = document.getElementsByTagName("input")[0];
color.onchange=cambiarColor;

function cambiarColor(){
    console.log(color.value);
    parrafos[1].style.backgroundColor=color.value;
}
