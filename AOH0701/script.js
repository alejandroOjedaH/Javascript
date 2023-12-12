indice = 0;
function mostrarDatos() {
    campoActual=null;
    ordenActual=null;
    numFilas = document.getElementById("selectFilas").value;
    if (numFilas == "") {
        document.getElementById("tabla").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var json = this.responseText;
                resultados=eval(json);
                var tabla = document.createElement('table');
				tabla.setAttribute("border", 1);
                var cabecera = construirCabecera();
                tabla.id="tablaEmpleados";
                tabla.appendChild(cabecera);
                for (let i = 0; i < resultados.length; i++) {
                    let fila = construirFila(resultados[i], i);
                    tabla.appendChild(fila);
                }
                document.getElementById("tabla").innerHTML = "";
                document.getElementById("tabla").appendChild(tabla);
            }
        };
        xmlhttp.open("GET", "getEmpleados.php?q=" + numFilas + "&oculto=" + indice, true);
        xmlhttp.send();
    }
}

function construirCabecera() {
    var cabecera = document.createElement('tr');

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Núm. Empleado");
    titulo.appendChild(texto);
    var funcion= function () {
        ordenar(0);
    };
    titulo.onclick = funcion;
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Apellido");
    var funcion= function () {
        ordenar(1);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Oficio");
    var funcion= function () {
        ordenar(2);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Director");
    var funcion= function () {
        ordenar(3);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Fecha Alta");
    var funcion= function () {
        ordenar(4);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Salario");
    var funcion= function () {
        ordenar(5);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Comisión");
    var funcion= function () {
        ordenar(6);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Departamento");
    var funcion= function () {
        ordenar(7);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    return cabecera;
}

function construirFila(datos, n) {
    linea = document.createElement('tr');

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "emp_no";
    campo.type = "number";
    campo.value = datos.emp_no;
    campo.setAttribute("readonly",true);
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "apellido";
    campo.type = "text";
    campo.value = datos.apellido;
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "oficio";
    campo.type = "text";
    campo.value = datos.oficio;
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "dir";
    campo.type = "number";
    campo.value = datos.dir;
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "fecha_alt";
    campo.type = "text";
    campo.value = datos.fecha_alt;
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "salario";
    campo.type = "number";
    campo.value = datos.salario;
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "comision";
    campo.type = "number";
    campo.value = datos.comision;
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var selector = document.createElement('select');
    selector.id= "selectDep"+n;
    selector.name = "dep"+n;
    mostrarDepart(selector,datos.dept_no);

    titulo.appendChild(selector);
    linea.appendChild(titulo);

    return linea;
}

function anterior(){
    if(indice>0 && indice>=numFilas){
        indice = indice-numFilas;
    }else{
        indice=0;
    }
    if(campoActual===null){
        mostrarDatos();
    }else{
        mostrarOrdenar(campoActual,ordenActual);
    }
}
function siguiente(){
    indice=parseInt(indice)+parseInt(numFilas);
    if(campoActual===null){
        mostrarDatos();
    }else{
        mostrarOrdenar(campoActual,ordenActual);
    }
}

function ordenar(columna){
    indice=0;
    switch (columna) {
        case 0:
            campoActual="emp_no";
            if(ordenActual!=="ASC"){
                ordenActual=0;
                ordenActual="ASC";
            }else{
                ordenActual="DESC"
            }
            break;
        case 1:
            campoActual="apellido";
            if(ordenActual!=="ASC"){
                ordenActual=1;
                ordenActual="ASC";
            }else{
                ordenActual="DESC"
            }
            break;
        case 2:
            campoActual="oficio";
            if(ordenActual!=="ASC"){
                ordenActual=2;
                ordenActual="ASC";
            }else{
                ordenActual="DESC"
            }
            break;
        case 3:
            campoActual="dir";
            if(ordenActual!=="ASC"){
                ordenActual=3;
                ordenActual="ASC";
            }else{
                ordenActual="DESC"
            }
            break;
        case 4:
            campoActual="fecha_alt";
            if(ordenActual!=="ASC"){
                ordenActual=4;
                ordenActual="ASC";
            }else{
                ordenActual="DESC"
            }
            break;
        case 5:
            campoActual="salario";
            if(ordenActual!=="ASC"){
                ordenActual=5;
                ordenActual="ASC";
            }else{
                ordenActual="DESC"
            }
            break;
        case 6:
            campoActual="comision";
            if(ordenActual!=="ASC"){
                ordenActual=6;
                ordenActual="ASC";
            }else{
                ordenActual="DESC"
            }
            break;
        case 7:
            campoActual="dept_no";
            if(ordenActual!=="ASC"){
                ordenActual=7;
                ordenActual="ASC";
            }else{
                ordenActual="DESC"
            }
            break;
        default:
            break;
    }
    mostrarOrdenar(campoActual,ordenActual);
}

function mostrarOrdenar(campo,tipo){
    numFilas = document.getElementById("selectFilas").value;
    if (numFilas == "") {
        document.getElementById("tabla").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var json = this.responseText;
                resultados=eval(json);
                var tabla = document.createElement('table');
				tabla.setAttribute("border", 1);
                var cabecera = construirCabecera();
                tabla.id="tablaEmpleados";
                tabla.appendChild(cabecera);
                for (let i = 0; i < resultados.length; i++) {
                    let fila = construirFila(resultados[i], i);
                    tabla.appendChild(fila);
                }
                document.getElementById("tabla").innerHTML = "";
                document.getElementById("tabla").appendChild(tabla);
            }
        };
        xmlhttp.open("GET", "getEmpleados.php?q=" + numFilas + "&oculto=" + indice + "&campo=" +campo + "&ordenar=" +tipo, true);
        xmlhttp.send();
    }
}

function mostrarDepart(selector,dep_no){
    let xmlhttpDep = new XMLHttpRequest();
    xmlhttpDep.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let jsonDep = this.responseText;
            let resultadosDep=eval(jsonDep);

            resultadosDep.forEach(departamento => {
                let opcion = document.createElement("option");
                opcion.value=departamento.dep_no;
                opcion.innerText=departamento.dnombre;

                if(dep_no == departamento.dept_no){
                    opcion.selected;
                }
                selector.appendChild(opcion);
            });
        }
    }
    xmlhttpDep.open("GET", "getDepartamentos.php", true);
    xmlhttpDep.send();
}

function insertarFila(){
    let tabla = document.getElementById("tablaEmpleados");
    linea = document.createElement('tr');
    linea.id="nuevoempleado";

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "emp_no";
    campo.type = "number";
    campo.setAttribute("readonly",true);
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "apellido";
    campo.type = "text";
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "oficio";
    campo.type = "text";
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "dir";
    campo.type = "number";
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "fecha_alt";
    campo.type = "text";
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "salario";
    campo.type = "number";
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "comision";
    campo.type = "number";
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "dept_no";
    campo.type = "number";
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);  

    tabla.appendChild(linea);
}

function agregar(evento){
    let todo = evento.target;
}