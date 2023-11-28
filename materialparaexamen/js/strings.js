

//---Funciones---
//Verificación de palindromo
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

//Girar una cadena
function cadenaReverse(cadena){
    let inverso = "";
    for (let index = 0; index < cadena.length; index++) {
        inverso = cadena.charAt(index)+inverso;
    }

    document.write("Tu cadena dado la vuelta es: "+inverso);
}

//Comvinaciones de letras
function combinacionesPalabra(palabra){
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

//Orden alfabetico
function ordenAlfabetico(palabra){
    let orden = palabra.split("");
    orden.sort();
    document.write("La cadena es: "+palabra+" y ordenada es: "+orden.join().replaceAll(',',''));
}

//Indica cual es la palabra mas larga
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

//Contar las vocales
function contarVocales(palabra){
    let cont=0;
    for (let i = 0; i < palabra.length; i++) {
        let vocal = palabra.charAt(i);
        if(vocal == 'A' || vocal == 'Á' || vocal == 'a'|| vocal == 'á'|| vocal == 'E'|| vocal == 'É'|| vocal == 'e'|| vocal == 'é'|| vocal == 'I'|| vocal == 'Í'|| vocal == 'i'|| vocal == 'í'|| vocal == 'O'|| vocal == 'Ó'|| vocal == 'o'|| vocal == 'ó'|| vocal == 'U'|| vocal == 'Ú'|| vocal == 'u'|| vocal == 'ú'){
            cont++;
        }
    }
    document.write("La palabra tiene "+cont+" vocales");
}

//Crear palabras aleatorias
function crearFrase(numero){
    let caracteresS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let caractares = caracteresS.split("");
    let cadena=""
    for (let index = 0; index < numero; index++) {
        cadena = cadena + caractares[Math.floor(Math.random() * caractares.length)];  
    }
    document.write("Palabra generada: "+cadena);
}
