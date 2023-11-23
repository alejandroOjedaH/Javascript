/** 
 * @author Alejandro
 * @version Prueba
 * @pc 03
*/
/*
Códigos de ayuda, por si los quieres utilizar:

//Variables globales para moficar los inputs

var goodPbar=document.querySelector('#goodPbar');
var enemyPbar=document.querySelector('#enemyPbar');
var action=document.querySelector('#action');


// Generar número entero aletorio entre 0 y 2, es decir 0, 1 o 2

Math.round(Math.random()*2
*/

luchadores = null;
armas = null;
window.onload= () =>{
    let botIniciar = document.getElementById("binit");
    let botAtacar = document.getElementById("bplay");
    let accion = document.getElementById("action");
    let j1 =document.getElementById("p1");
    let j2= document.getElementById("p2");
    let b1= document.getElementById("goodPbar");
    let b2= document.getElementById("enemyPbar");

    botAtacar.disabled=true;

    botIniciar.onclick = iniciarBatalla;
    botAtacar.onclick = atacar;

    function atacar(){
        let numeroAuxiliar=parseInt(Math.random()*2);
        let atacante= luchadores[numeroAuxiliar];
        let ataque = atacante.armaSeleccionada.daño-atacante.profesion.modificador;
        let oponente;

        if(numeroAuxiliar==0){
            oponente=luchadores[1];
        }else{
            oponente = luchadores[0];
        }
        oponente.vida = oponente.vida - ataque;
        atacante.vida = atacante.vida + ataque;
        if(oponente.vida<=0){
            botAtacar.disabled=true;
            accion.innerText = oponente.nombre+" a muerto";
        }else{
            accion.innerText = atacante.nombre+" ataca a "+oponente.nombre;
        }
        mostrarLuchadores();
    }
    function mostrarLuchadores(){
        let l1 = luchadores[0];
        let l2 = luchadores[1];
        
        j1.innerHTML="Nombre: "+l1.nombre+"\nProfesion: "+l1.profesion.nombre+"\nArma: "+l1.armaSeleccionada.nombre+"\nVida: "+l1.vida;
        j2.innerHTML="Nombre: "+l2.nombre+"\nProfesion: "+l2.profesion.nombre+"\nArma: "+l2.armaSeleccionada.nombre+"\nVida: "+l2.vida;
        
        b1.value = l1.vida;
        b2.value = l2.vida;
    }
    function iniciarBatalla(){
        armas=[];
        luchadores =[];
        
        armas.push(new Arma("Florete"));
        armas.push(new Arma("Cimitarra"));
        armas.push(new Arma("Puños"));

        luchadores.push(new Luchador("Iñigo Montoya", armas, new Profesion("Espadachin")));
        luchadores.push(new Luchador("Conde Rugen", armas, new Profesion("Pirata")));
        mostrarLuchadores();
        botAtacar.disabled=false;
    }
}


//clases
class Luchador{
    constructor(nombre,armas,profesion){
        this.nombre = nombre;
        this.armas = armas;
        this.armaSeleccionada = armas[parseInt(Math.random()*3)];
        this.profesion = profesion;
        this.vida = parseInt(Math.random()*3)+4;
    }
}

class Arma{
    constructor(nombre) {
        this.nombre =nombre;
        this.daño = parseInt(Math.random()*3)+1;
    }
}

class Profesion{
    constructor(nombre) {
        this.nombre =nombre;
        this.modificador =parseInt(Math.random()*2);
    }
}