/*6. Escribe una función JavaScript para añadir las semanas especificadas a una fecha.
Datos de prueba:
dt = new Date(2014,10,2);
console.log(add_weeks(dt, 10).toString());
Salida:
"Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"*/
dt = new Date(2014,10,2);
console.log(add_weeks(dt, 10).toString());

function add_weeks(fecha,semanas){
  return new Date(fecha.getFullYear(),fecha.getMonth(),fecha.getDate()+(semanas*7));
}