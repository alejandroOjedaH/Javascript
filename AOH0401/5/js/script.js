/*5. Escribir un programa JavaScript para eliminar el elemento que en estos momentos 
se encuentra seleccionado en la lista desplegable. 
*/
let opciones = document.getElementsByTagName("option");

function removecolor(){
    let element;
    for (let i = 0; i < opciones.length; i++) {
        element=opciones[i];
        if (element.selected) {
            element.outerHTML ="";
        }
    }
}