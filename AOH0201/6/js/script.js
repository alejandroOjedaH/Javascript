/*6-Modifica el ejercicio 2 para que además de las medidas, pida un colspan. A partir de la segunda 
fila deberá unir las celdas según pidan los parámetros, si el ancho no es divisible por el colspan, 
se deben dejar tantas celdas sin colspan como se necesiten.

Por ejemplo, para las entradas: alto 3, ancho 5, colspan 2.

El programa debe escribir en la página:
*/
let ancho = prompt("Dame el ancho");
ancho = parseInt(ancho,10);
let alto = prompt("Dame el alto");
alto = parseInt(alto,10);
let colspan = prompt("Dame el colspan");
colspan = parseInt(colspan,10);
let contador=1;
document.write("<table>");
for (let i = 0; i < alto; i++) {
    document.write("<tr>");
    let aux = ancho;
    for (let j = 0; j < ancho;) {
        if(i<1 || colspan>aux){
            document.write("<td>");
            j++
        }else{
            document.write("<td colspan=\""+colspan+"\">");
            j=j+colspan;
            aux = aux - colspan;
        }
            document.write(contador);
            document.write("</td>");
            contador++;
    }
    document.write("</tr>");
}
document.write("</table>");
