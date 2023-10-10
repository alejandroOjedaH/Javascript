/*Ejercicio 5: Validación: Precio
Esta expresión regular valida el precio con 2 decimales.*/
console.log(comprobar("18.912"));
console.log(comprobar("-3.0"));
console.log(comprobar("0.0"));
console.log(comprobar("0"));
console.log(comprobar("a.9"));

function comprobar(cadena){
  expresion=/^[0-9]*.[0-9]*$/;
  if(expresion.test(cadena)){
    return true;
  }else{
    return false;
  }
}

