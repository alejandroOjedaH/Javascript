window.onload = () =>{
    nombre = document.getElementById("spnombre").previousElementSibling;
    apellido = document.getElementById("spapellidos").previousElementSibling;

    nombre.onkeyup = comprobarNombre;
    apellido.onkeyup = comprobarNombre;
    
    function comprobarNombre(evento){
        let expresion=/^[a-zA-Z]{1}$/;
        let texto= evento.target.value;
        if(expresion.test(evento.key)){
          return true;
        }else{
           texto =texto.substring(texto.length-2,texto.length-1);
        }
    }
}