/*Ejercicio 13: Validación: Nombres de Usuario
Esta expresión regular valida los nombres de usuarios con letras minúsculas, 
números, guion bajo y guion medio. Los nombres de usuarios deben tener entre 3 y 16 caracteres.

*/
console.log(comprobar("alex-01"));
console.log(comprobar("alex_-2"));
console.log(comprobar("Ao7qwe@212saddwvcv"));
console.log(comprobar("3a"));
console.log(comprobar("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));

function comprobar(cadena){
  expresion=/^[a-z0-9_-]{3,16}$/;
  if(expresion.test(cadena)){
    return true;
  }else{
    return false;
  }
}

