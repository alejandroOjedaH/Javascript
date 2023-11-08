window.onload = () =>{
    let concesionario =new Concesionario();
    let matricula;
    let dni;
    concesionario.abrir();
    concesionario.nuevoCliente();

    document.write(concesionario.toString());
    
    matricula = prompt("Matricula del coche a comprar");
    dni = prompt("DNI del comrador");
    concesionario.venta(matricula,dni);

    document.write(concesionario.toString());
}

class Coche{
    constructor(matricula, marca, modelo, potenciaCV){
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.potenciaCV = potenciaCV;
    }
    toString(){
        return "<br> Matricula: "+this.matricula+" marca: "+this.marca+" modelo: "+this.modelo+" potencia: "+this.potenciaCV;
    }
}
class Cliente{
    constructor(dni){
        this.dni = dni;
        this.coches = [];
    }
    toString(){
        let cadena = "DNI: "+this.dni+" Coches: ";
        this.coches.forEach(element => {
            cadena+= element.toString()+", ";
        });
        return cadena;
    }
}

class Concesionario{
    constructor(){
        this.coches = [];
        this.clientes = [];
    }
    abrir(){
        this.coches.push(new Coche("111AAA","Citroen","C4","30cv"));
        this.coches.push(new Coche("222BBB","Seat","Leon","100cv"));
        this.coches.push(new Coche("333CCC","Renault","19","120cv"));
    }
    nuevoCliente(){
        /*let dni="";
        for (let i = 0; i < 8; i++) {
            dni+=Math.random()*9;
        }
        dni+= String.fromCharCode((Math.random()*25)+65);*/
        this.clientes.push(new Cliente("12345678A"));
    }
    venta(matricula,dni){
        let coche, cliente,indice;
        
        for (let index = 0; index < this.coches.length; index++) {
            const element = this.coches[index];
            if(matricula === element.matricula){
                coche = element;
                indice = index;
            }
        }
        this.clientes.forEach(element => {
            if(dni == element.dni){
                cliente=element;
            }
        });
        if(coche !=undefined && cliente !=undefined){
            this.coches.splice(indice,1);
            cliente.coches.push(coche);
        }
    }
    toString(){
        let cadena = "<br>Concesionario <br>Coches:";
        this.coches.forEach(element => {
            cadena+= element.toString()+", ";
        });
        cadena+= "<br>Cliente: ";
        this.clientes.forEach(element => {
            cadena+= "<br>"+element.toString();
        });
        return cadena;
    }
}