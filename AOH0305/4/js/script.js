/*Ejercicio 4: Validación: Nombres y Apellidos
Esta expresión regular valida los nombres y/o apellidos. Permite letras en mayúsculas 
y minúsculas; con tilde. También incluye espacios, apostrofes.*/
console.log(comprobar("Alejandro Ojeda Herrero"));
console.log(comprobar("Alejandro Ojeda Herrero "));
console.log(comprobar("Aléjandro' "));
console.log(comprobar("El nene 1"));
console.log(comprobar(" Marcos"));

function comprobar(cadena){
  expresion=/^[a-zA-ZáéíóúÁÉÍÓÚ']*\s?[a-zA-ZáéíóúÁÉÍÓÚ']*\s?[a-zA-ZáéíóúÁÉÍÓÚ']*$/;
  if(expresion.test(cadena)){
    return true;
  }else{
    return false;
  }
}

