lectores = [];
biblioteca = [];
seleccionado = null;
lectorActual = null;

window.onload = () =>{
    rellenarDatos();
    mostrarPantalla();

    function mostrarPantalla(){
        const lectoresSec = document.getElementById("header");
        const actualSec = document.getElementById("actual");
        const lectoSec = document.getElementById("lector");
        const multaSec = document.getElementById("multa");
        const bibliotecaSec = document.getElementById("right"); 
        let cadena="";

        lectores.forEach(lector => {
            cadena+="<div class = \"tarjeta\">";
            cadena+="<span>Numero de socio: "+lector.nSocio+"</span>";
            cadena+="<span>Nombre: "+lector.nombre+"</span>";
            cadena+="<span>Telefono: "+lector.telefono+"</span>";
            cadena+="<span>Direccion: "+lector.direccion+"</span>";
            cadena+="<button type=\"submit\" class=\"lector\">Cambiar lector</button>";
            cadena+="</div>";
        });
        lectoresSec.innerHTML=cadena;

        cadena = "";
        biblioteca.forEach(copia => {
            cadena+="<div class = \"tarjeta\">";
            cadena+="<span>Titulo: "+copia.libro.titulo+"</span>";
            cadena+="<span>Tipo: "+copia.libro.tipo+"</span>";
            cadena+="<span>Editorial: "+copia.libro.editorial+"</span>";
            cadena+="<span>Año: "+copia.libro.anyo+"</span>";
            cadena+="<span>Autor: "+copia.libro.autor.nombre+"</span>";
            cadena+="<span>Estado: "+copia.estado+"</span>";
            cadena+="<span hidden>"+copia.id+"</span>";
            cadena+="<button type=\"submit\" class=\"alquilar\">Alquilar</button>";
            cadena+="</div>";
        });
        bibliotecaSec.innerHTML= cadena;
        
        if(lectorActual != null){
            cadena = "Lector: "+lectorActual.nSocio;
            cadena += "<button type=\"submit\" class=\"multar\">Multar</button>";
            actualSec.innerHTML = cadena;

            cadena ="";
            lectorActual.prestamos.forEach(prestamo => {
                cadena+="<div class = \"tarjeta\">";
                cadena+="<span>Titulo: "+prestamo.copia.libro.titulo+"</span>";
                cadena+="<span>Tipo: "+prestamo.copia.libro.tipo+"</span>";
                cadena+="<span>Editorial: "+prestamo.copia.libro.editorial+"</span>";
                cadena+="<span>Año: "+prestamo.copia.libro.anyo+"</span>";
                cadena+="<span>Autor: "+prestamo.copia.libro.autor.nombre+"</span>";
                cadena+="<span>Estado: "+prestamo.copia.estado+"</span>";
                cadena+="<h2>"+prestamo.fin.toDateString()+"</h2>";
                cadena+="<span hidden>"+prestamo.copia.id+"</span>";
                cadena+="<button type=\"submit\" class=\"devolver\">Devolver</button>";
                cadena+="</div>";
            });
            lectoSec.innerHTML=cadena;
            
            cadena ="";
            if(lectorActual.multa != null){
                cadena+="<div class = \"tarjeta\">";
                cadena+="<span>Fecha inicio: "+lectorActual.multa.fInicio.toDateString()+"</span>";
                cadena+="<span>Fecha de expiracion: "+lectorActual.multa.fFin.toDateString()+"</span>";
                cadena+="<button type=\"submit\" class=\"expirar\">Expirar Multa</button>";
                cadena+="</div>";
            }
            multaSec.innerHTML=cadena;
            
        }
        addEvents();
    }

    function addEvents(){
        let botones = document.getElementsByTagName("button");

        for (let i = 0; i < botones.length; i++) {
            const boton = botones[i];
            if (boton.classList.contains("lector")) {
                boton.onclick = cambiarLector;
            }
            if(boton.classList.contains("alquilar")){
                boton.addEventListener("click",function(){lectorActual.prestar(this, new Date()); mostrarPantalla();});
            }
            if(boton.classList.contains("devolver")){
                boton.addEventListener("click",function(){lectorActual.devolver(this, new Date()); mostrarPantalla();});
            }
            if(boton.classList.contains("multar")){
                boton.addEventListener("click",function(){lectorActual.multar(7); mostrarPantalla();});
            }
            if(boton.classList.contains("expirar")){
                boton.addEventListener("click",function(){expirarMulta();});
            }
        }
    }
    
    function rellenarDatos(){
        //Autores
        let autor1 = new Autor("Marcos","Turquia",1005);
        let autor2 = new Autor("El capitan","España",2022);
        let autor3 = new Autor("Alejandro","Portugal",2000);

        //Libros
        let libro1 = new Libro("El nombre del viento","Fantasia","banpresto",1998,autor1);
        let libro2 = new Libro("La rueda del tiempo","Intriga","Konami",2009,autor2);
        let libro3 = new Libro("La isla del tesoro","aventura","Konami",1843,autor3);

        //Copias
        let libro1C1 = new Copia(1, "bueno", libro1); 
        let libro1C2 = new Copia(2, "pesimo", libro1);
        let libro1C3 = new Copia(3, "excelente", libro1);
        let libro2C1 = new Copia(4, "excelente", libro2);
        let libro2C2 = new Copia(5, "pesimo", libro2);
        let libro3C1 = new Copia(6, "excelente", libro3);

        //lectores
        let lector1 = new Lector(1,"Fraga",55555,"patxi@gmail.com");
        let lector2 = new Lector(2,"Adri",33333,"adri@gmail.com");
        let lector3 = new Lector(3,"Andres",1111,"andres@gmail.com");
        
        //Añadir a colecciones
        biblioteca.push(libro1C1, libro1C2, libro1C3, libro2C1, libro2C2, libro3C1);
        lectores.push(lector1, lector2,lector3);
    }

    function expirarMulta(){
        lectorActual.multa = null;
        mostrarPantalla();
    }

    function cambiarLector(event){
        let numeroSocio = event.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText;
        numeroSocio = numeroSocio.split(":")[1].trim();
    
        lectores.forEach(lector => {
            if(lector.nSocio == numeroSocio){
                lectorActual =lector;
            }
        });
        mostrarPantalla();
    }
}

