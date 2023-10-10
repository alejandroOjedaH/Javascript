/*Ejercicio 6: Validación: Numero Enteros y decimales
Esta expresión regular valida números naturales con un punto 
como separador decimal de varios dígitos como decimales.*/
console.log(comprobar("18.912"));
console.log(comprobar("-3.0"));
console.log(comprobar("0.0"));
console.log(comprobar("0"));
console.log(comprobar("a.9"));

function comprobar(cadena){
  expresion=/^[0-9]*.?[0-9]*$/;
  if(expresion.test(cadena)){
    return true;
  }else{
    return false;
  }
}

