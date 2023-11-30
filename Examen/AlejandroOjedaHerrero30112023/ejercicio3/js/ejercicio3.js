/**
 * @author
 * @version Prime trimestre 30/11/2023
 */


window.onload = function() {
    contadorFinPartida = 0;
    numeros = [];
    cAnterior = null;
    let cuerpo =document.getElementsByTagName("body")[0];
    let divs = document.getElementsByTagName("div");
    let cadena="";

    generarJuego();
    generarEventos();

    function generarEventos(){
        for (let i = 0; i < divs.length; i++) {
            const cuadrado = divs[i];
            cuadrado.onclick = comprobar;
        }
    }

    function comprobar(evento){
        let cActual = evento.target.getElementsByTagName("span")[0];
        cActual.style= "opacity: 1;";

        if(cAnterior === null){
            cAnterior = cActual;
        }else{           
            if(cActual.innerText !== cAnterior.innerText){
                setTimeout(() => {
                        alert("¡Has fallado!");
                        cActual.style= "opacity: 0;";
                        cAnterior.style= "opacity: 0;";
                        cAnterior = null;
                }, 1);
            }else{
                setTimeout(() => {
                    if(contadorFinPartida < 3){
                        alert("¡Has acertado!");
                        cAnterior = null;
                        contadorFinPartida++;
                    }else{
                        alert("¡Has Ganado!");
                        reiniciarJuego();
                    }
                }, 1);
            } 
        }
    }
    
    function reiniciarJuego(){
        contadorFinPartida = 0;
        numeros = [];
        cAnterior = null;
        cuerpo.innerHTML="<center>JUEGO DE PAREJAS</center>";
        cadena="";
        generarJuego();
        generarEventos();
    }

    function generarJuego(){
        let numeroAleatorio;
        let c1=0,c2=0,c3=0,c4=0;
        let contadorSalto=parseInt(0);
        let usado=true;
        while(c1 < 2 || c2 < 2 || c3 < 2 || c4 < 2){
            numeroAleatorio= parseInt(Math.random()*4);
            if(contadorSalto == 4 && usado){
                cadena+="<br>";
                usado =false;
            }
            if(numeroAleatorio === 0 && c1 < 2){  
                cadena+="<div><span id=\"cajaJuego\">1</span></div>";
                numeros.push(1);
                c1++;
                contadorSalto++;
            }else if(numeroAleatorio === 1 && c2 < 2){
                cadena+="<div><span id=\"cajaJuego\">2</div>";
                numeros.push(2);
                c2++;
                contadorSalto++;
            }else if(numeroAleatorio === 2 && c3 < 2){
                cadena+="<div><span id=\"cajaJuego\">3</div>";
                numeros.push(3);
                c3++;
                contadorSalto++;
            }else if(numeroAleatorio === 3 && c4 < 2){
                numeros.push(4);
                cadena+="<div><span id=\"cajaJuego\">4</div>";
                c4++;
                contadorSalto++;
            }
        }
        cuerpo.innerHTML+= cadena;
        }
    }