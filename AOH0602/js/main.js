window.onload = () =>{
    const clase = new Clase();
    const alumnos = [];

    alumnos.push(new Alumno("Alejandro", "1", "Dual"));
    alumnos.push(new Alumno("Marcos", "2", "Ordinario"));
    alumnos.push(new Alumno("Christian", "3", "Mega Dual"));
    alumnos.push(new Alumno("El pepe", "4", "Champiñonera"));

    
    clase.cambiarAula("C4");
    clase.asignarProfesor(new Profesor("Emilio", "5", "informatica"));
    clase.asignarAlumnos(alumnos);

    clase.cambiarAula("C5");

    clase.expulsarDeClase("5");
    clase.expulsarDeClase("4");
}