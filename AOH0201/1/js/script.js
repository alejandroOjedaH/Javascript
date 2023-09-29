/*1-Recoge una cadena mediante prompt y comprueba 
si es un palíndromo, muestra un alert con el resultado.*/
let frase = prompt("Inserta una frase y te dire si es un palindromo");
if(es_palindromo(frase)){
    alert("La frase: "+frase+" es un palindromo");
}else{
    alert("La frase: "+frase+" no es un palindromo")
}

function es_palindromo(frase){
    frase=frase.replaceAll(" ","");
    frase=frase.toLowerCase();
    frase=frase.replaceAll("á","a");
    frase=frase.replaceAll("é","e");
    frase=frase.replaceAll("í","i");
    frase=frase.replaceAll("ó","o");
    frase=frase.replaceAll("ú","u");
    if(frase.length == 0){
        return false;
    }
    for (let index = 0; index < frase.length; index++) {
        if(frase.charAt(index) != frase.charAt(frase.length-index-1)){
            return false;
        }
    }
    return true;
}