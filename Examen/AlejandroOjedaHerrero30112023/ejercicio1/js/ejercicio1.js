/**
 * @author
 * @version Prime trimestre 30/11/2023
 */

//CREA LAS CLASES AQUÍ/////////////////////////////////////////////////////////////////////////
 class Player {
    constructor(nombre) {
        this.nombre = nombre;
        this.puntuacion = 0;
    }
    sumarPuntos(puntos){
        this.puntuacion= parseInt(puntos)+this.puntuacion;
    }
    mostrarInfo(){
        console.log("Jugador: "+this.nombre+" - Puntuacion: "+this.puntuacion);
    }
 }

 class Category{
    constructor(nombre){
        this.nombre=nombre;
    }
 }

 class Question{
    constructor(enunciado, opciones,respuestaCorrecta, categoria, dificultad){
        this.enunciado=enunciado;
        this.opciones=opciones;
        this.respuestaCorrecta=respuestaCorrecta;
        this.categoria=categoria;
        this.dificultad=dificultad;
    }
    
    calcularPuntuacion(){
        if(this.dificultad === 'Medio'){
            return parseInt(1);
        }else if(this.dificultad === 'Difícil'){
            return parseInt(1);
        }
        else if(this.dificultad === 'Fácil'){
            return parseInt(1);
        }
    }
 }
 
 class Quiz{
    constructor(categorias, jugadores,preguntas){
        this.categorias=categorias;
        this.jugadores=jugadores;
        this.preguntas=preguntas;
    }
    jugar(){
        let categoriaActual=null;
        let preguntaActual=null;
        let respuesta=null;
        let cadenaCategoria="Selecciona una: "+this.categorias[0].nombre+", "+this.categorias[1].nombre+", "+this.categorias[2].nombre;
        let cadenaPregunta =null;
        let j1 = this.jugadores[0];
        let j2 = this.jugadores[1]

        //Jugador1
        console.log("Turno "+j1.nombre);
        categoriaActual=prompt(cadenaCategoria);
        this.preguntas.forEach(pregunta => {
            if(pregunta.categoria.nombre===categoriaActual){
                preguntaActual = pregunta;
            }
        });
        
        cadenaPregunta="";
        cadenaPregunta+=preguntaActual.enunciado+"\n";
        cadenaPregunta+=preguntaActual.opciones[0]+"\n";
        cadenaPregunta+=preguntaActual.opciones[1]+"\n";
        cadenaPregunta+=preguntaActual.opciones[2]+"\n";
        cadenaPregunta+=preguntaActual.opciones[3]+"\n";

        respuesta = prompt(cadenaPregunta);

        if(preguntaActual.respuestaCorrecta == respuesta.toUpperCase()){
            console.log("¡Respuesta correcta! Puntuacion: +1");
            j1.sumarPuntos(preguntaActual.calcularPuntuacion());
        }else{
            console.log("Respuesta incorrecta");
        }
        j1.mostrarInfo();

        //Jugador2
        console.log("Turno "+j2.nombre);
        categoriaActual=prompt(cadenaCategoria);
        preguntaActual=null;
        this.preguntas.forEach(pregunta => {
            if(pregunta.categoria.nombre===categoriaActual){
                preguntaActual = pregunta;
            }
        });
        
        cadenaPregunta="";
        cadenaPregunta+=preguntaActual.enunciado+"\n";
        cadenaPregunta+=preguntaActual.opciones[0]+"\n";
        cadenaPregunta+=preguntaActual.opciones[1]+"\n";
        cadenaPregunta+=preguntaActual.opciones[2]+"\n";
        cadenaPregunta+=preguntaActual.opciones[3]+"\n";

        respuesta = prompt(cadenaPregunta);

        if(preguntaActual.respuestaCorrecta == respuesta.toUpperCase()){
            console.log("¡Respuesta correcta! Puntuacion: +1");
            j2.sumarPuntos(preguntaActual.calcularPuntuacion());
        }else{
            console.log("Respuesta incorrecta");
        }
        j2.mostrarInfo();

        this.calcularPuntuacionTotal();
        this.determinarGanador();
    }

    calcularPuntuacionTotal(){
        this.jugadores[0].mostrarInfo();
        this.jugadores[1].mostrarInfo();
    }

    determinarGanador(){
        let j1 = this.jugadores[0];
        let j2 = this.jugadores[1];
        if(j1.puntuacion === j2.puntuacion){
            console.log("¡Es un empate!");
        }else if(j1.puntuacion > j2.puntuacion){
            console.log("El ganador es "+j1.nombre+" con "+j1.puntuacion+" puntos");
        }
        else if(j1.puntuacion < j2.puntuacion){
            console.log("El ganador es "+j2.nombre+" con "+j2.puntuacion+" puntos");
        }
    }
 }
//CREA LAS CLASES AQUÍ/////////////////////////////////////////////////////////////////////////

//de aquí para abajo no debes modificar /////////////////////////////////////////////////////////////////////////

// Crear jugadores
const jugador1 = new Player("Jugador 1");
const jugador2 = new Player("Jugador 2");

// Crear categorías
const categoriaGeografia = new Category("Geografía");
const categoriaHistoria = new Category("Historia");
const categoriaCiencia = new Category("Ciencia");

// Crear preguntas
const pregunta1 = new Question("¿Cuál es el océano más grande?", ["A) Atlántico", "B) Índico", "C) Pacífico", "D) Ártico"], "C", categoriaGeografia, 'Medio');
const pregunta2 = new Question("¿En qué año ocurrió la Revolución Rusa?", ["A) 1917", "B) 1905", "C) 1923", "D) 1930"], "A", categoriaHistoria, 'Difícil');
const pregunta3 = new Question("¿Cuál es la velocidad de la luz?", ["A) 300,000 km/s", "B) 150,000 km/s", "C) 500,000 km/s", "D) 1,000,000 km/s"], "A", categoriaCiencia, 'Fácil');

// Crear juego y añadir jugadores, categorías y preguntas
const juego = new Quiz([categoriaGeografia, categoriaHistoria, categoriaCiencia], [jugador1, jugador2], [pregunta1, pregunta2, pregunta3]);

// Iniciar el juego
juego.jugar();
