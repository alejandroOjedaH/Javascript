/*2. Escribir una función, llamada insert_Row(), que añada una fila al final de la tabla*/
let tabla = document.getElementById("sampleTable");

function insert_Row(){
    tabla.innerHTML += "<tr><td>Nuevo</td><td>Nuevo</td></tr>";
}