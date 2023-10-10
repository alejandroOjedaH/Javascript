/*5. Escribe una función JavaScript para obtener una representación textual completa del día de la semana (de domingo a sábado).
Datos de prueba:
dt = new Date(2015, 10, 1);
console.log(long_Days(dt));
"Domingo"*/
dt = new Date(2015, 10, 1);
console.log(long_Days(dt));

function long_Days(fecha){
  let num=fecha.getDay();
  switch (num) {
    case 0:
      num="Domingo";
      break;
    case 1:
      num="Lunes";
      break;
    case 2:
      num="Martes";
      break;
    case 3:
      num="Miercoles";
      break;
    case 4:
      num="Jueves";
      break;
    case 5:
      num="Viernes";
      break;
    case 6:
      num="Sabado";
      break;
  }
  return num;
}