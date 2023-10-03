/*1. Escribe una función JavaScript que invierta un número. 
Ejemplo x = 32243;
Salida esperada : 34223*/
numeroReverse(prompt("Dime un numero y te lo invierto"));
function numeroReverse(numero){
    let inverso = "";
    for (let index = 0; index < numero.length; index++) {
        inverso = numero.charAt(index)+inverso;
    }

    document.write("Tu numero dado la vuelta es: "+inverso);
}