class Coche{
    constructor(matricula, marca, modelo, potenciaCV){
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.potenciaCV = potenciaCV;
    }
}
class Cliente{
    constructor(dni){
        this.dni = dni;
        this.coches = [];
    }
}

class Concesionario{
    constructor(){
        this.coches = [];
        this.clientes = [];
    }
}