/*Ejercicio 1: Validación: Solo Números
Esta expresión regular valida una cadena de solo números.*/
console.log(comprobar("1"));
console.log(comprobar("0"));
console.log(comprobar("-1"));
console.log(comprobar("99990"));
console.log(comprobar("aa2"));

function comprobar(cadena){
  expresion=/^-?[0-9]*$/;
  if(expresion.test(cadena)){
    return true;
  }else{
    return false;
  }
}

