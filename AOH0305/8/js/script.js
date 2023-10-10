/*Ejercicio 8: Validación: Separador de Miles y Decimales
Esta expresión regular valida los valores de miles, millones 
y superiores separándoles cada 3 dígitos por coma y los valores decimales con un punto.*/
console.log(comprobar("1,118.912"));
console.log(comprobar("-3"));
console.log(comprobar("1,2.5"));
console.log(comprobar("3"));
console.log(comprobar("1,000,000"));

function comprobar(cadena){
  expresion=/^[0-9,]*.?[0-9]*$/;
  if(expresion.test(cadena)){
    return true;
  }else{
    return false;
  }
}

