/*5. Escribe una función de JavaScript que acepte una cadena como parámetro y cuente el número de vocales dentro de la cadena. 
Ejemplo de cadena: "El rápido zorro marrón"
Producción esperada: 8*/
contarVocales(prompt("Dime una frase y te digo cuantas vocales tiene"));

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
