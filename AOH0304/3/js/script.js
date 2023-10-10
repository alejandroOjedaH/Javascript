/*3. Escribe una función JavaScript para obtener la diferencia entre dos fechas en días. Tiene que tener en cuenta los días de cada mes y los años bisiestos.
Datos de prueba:
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
Salida:
216
-28*/
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));

function date_diff_indays(anno1, anno2){
    let fecha= new Date(anno1);
    let fecha2= new Date(anno2);
    if(fecha2.getTime>fecha.getTime){
        num=fecha.getTime()-fecha2.getTime();
    }else{
        num=fecha2.getTime()-fecha.getTime();
    }
    return Math.round(num/(1000*60*60*24));
}