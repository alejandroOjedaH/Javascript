lectores = [];
biblioteca = [];
seleccionado = null;

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
            cadena+="</div>";
        });
        lectoresSec.innerHTML=cadena;
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
        let libro3C1 = new Copia(3, "excelente", libro3);

        //lectores
        let lector1 = new Lector(1,"Fraga",55555,"patxi@gmail.com");
        let lector2 = new Lector(2,"Adri",33333,"adri@gmail.com");
        let lector3 = new Lector(3,"Andres",1111,"andres@gmail.com");
        
        //Añadir a colecciones
        biblioteca.push(libro1C1, libro1C2, libro1C3, libro2C1, libro2C2, libro3C1);
        lectores.push(lector1, lector2,lector3);
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
        this.multa;
    }
    devolver(id, fechaAct){
            
    }
    prestar(id, fechaAct){
        
    }
    multar(dias){
        let fechaAct = new Date();
        this.multa=new Multa(fechaAct, fechaAct.setDate(fechaAct.getDate+dias));
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