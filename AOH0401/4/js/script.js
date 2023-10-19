/*4. Escribir una función de JavaScript que cree filas y columnas en la tabla. Aceptará mediante
 promt el número de filas y columnas y como contenido pondrá su posición en la tabla, por ejemplo:  
 Fila-1 Columna-1, o Fila-1 Columna-2.
*/
let filaNum= parseInt(prompt("Escribe el numero de fila"));
let columnaNum= parseInt(prompt("Escribe el numero de columna"));
let tabla = document.getElementById("myTable");

generarTabla();

function generarTabla(){
    let cadena ="";

    for (let i = 0; i < filaNum; i++) {
        cadena+= "<tr>";
        for (let j = 0; j < columnaNum; j++) {
            cadena+="<td>Fila-"+(i+1)+" Columna-"+(j+1)+"</td>"
        }
        cadena+= "</tr>";
    }
    tabla.innerHTML=cadena;
}