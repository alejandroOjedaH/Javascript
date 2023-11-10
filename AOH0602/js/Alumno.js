function Alumno(nombre, DNI, curso){
    this.base=Persona;
    this.base(nombre,DNI);
    this.curso = curso;
}
Profesor.prototype = new Persona;