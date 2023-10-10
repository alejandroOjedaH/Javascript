/*Ejercicio 3: Validación: Letras con Espacios
Esta expresión regular valida una cadena de solo letras minúsculas,
 letras mayúsculas, incluye tildes pero con espacios incluido.*/
console.log(comprobar("Á"));
console.log(comprobar("awea asdq"));
console.log(comprobar("AéIoeBBBBa"));
console.log(comprobar("¿Hola?"));
console.log(comprobar("aa2"));

function comprobar(cadena){
  expresion=/^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
  if(expresion.test(cadena)){
    return true;
  }else{
    return false;
  }
}

