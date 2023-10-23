/*9. Escribir un programa JavaScript para mostrar el ancho y la altura de la 
ventana en dos input de un formulario (cada vez que se cambia el tamaño de la ventana).
*/
window.onload = () =>{
    const ancho = document.getElementById("ancho");
    const largo = document.getElementById("largo");

    ancho.value = window.innerWidth;
    largo.value = window.innerHeight;
    
    window.onresize = () =>{
        ancho.value = window.innerWidth;
        largo.value = window.innerHeight;
    }
}
