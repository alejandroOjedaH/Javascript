/*4. Escribe una función JavaScript para obtener la fecha mínima de un array de fechas.
Datos de prueba:
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Salida:
"2015/01/03"*/
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));

function min_date(fechas){
let min;
    for (let i = 0; i < fechas.length; i++) {
        let fecha =new Date(fechas[i]);
        if(i==0){
            min=fecha;
          }
          if(fecha.getTime()<min.getTime()){
            min=fecha;
          }
    }
    return min.getFullYear()+"/"+(min.getMonth()+1)+"/"+min.getDate();
}