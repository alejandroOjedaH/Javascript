
//Comprobar si es fecha
function is_date(fecha) {
    if (typeof fecha.getMonth === 'function') {
        return true;
    } else {
        return false;
    }
}

//Conseguir numero de dias en un mes
function getDaysInMonth(mes, anno) {
    let fecha = new Date(anno, mes - 1);
    let fecha2;
    let num;

    if (mes == 12) {
        mes = 1;
        anno++;
    } else {
        mes++;
    }
    fecha2 = new Date(anno, mes - 1);
    num = fecha2.getTime() - fecha.getTime();
    return Math.round(num / (1000 * 60 * 60 * 24));
}

//Diferencia entre dos fechas en dias
function date_diff_indays(anno1, anno2) {
    let fecha = new Date(anno1);
    let fecha2 = new Date(anno2);
    if (fecha2.getTime > fecha.getTime) {
        num = fecha.getTime() - fecha2.getTime();
    } else {
        num = fecha2.getTime() - fecha.getTime();
    }
    return Math.round(num / (1000 * 60 * 60 * 24));
}

//Fecha mas antigua
function min_date(fechas) {
    let min;
    for (let i = 0; i < fechas.length; i++) {
        let fecha = new Date(fechas[i]);
        if (i == 0) {
            min = fecha;
        }
        if (fecha.getTime() < min.getTime()) {
            min = fecha;
        }
    }
    return min.getFullYear() + "/" + (min.getMonth() + 1) + "/" + min.getDate();
}

//dias a cadena
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

//Añadir semanas a una fecha
function add_weeks(fecha,semanas){
    return new Date(fecha.getFullYear(),fecha.getMonth(),fecha.getDate()+(semanas*7));
}

//Diferencia en meses de dos años
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