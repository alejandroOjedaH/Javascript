/*Ejercicio 7: Validación: Números Enteros Positivos y Negativos
Esta expresión regular valida los números enteros tanto positivos como negativos.
 Se pueden emplear datos como latitud, longitud o temperatura.*/
console.log(comprobar("18.912"));
console.log(comprobar("-3"));
console.log(comprobar("a"));
console.log(comprobar("0"));
console.log(comprobar("3000"));

function comprobar(cadena){
  expresion=/^-?[0-9]*$/;
  if(expresion.test(cadena)){
    return true;
  }else{
    return false;
  }
}

