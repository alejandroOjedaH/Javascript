/*Ejercicio 12: Validación: Contraseña Fuerte
Esta expresión regular valida una contraseña fuerte que debe tener una 
letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos.*/
console.log(comprobar("Ao7qwe@2"));
console.log(comprobar("Ao7we@2"));
console.log(comprobar("Ao7qwe@212saddwvcv"));
console.log(comprobar("Aoqwe@sdwq"));
console.log(comprobar("aaaa2aa@2"));

function comprobar(cadena){
  expresion=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if(expresion.test(cadena)){
    return true;
  }else{
    return false;
  }
}

