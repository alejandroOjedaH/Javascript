/*Escribir un programa JavaScript para mostrar 
una imagen al azar (haciendo clic en un botón) de entre tres
 que estén guardadas en la carpeta img del proyecto o por URL. 
*/
window.onload = () =>{
    const boton = document.getElementById("botonImagen");
    const imagen = document.getElementById("imagen");
    const fotos = ["img/foto1.jpg", "img/foto2.jpg", "img/foto3.jpg"];

    boton.onclick = imagenRandom;

    function imagenRandom(){
        imagen.src=fotos[parseInt(Math.random()*3)];
    }
}
