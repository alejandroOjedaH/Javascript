/*3. Escribir una función, llamada  changeContent(), acepte mediante promt una fila, una columna, 
(para identificar una celda en particular) y una cadena para actualizar el contenido de la celda indicada.*/
let filaNum= parseInt(prompt("Escribe el numero de fila"));
let columnaNum= parseInt(prompt("Escribe el numero de columna"));
let palabra = prompt("Dime una palabra");
let celdas= document.getElementsByTagName("td");

function changeContent(){
    let columnas = celdas.length/document.getElementsByTagName("tr").length;
    let indice;
    filaNum--;
    indice = (filaNum*columnas)+columnaNum;
    
    celdas[indice-1].innerText= palabra;
}