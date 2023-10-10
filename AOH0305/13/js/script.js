/*Ejercicio 14: Validación: Email
Esta expresión regular valida un correo electrónico..

*/
console.log(comprobar("alex@gmail.com"));
console.log(comprobar("@gmail.com"));
console.log(comprobar("@."));
console.log(comprobar("0@0.0"));
console.log(comprobar("pedro33@mail.es"));

function comprobar(cadena){
  expresion=/^[a-z0-9]{1,}@[a-z]{1,}.[a-z]{1,}$/;
  if(expresion.test(cadena)){
    return true;
  }else{
    return false;
  }
}

