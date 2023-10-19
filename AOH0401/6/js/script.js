/*6. Escribir un programa JavaScript que cuente cuántos elementos hay en la lista 
desplegable, y los muestre en un input de tipo number cuando carga la página. 
*/
let seleccionado = document.getElementById("mySelect");
let formulario = document.getElementsByTagName("form")[0];

window.onload = () =>{
    contarNodos();
}
function contarNodos(){
    formulario.innerHTML+="<input type=\"number\" value=\""+seleccionado.childElementCount+"\">";
}