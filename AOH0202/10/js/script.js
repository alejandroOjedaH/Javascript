/*10. Escribe un código principal que llame tres veces (con parámetros diferentes) a cada una 
de las funciones que has creado. Los parámetros tienen que ser significativos, tienen que probar
 que el ejercicio no falla en algún aspecto. 
En cada una de las llamadas debe escribir con document.write() la función a la que se llama, 
los parámetros que se le pasa y los resultados que devuelve. */
document.write("Ejercicio 1 <br/>");
numeroReverse("9999999991");
document.write("<br/>");
numeroReverse("1232154566");
document.write("<br/>");
numeroReverse("12");
document.write("<br/><br/>");

document.write("Ejercicio 2 <br/>");
combinaciones("holiwis");
document.write("<br/>");
combinaciones("pedroPicapiedra");
document.write("<br/>");
combinaciones("eyyyyqeeq");
document.write("<br/><br/>");

document.write("Ejercicio 3 <br/>");
ordenAlfabetico("holiwis");
document.write("<br/>");
ordenAlfabetico("pedroPicapiedra");
document.write("<br/>");
ordenAlfabetico("eyyyyqeeq");
document.write("<br/><br/>");

document.write("Ejercicio 4 <br/>");
palabraMasLarga(" u un uxiono es pada lustro ");
document.write("<br/>");
palabraMasLarga("pedroPicapiedra que tal aaaaaaaaaaaaaaaa");
document.write("<br/>");
palabraMasLarga("a a b e a q");
document.write("<br/><br/>");

document.write("Ejercicio 6 <br/>");
devolverTipo("objeto");
document.write("<br/>");
devolverTipo("funcion");
document.write("<br/>");
devolverTipo("undefined");
document.write("<br/><br/>");

document.write("Ejercicio 7 <br/>");
cambioDinero("46","25, 10, 5, 2, 1");
document.write("<br/>");
cambioDinero("20","6");
document.write("<br/>");
cambioDinero("3","4");
document.write("<br/><br/>");

document.write("Ejercicio 8 <br/>");
quitarCharUnicos("thequickbrownfoxjumpsoverthelazydog");
document.write("<br/>");
quitarCharUnicos("Hoy se no se pierde");
document.write("<br/>");
quitarCharUnicos("abcdefghijalemq");
document.write("<br/><br/>");

document.write("Ejercicio 9 <br/>");
crearFrase("1");
document.write("<br/>");
crearFrase("0");
document.write("<br/>");
crearFrase("90000");
document.write("<br/><br/>");


function numeroReverse(numero){
    let inverso = "";
    for (let index = 0; index < numero.length; index++) {
        inverso = numero.charAt(index)+inverso;
    }

    document.write("Tu numero dado la vuelta es: "+inverso);
}

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

function ordenAlfabetico(palabra){
    let orden = palabra.split("");
    orden.sort();
    document.write("La cadena es: "+palabra+" y ordenada es: "+orden.join().replaceAll(',',''));
}

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

function devolverTipo(palabra){
    let tipo;
    if (palabra == "objeto") {
        let obj = {prueba : 1, ey : 2};
        tipo = typeof obj;
    }else if(palabra == "booleano"){
        let bool =true;
        tipo = typeof bool
    }else if(palabra == "funcion"){
        tipo = typeof devolverTipo;
    }else if(palabra == "numero"){
        let numero = 4;
        tipo = typeof numero;
    }else if(palabra == "cadena"){
        tipo = typeof palabra; 
    }else if(palabra == "undefined"){
        let nada;
        tipo = typeof nada;
    }
    document.write("El tipo es: "+tipo);
}

function cambioDinero(dineroS, monedasS){
    let dinero = parseInt(dineroS);
    let monedas = monedasS.split(",");
    let vueltas =[];
    for (let i = 0; i < monedas.length; i++) {
        while(dinero>=parseInt(monedas[i])){
            dinero-=monedas[i];
            vueltas.push(monedas[i]);
        }
    }
    document.write("Las vueltas son: "+vueltas.join());
}

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

function crearFrase(numero){
    let caracteresS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let caractares = caracteresS.split("");
    let cadena=""
    for (let index = 0; index < numero; index++) {
        cadena = cadena + caractares[Math.floor(Math.random() * caractares.length)];  
    }
    document.write("Palabra generada: "+cadena);
}