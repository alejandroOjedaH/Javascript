/*8-Modifica el ejercicio anterior para 
poder pintar también campos de tipo texto, password, boton, select, 
radio y checkbox, pidiendo más o menos datos en función de cada tipo de botón.
*/
let numero = prompt("Dime el numero de campos de tu formulario");
for (let index = 0; index < numero; index++) {
    let campo = prompt("¿Que tipo de campos quieres, \"texto\", \"password\",\"boton\",\"select\",\"radio\" o \"checkbox\"");
    let nombre = prompt("Dime el nombre del campo");
    
    if(campo == "texto"){
        let valor = prompt("Dime el valor por defecto");
        document.write("<p>"+nombre+": <input type=\"text\" name=\""+nombre+"\" size=\"40\"value=\""+valor+"\"></p>");
    }else if(campo == "password"){
        document.write("<p>"+nombre+": <input type=\"password\" name=\""+nombre+"\" size=\"40\"></p>");
    }else if(campo == "boton"){
        document.write("<input type=\"button\" value=\""+nombre+"\"></p>");
    }else if(campo == "select"){
        document.write(nombre+": <select name=\""+nombre+"\">");
        let numero_select = prompt("Dime el numero de opciones de tu select");
        for (let index = 0; index < numero_select; index++) {
            nombre = prompt("Dime un nombre de la opcion");
            document.write("<option value=\""+nombre+"\">"+nombre+"</option>");
        }
        document.write("</select><br/>");
    }else if(campo == "radio"){
        document.write("<br/><fieldset>");
        document.write("<legend>"+nombre+"</legend><div>");
        let numero_radio = prompt("Dime el numero de opciones de tu radio");
        for (let index = 0; index < numero_radio; index++) {
            let opcion = prompt("Dime un nombre de la opcion");
            document.write("<input type=\"radio\" id=\""+opcion+"\" name=\""+nombre+"\" value=\""+opcion+"\"/>");
            document.write("<label for=\""+opcion+"\">"+opcion+"</label>");
        }
        document.write("</div></fieldset>");

    }else if(campo == "checkbox"){
        document.write("<br/><fieldset>");
        document.write("<legend>"+nombre+"</legend><div>");
        let numero_radio = prompt("Dime el numero de opciones de tu radio");
        for (let index = 0; index < numero_radio; index++) {
            let opcion = prompt("Dime un nombre de la opcion");
            document.write("<input type=\"checkbox\" id=\""+opcion+"\" name=\""+nombre+"\" value=\""+opcion+"\"/>");
            document.write("<label for=\""+opcion+"\">"+opcion+"</label>");
        }
        document.write("</div></fieldset>");
    }
}
