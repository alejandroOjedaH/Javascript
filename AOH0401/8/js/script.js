/*8. Escribir un programa JavaScript para resaltar las palabras en negrita del siguiente párrafo, 
al pasar el ratón sobre un determinado enlace.

Ejemplo

[Al pasar el ratón por aquí se resaltarán las palabras en negrita del siguiente párrafo]

Acabamos de empezar esta sección para los usuarios (principiantes a intermedios) que quieran 
trabajar con varios problemas de JavaScript y escribir scripts en línea para probar su habilidad con el JavaScript.


El código html del párrafo pasaría de este 

<p>

Acabamos&nbsp;de empezar esta sección para los&nbspusuarios&nbsp;(principiantes a intermedios) 
que&nbsp;quieran&nbsp;trabajar con varios problemas de JavaScript y escribir&nbsp;scripts&nbsp;en&nbsp;línea&nbsp;para 
probar su&nbsphabilidad&nbsp;con el JavaScript.

</p>

a este:

<p>

<b>Acabamos</b>&nbsp;de empezar esta sección para los&nbsp;<b>usuarios</b>&nbsp;(principiantes a intermedios) 
que&nbsp;<b>quieran</b>&nbsp;trabajar con varios problemas de JavaScript y escribir&nbsp;<b>scripts</b>&nbsp;en&nbsp;
<b>línea</b>&nbsp;para probar su&nbsp;<b>habilidad</b>&nbsp;con el JavaScript.

</p>
*/
window.onload = () =>{
    const parrafo = document.getElementById("parrafo");
    const remarcada = parrafo.innerHTML;
    const sinRemarca = parrafo.innerText;
    
    parrafo.innerHTML = sinRemarca; 

    parrafo.onmouseenter = () => {
        parrafo.innerHTML = remarcada;
    }
    parrafo.onmouseleave = () => {
        parrafo.innerHTML = sinRemarca;
    }
}
