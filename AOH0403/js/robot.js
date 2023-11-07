window.onload = () =>{
    const quiz = document.getElementsByClassName("quizArea")[0];
    const ol = quiz.getElementsByTagName("ol")[0];
    const preguntas = ol.children;
    

    crearDivs();

    function crearDivs(){
        let preguntaTexto =document.getElementsByClassName("t1");
        let anuncios = document.getElementsByClassName("slide-ad");
        quiz.parentNode.parentNode.parentNode.className="entry-content";
        
        for (let i = 0; i < anuncios.length; i++) {
            anuncios[0].remove();
            i--;
        }
        
        for (let i = 0; i < preguntas.length; i++) {
            const element = preguntas[i];
            let texto="";
            let respuestas = element.getElementsByTagName("li");
            let tieneRespuesta = true;
            const textoExplicativo = document.getElementsByClassName("quiz-answer-explanation");
            let palabrasMasUsadas = devolcerUsadas(textoExplicativo[i]);
            
            texto += "<div style=\"border: 2px solid red;float: left;width:50%; height:100%;clear:left;\">";
            texto+="<h3>"+preguntaTexto[i].innerHTML+"</h3><br>";
            texto+= "<h4>Respuestas: </h4><br><ul>";
            for (let j = 0; j < respuestas.length; j++) {
                texto+="<li>";
                const respuesta = respuestas[j].children[1].innerHTML;
                if(comprobarRespuesta(respuesta,textoExplicativo[i]) && tieneRespuesta){
                    texto+="<span style=\"color: red\">"+respuesta+"</span><br>";
                    tieneRespuesta=false;
                }else{
                    texto+=respuesta+"<br>";
                }
                texto+="</li>";
            }
            texto+= "</ul><h4>Palabras que mas aparecen: </h4><br>";
            texto+= palabrasMasUsadas.join(", ")+"<br>";
            
            texto += "</div>";
            texto += "<div style=\"float: left;width:50%;height:100%;\">"+element.innerHTML+"</div>";
            element.innerHTML=texto;
        }
    }
    function comprobarRespuesta(respuesta,acertar){
        acertar = acertar.innerHTML.split(" ");
        respuesta = new RegExp(respuesta);

        for (let i = 0; i < acertar.length; i++) {
            const element = acertar[i];
            if(respuesta.test(element)){
                return true;
            }
        }
        return false;
    }
    function devolcerUsadas(texto){
        texto = texto.innerText.toLowerCase().match(/\b\w+\b/g);
        let palabras = [];

        for (let i = 0; i < texto.length; i++) {
            const palabra = texto[i];
            
            if(palabras[palabra]){
                palabras[palabra]++;
            }else{
                palabras[palabra]=1;
            }
        }
        palabras = Object.keys(palabras).sort((a,b) => palabras[b] - palabras[a]);
        return palabras.slice(0,3);
    }
}