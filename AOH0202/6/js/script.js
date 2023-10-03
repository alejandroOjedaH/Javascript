/*6. Escribe una función JavaScript que acepte un argumento y devuelva el tipo.
Nota: Hay seis posibles valores que el tipo de retornos: objeto, booleano, función, número, cadena e undefined.*/
devolverTipo(prompt("Eligue una de las suguientes opciones: objeto, booleano, funcion, numero, cadena e undefined"));

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
