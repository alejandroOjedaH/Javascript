/*Ejercicio 11: Validación: Horario (Formato 24 hrs.)
Esta expresión regular valida el horario de formato de 24 hrs.*/
console.log(comprobar("12:59"));
console.log(comprobar("13:00"));
console.log(comprobar("00:00"));
console.log(comprobar("02:60"));
console.log(comprobar("22:03"));

function comprobar(cadena){
  expresion=/^([1-9]{1}|[1-2]{1}[0-2]{1}):[0-5]{1}[0-9]$/;
  if(expresion.test(cadena)){
    return true;
  }else{
    return false;
  }
}

