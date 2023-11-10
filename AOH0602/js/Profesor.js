function Profesor(nombre, DNI, departamento){
    this.base=Persona;
    this.base(nombre,DNI);
    this.departamento = departamento;
}
Profesor.prototype= new Persona;