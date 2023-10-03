/*9. Escribe una función de JavaScript que genere una cadena (de longitud especificada) de caracteres aleatorios.
Ejemplo de lista de caracteres válidos: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"*/
crearFrase(prompt("Dime cuantos caracteres quiere que tenga tu frase"));

function crearFrase(numero){
    let caracteresS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let caractares = caracteresS.split("");
    let cadena=""
    for (let index = 0; index < numero; index++) {
        cadena = cadena + caractares[Math.floor(Math.random() * caractares.length)];  
    }
    document.write("Palabra generada: "+cadena);
}
