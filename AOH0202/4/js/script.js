/*4. Escribe una función JavaScript que acepte una cadena como parámetro y encuentre la palabra más larga dentro de la cadena. 
Cadena de ejemplo: 'Tutorial de desarrollo web'.
Resultado esperado: "desarrollo".*/
palabraMasLarga(prompt("Dime una frase y te devuelvo la palabra mas larga"));

function palabraMasLarga(palabra){
    let palabras = palabra.split(" ");
    palabra = "";
    for (let i = 0; i < palabras.length; i++) {
        if(palabras[i].length > palabra.length){
            palabra = palabras[i];
        }
    }
    document.write("La palabra mas larga es: "+palabra);
}
