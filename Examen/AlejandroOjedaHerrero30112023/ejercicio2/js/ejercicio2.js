/**
 * @author
 * @version Prime trimestre 30/11/2023
 */

window.onload =()=>{
    let formulario= document.getElementsByTagName("form")[0];
    generarPreguntas();

    function generarPreguntas(){
        let cadena="";
        for (let j = 0; j < 4; j++) {
        let numeroRandom =parseInt(Math.random()*4);
        if(j==0){
            cadena+="<br>Primera pregunta del test";
        }else if(j==1){
            cadena+="<br>Segunda pregunta del test";
        }else if(j==2){
            cadena+="<br>Tercera pregunta del test";
        }else if(j==3){
            cadena+="<br>Cuarta pregunta del test";
        }
        if(numeroRandom==0){
            cadena+="... La respuesta es A";
        }else if(numeroRandom==1){
            cadena+="... La respuesta es B";
        }else if(numeroRandom==2){
            cadena+="... La respuesta es C";
        }else if(numeroRandom==3){
            cadena+="... La respuesta es D";
        }
        for (let i = 0; i < 4; i++) {

            if(i==0){
                cadena+=("<br><label for=\"nombre"+j+"\">Texto de la respuesta A</label>");
                if(numeroRandom==0){
                    cadena+=("<input type=\"radio\" class=\"falso\" name=\"nombre"+j+"\" value=\"verdadero\"/>");
                }else{
                    cadena+=("<input type=\"radio\" name=\"nombre"+j+"\" value=\"falso\"/>");
                }
            }else if(i==1){
                cadena+=("<br><label for=\"nombre"+j+"\">Texto de la respuesta B</label>");
                if(numeroRandom==1){
                    cadena+=("<input type=\"radio\" class=\"falso\" name=\"nombre"+j+"\" value=\"verdadero\"/>");
                }else{
                    cadena+=("<input type=\"radio\" name=\"nombre"+j+"\" value=\"falso\"/>");
                }
            }else if(i==2){
                cadena+=("<br><label for=\"nombre"+j+"\">Texto de la respuesta C</label>");
                if(numeroRandom==2){
                    cadena+=("<input type=\"radio\" class=\"falso\" name=\"nombre"+j+"\" value=\"verdadero\"/>");
                }else{
                    cadena+=("<input type=\"radio\" name=\"nombre"+j+"\" value=\"falso\"/>");
                }
            }else if(i==3){
                cadena+=("<br><label for=\"nombre"+j+"\">Texto de la respuesta D</label>");
                if(numeroRandom==3){
                    cadena+=("<input type=\"radio\" class=\"falso\" name=\"nombre"+j+"\" value=\"verdadero\"/>");
                }else{
                    cadena+=("<input type=\"radio\" name=\"nombre"+j+"\" value=\"falso\"/>");
                }
            }
        }
        }

        cadena += formulario.innerHTML;
        formulario.innerHTML=cadena;
    }
}