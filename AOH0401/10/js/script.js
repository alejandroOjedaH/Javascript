/*10. Escribir un programa que lea los H1 (no tienen por qué estar en el mismo div
     ni en el mismo nivel) que hay en la página y muestre su contenido en una lista 
     ordenada, al final del body que genera cuando ha terminado de cargar la página.
*/
window.onload = () =>{
    const titulos = document.getElementsByTagName("h1");
    let cadena = document.getElementsByTagName("body")[0].innerHTML;
    cadena += "<ol>";
    for (let i = 0; i < titulos.length; i++) {
        const element = titulos[i];
        cadena += "<li>"+element.innerText+"</li>";
    }
    cadena += "</ol>";

    document.getElementsByTagName("body")[0].innerHTML = cadena;
}
