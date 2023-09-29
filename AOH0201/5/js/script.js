/*Modifica el ejercicio anterior para que, en lugar de cada número primo, aparezca la palabra “primo” o una "p"
Por ejemplo, para las entradas: alto 2, ancho 5.
El programa debe escribir en la página:

p	p	p	4	p
6	p	8	9	10
*/
let ancho = prompt("Dame el ancho");
let alto = prompt("Dame el alto");
let contador=1;
document.write("<table>");
for (let index = 0; index < alto; index++) {
    document.write("<tr>");
        for (let index = 0; index < ancho; index++) {
            document.write("<td>");
            if(es_primo(contador)){
                document.write("p");
            }else{
                document.write(contador);
            }
            document.write("</td>");
            contador++;
        }
    document.write("</tr>");
}
document.write("</table>");

function es_primo(numero){
    for (let index = 2; index < numero; index++) {
        if(numero%index==0){
            return false;
        }
    }
    return true;
}