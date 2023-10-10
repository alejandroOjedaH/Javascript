/*7. Escribe una función JavaScript para obtener las diferencias de tiempo en meses entre dos fechas.
Datos de prueba :
dt1 = new Date("13 de junio de 2014 08:11:00");
dt2 = new Date("19 de octubre de 2014 11:13:00");
console.log(diff_months(dt1, dt2));
5*/
dt1 = new Date("2014/06/13");
dt2 = new Date("2014/10/19");
console.log(diff_months(dt1, dt2));

function diff_months(fecha,fecha2){
  let num1, num2, resultado, dia1, dia2,daydif;
  num1 = (fecha.getFullYear()*12)+fecha.getMonth();
  num2 = (fecha2.getFullYear()*12)+fecha2.getMonth();
  dia1=fecha.getDate();
  dia2=fecha2.getDate();
  
  if(num1<num2){
    resultado= num2-num1;
  }else{
    resultado= num1-num2;
  }
  if(dia1>dia2){
    daydif =dia1-dia2;
  }else{
    daydif =dia2-dia1;
  }
  if(daydif>0){
    resultado++;
  }
  return resultado;
}

