/*2. Escribe una función de JavaScript que genere todas las combinaciones de una cadena.
Cadena de ejemplo: "pan"
Salida esperada: p, pa, pan, a, an, n*/
combinaciones(prompt("Dime una palabra y te dare todas las combinaciones"));

function combinaciones(palabra){
    let combinaciones = [];

    for (let i = 0; i < palabra.length; i++) {
        let aux = "";
        for (let j = i; j < palabra.length; j++) {
            aux = aux + palabra.charAt(j);
            combinaciones.push(aux);
        }
    }
    document.write("Tu palabra es "+palabra+" y sus combinaciones son: "+combinaciones.join());
}