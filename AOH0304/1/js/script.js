/*1. Escriba una función JavaScript para comprobar si un `input` es un objeto fecha o no.
Datos de prueba:
console.log(is_date("13 de octubre de 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99,5,24,11,33,30,0));
console.log(is_date([1, 2, 4, 0]));
Salida:
falso
verdadero
verdadero
falso*/

console.log(is_date("13 de octubre de 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99,5,24,11,33,30,0)));
console.log(is_date([1, 2, 4, 0]));

function is_date(fecha){
    if(typeof fecha.getMonth === 'function'){
        return true;
    }else{
        return false;
    }
}