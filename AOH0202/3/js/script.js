/*3. Escribe una función JavaScript que devuelva una cadena pasada con letras en orden alfabético.
Cadena de ejemplo: "webmaster"
Salida esperada: "abeemrstw"
Supongamos que los símbolos de puntuación y números no están incluidos en la cadena pasada.*/
ordenAlfabetico(prompt("Te devuelvo las letras en el orden alfabetico"));
function ordenAlfabetico(palabra){
    let orden = palabra.split("");
    orden.sort();
    document.write("La cadena es: "+palabra+" y ordenada es: "+orden.join().replaceAll(',',''));
}
