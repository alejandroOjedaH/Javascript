/*Ejercicio 1

A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:

Número de enlaces de la página
Dirección a la que enlaza el penúltimo enlace
Numero de enlaces que enlazan a http://prueba
Número de enlaces del tercer párrafo */
window.onload = () =>{
    const enlaces = document.getElementsByTagName("a");
    let cadena = document.getElementsByTagName("body")[0].innerHTML;
    cadena += "<br>El numero de enlaces en la pagina es: "+ enlaces.length;
    cadena += "<br>El penultimo enlace es: "+ enlaces[enlaces.length-2];
    comprobarEnlace();
    cadena += "<br>El numero de enlaces en el tercer parrafo es: "+ document.getElementsByTagName("p")[2].getElementsByTagName("a").length;

    document.getElementsByTagName("body")[0].innerHTML = cadena;

    function comprobarEnlace(){
        const regex =/^http:\/\/prueba/i;

        for (let i = 0; i < enlaces.length; i++) {
            const element = enlaces[i];
            if(regex.test(element.href)){
                cadena += "<br>Enlaza con http://prueba : "+ enlaces[enlaces.length-2];
            }
        }
    }
    
}