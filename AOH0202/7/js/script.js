/*7. Escribe una función de JavaScript para convertir una cantidad X de dinero en monedas. A la función se le deben pasar: 
Como primer parámetro un entero con la cantidad de dinero que se quiere cambiar.
Como segundo parámetro un array con enteros que representan los valores de las monedas en las que queremos cambiar.
Debe devolver una lista con el menor número de monedas posible, ordenadas de mayor a menor valor.
Ejemplo:
Función de la muestra : cantidadMonedas(46, [25, 10, 5, 2, 1])
Aquí 46 es la cantidad. y 25, 10, 5, 2, 1 son las monedas.
Salida: 25, 10, 10, 1*/
cambioDinero(prompt("Dime una cantidad"),prompt("Dime las monedas separadas por comas"));

function cambioDinero(dineroS, monedasS){
    let dinero = parseInt(dineroS);
    let monedas = monedasS.split(",");
    let vueltas =[];
    for (let i = 0; i < monedas.length; i++) {
        while(dinero>=parseInt(monedas[i])){
            dinero-=monedas[i];
            vueltas.push(monedas[i]);
        }
    }
    document.write("Las vueltas son: "+vueltas.join());
}
