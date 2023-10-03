/*8. Escribe una función de JavaScript para extraer caracteres únicos de una cadena. No se tendrán en cuenta los acentos.
Cadena de ejemplo: "thequickbrownfoxjumpsoverthelazydog"
Salida esperada: "thequickbrownfxjmpsvlazydg"*/
quitarCharUnicos(prompt("Dime una frase y quito los caractares unicos"));

function quitarCharUnicos(palabra){
    for (let i = 0; i < palabra.length; i++) {
        let contar = contarLetras(palabra, palabra.charAt(i));
        if(contar<2){
            palabra = palabra.replace(palabra.charAt(i),"");
        }
    }
    document.write(palabra);
}
function contarLetras(palabra, letra){
    let cont = "0";
    for (let i = 0; i < palabra.length; i++) {
        if(palabra.charAt(i) == letra){
            cont++;
        }
    }
    return cont;
}