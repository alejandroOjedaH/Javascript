/*Ejercicio 9: Validación: Fecha (Formato dd/mm/yyyy)
Esta expresión regular valida la fecha de formato dd/mm/yyyy incluyendo 
los meses bisiestos.*/
console.log(comprobar("29/02/2023"));
console.log(comprobar("29/02/2024"));
console.log(comprobar("1/12/2018"));
console.log(comprobar("31/01/2024"));
console.log(comprobar("1,000,000"));

function comprobar(cadena){
  expresion=/^(?:(?:0?[1-9]|1\d|2[0-8])(\/|-)(?:0?[1-9]|1[0-2]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:31(\/|-)(?:0?[13578]|1[02]))|(?:(?:29|30)(\/|-)(?:0?[1,3-9]|1[0-2])))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(29(\/|-)0?2)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/;
  if(expresion.test(cadena)){
    return true;
  }else{
    return false;
  }
}

