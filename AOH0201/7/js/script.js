/*7-Crea un formulario de manera dinámica. Cada vez que se entre en la web se pedirá mediante 
promt el número de campos que debe tener el formulario, y para cada uno de ellos el tipo (Texto, password o botón), 
el nombre y el valor por defecto. Seguidamente se creará un formulario plenamente funcional con los parámetros indicados.
*/
let numero = prompt("Dime el numero de campos de tu formulario");
for (let index = 0; index < numero; index++) {
    let campo = prompt("¿Que tipo de campos quieres, \"texto\", \"password\" o \"boton\"");
    let nombre = prompt("Dime el nombre del campo");
    
    if(campo == "texto"){
        let valor = prompt("Dime el valor por defecto");
        document.write("<p>"+nombre+": <input type=\"text\" name=\""+nombre+"\" size=\"40\"value=\""+valor+"\"></p>");
    }else if(campo == "password"){
        document.write("<p>"+nombre+": <input type=\"password\" name=\""+nombre+"\" size=\"40\"></p>");
    }else if(campo == "boton"){
        document.write("<input type=\"button\" value=\""+nombre+"\"></p>");
    }
}
