/*2. Escribe una función JavaScript para obtener el número de días de un mes.
Datos de prueba:
console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));
Salida:
31
29
30
31*/

console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));

function getDaysInMonth(mes, anno){
    let fecha =new Date(anno, mes-1);
    let fecha2;
    let num;

    if(mes==12){
        mes=1;
        anno++;
    }else{
        mes++;
    }
    fecha2=new Date(anno, mes-1);
    num=fecha2.getTime()-fecha.getTime();
    return Math.round(num/(1000*60*60*24));
}