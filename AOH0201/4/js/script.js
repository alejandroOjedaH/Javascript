/*Recoge el alto y el ancho de una tabla mediante prompt. Escribe en el body 
(document.write()) una tabla de esas medidas, que muestre los números desde el 
1 hasta el número de celdas.

Por ejemplo, para las entradas: alto 2, ancho 5.

El programa debe escribir en la página:

1	2	3	4	5
6	7	8	9	10

Ayuda: document.write("<table>");

*/
let ancho = prompt("Dame el ancho");
let alto = prompt("Dame el alto");
let contador=1;
document.write("<table>");
for (let index = 0; index < alto; index++) {
    document.write("<tr>");
        for (let index = 0; index < ancho; index++) {
            document.write("<td>");
            document.write(contador);
            document.write("</td>");
            contador++;
        }
    document.write("</tr>");
}
document.write("</table>");
