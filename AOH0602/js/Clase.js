function Clase(){
    this.aula;
    this.profesor;
    this.alumnos;

    function asignarProfesor(profesor){
        if(profesor instanceof Profesor){
            this.profesor = profesor;
        }
    }

    function asignarAlumnos(alumnos){
        this.alumnos = alumnos;
    }

    function cambiarAula(aula){
            this.aula = aula;
    }

    function expulsarDeClase(dni){
        if(this.profesor != null && this.profesor.DNI == dni){
            this.profesor = null;
            return true;
        }
        for (let i = 0; i < this.alumnos.length; i++) {
            const element = this.alumnos[i];
            if(element.DNI == dni){
                this.alumnos.splice(i,1);
                return true;
            }
        }
        return false;
    }

    return{
        asignarProfesor,
        asignarAlumnos,
        cambiarAula,
        expulsarDeClase,
    }
}