class Multa{
    constructor(fInicio,fFin) {
        this.fInicio = fInicio;
        this.fFin = fFin;
    }
}

class Lector{
    constructor(nSocio, nombre,telefono, direccion) {
        this.nSocio = nSocio;
        this.nombre = nombre;
        this.telefono =telefono;
        this.direccion =direccion;
        this.prestamos = [];
        this.multa = null;
    }
    devolver(id, fechaAct){
        let copia;
        id=id.previousSibling.innerText;
        
        for (let i = 0; i < this.prestamos.length; i++) {
            const element = this.prestamos[i];
            if(element.copia.id == id){
                copia =element.copia;
                this.prestamos.splice(i,1);
            }
        }
        biblioteca.push(copia);
    }
    prestar(id, fechaAct){
        let prestamo;
        let copia;
        if(this.multa == null){
            id=id.previousSibling.innerText;
            for (let i = 0; i < biblioteca.length; i++) {
                const element = biblioteca[i];
                if(element.id == id){
                    copia=element;
                    biblioteca.splice(i,1);
                }
            }

            prestamo =new Prestamo(copia, fechaAct,new Date(fechaAct.getDate()+7),this);

            this.prestamos.push(prestamo);
        }
    }
    multar(dias){
        let fechaAct = new Date();
        this.multa=new Multa(fechaAct, new Date(fechaAct.getDate()+dias));
    }
}

class Prestamo{
    constructor(copia, inicio, fin, lector){
        this.copia = copia;
        this.inicio = inicio;
        this.fin = fin;
        this.lector = lector;
    }
}
class Libro{
    constructor(titulo, tipo, editorial, anyo, autor) {
        this.titulo = titulo;
        this.tipo=tipo;
        this.editorial=editorial;
        this.anyo=anyo;
        this.autor=autor;
    }
}

class Copia{
    constructor(id, estado, libro) {
        this.id = id;
        this.estado =estado;
        this.libro =libro;
    }
}

class Autor{
    constructor(nombre, nacionalidad,fechaNacimiento){
        this.nombre=nombre;
        this.nacionalidad=nacionalidad;
        this.fechaNacimiento=fechaNacimiento;
    }
}