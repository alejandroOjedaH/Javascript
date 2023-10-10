/*Ejercicio 2: Validación: Solo Letras
Esta expresión regular valida una cadena de solo tenga letras minúscula, letras mayúsculas,
incluido tildes pero sin espacios incluido.*/
console.log(comprobar("Á"));
console.log(comprobar("awea asdq"));
console.log(comprobar("AéIoeBBBBa"));
console.log(comprobar("¿Hola?"));
console.log(comprobar("aa2"));

function comprobar(cadena){
  expresion=/^[a-zA-ZáéíóúÁÉÍÓÚ]*$/;
  if(expresion.test(cadena)){
    return true;
  }else{
    return false;
  }
}

