indice = 0;
resultadosDep = null;
datosResultados = null;
async function mostrarDatos() {
    campoActual = null;
    ordenActual = null;
    numFilas = document.getElementById("selectFilas").value;
    if (numFilas == "") {
        document.getElementById("tabla").innerHTML = "";
        return;
    } else {
        try{
            let datosDept =await fetch("getDepartamentos.php",{method:"GET"})
            let datosTabla = await fetch("getEmpleados.php?q=" + numFilas + "&oculto=" + indice,{method:"GET"});

            if(!datosDept.ok){
                throw new Error(`Error de red: ${datosDept.status}`);
            }
            if(!datosTabla.ok){
                throw new Error(`Error de red: ${datosTabla.status}`);
            }
            resultadosDep = eval( await datosDept.json());
            cargarDatos( await datosTabla.json());
        }catch(error){
            console.error('Error de fetch:', error);
        }
    }
}

function cargarDatos(resultados){
    datosResultados = resultados;
    if (resultadosDep !== null) {
        var tabla = document.createElement('table');
        tabla.setAttribute("border", 1);
        var cabecera = construirCabecera();
        tabla.id = "tablaEmpleados";
        tabla.appendChild(cabecera);
        for (let i = 0; i < resultados.length; i++) {
            let fila = construirFila(resultados[i], i);
            tabla.appendChild(fila);
        }
        document.getElementById("tabla").innerHTML = "";
        document.getElementById("tabla").appendChild(tabla);
    } else {
        cargarDatos(resultados);
    }
}

function construirCabecera() {
    var cabecera = document.createElement('tr');

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Núm. Empleado");
    titulo.appendChild(texto);
    var funcion = function () {
        ordenar(0);
    };
    titulo.onclick = funcion;
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Apellido");
    var funcion = function () {
        ordenar(1);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Oficio");
    var funcion = function () {
        ordenar(2);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Director");
    var funcion = function () {
        ordenar(3);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Fecha Alta");
    var funcion = function () {
        ordenar(4);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Salario");
    var funcion = function () {
        ordenar(5);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Comisión");
    var funcion = function () {
        ordenar(6);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Departamento");
    var funcion = function () {
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
    campo.setAttribute("readonly", true);
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "apellido";
    campo.type = "text";
    campo.value = datos.apellido;
    campo.onblur = (evento) => { actualizarFila(evento, n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "oficio";
    campo.type = "text";
    campo.value = datos.oficio;
    campo.onblur = (evento) => { actualizarFila(evento, n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "dir";
    campo.type = "number";
    campo.value = datos.dir;
    campo.onblur = (evento) => { actualizarFila(evento, n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "fecha_alt";
    campo.type = "text";
    campo.value = datos.fecha_alt;
    campo.onblur = (evento) => { actualizarFila(evento, n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "salario";
    campo.type = "number";
    campo.value = datos.salario;
    campo.onblur = (evento) => { actualizarFila(evento, n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "comision";
    campo.type = "number";
    campo.value = datos.comision;
    campo.onblur = (evento) => { actualizarFila(evento, n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var selector = document.createElement('select');
    selector.className = "dept_no";
    selector.id = "selectDep" + n;
    selector.name = "dep" + n;
    anadirDepartamento(selector, datos.dept_no);
    selector.onblur = (evento) => { actualizarFila(evento, n) };
    titulo.appendChild(selector);
    linea.appendChild(titulo);

    return linea;
}

function anterior() {
    if (indice > 0 && indice >= numFilas) {
        indice = indice - numFilas;
    } else {
        indice = 0;
    }
    if (campoActual === null) {
        mostrarDatos();
    } else {
        mostrarOrdenar(campoActual, ordenActual);
    }
}
function siguiente() {
    indice = parseInt(indice) + parseInt(numFilas);
    if (campoActual === null) {
        mostrarDatos();
    } else {
        mostrarOrdenar(campoActual, ordenActual);
    }
}

function ordenar(columna) {
    indice = 0;
    switch (columna) {
        case 0:
            campoActual = "emp_no";
            if (ordenActual !== "ASC") {
                ordenActual = 0;
                ordenActual = "ASC";
            } else {
                ordenActual = "DESC"
            }
            break;
        case 1:
            campoActual = "apellido";
            if (ordenActual !== "ASC") {
                ordenActual = 1;
                ordenActual = "ASC";
            } else {
                ordenActual = "DESC"
            }
            break;
        case 2:
            campoActual = "oficio";
            if (ordenActual !== "ASC") {
                ordenActual = 2;
                ordenActual = "ASC";
            } else {
                ordenActual = "DESC"
            }
            break;
        case 3:
            campoActual = "dir";
            if (ordenActual !== "ASC") {
                ordenActual = 3;
                ordenActual = "ASC";
            } else {
                ordenActual = "DESC"
            }
            break;
        case 4:
            campoActual = "fecha_alt";
            if (ordenActual !== "ASC") {
                ordenActual = 4;
                ordenActual = "ASC";
            } else {
                ordenActual = "DESC"
            }
            break;
        case 5:
            campoActual = "salario";
            if (ordenActual !== "ASC") {
                ordenActual = 5;
                ordenActual = "ASC";
            } else {
                ordenActual = "DESC"
            }
            break;
        case 6:
            campoActual = "comision";
            if (ordenActual !== "ASC") {
                ordenActual = 6;
                ordenActual = "ASC";
            } else {
                ordenActual = "DESC"
            }
            break;
        case 7:
            campoActual = "dept_no";
            if (ordenActual !== "ASC") {
                ordenActual = 7;
                ordenActual = "ASC";
            } else {
                ordenActual = "DESC"
            }
            break;
        default:
            break;
    }
    mostrarOrdenar(campoActual, ordenActual);
}

function mostrarOrdenar(campo, tipo) {
    numFilas = document.getElementById("selectFilas").value;
    fetch("getEmpleados.php?q=" + numFilas + "&oculto=" + indice + "&campo=" + campo + "&ordenar=" + tipo,{method: "GET"})
    .then(response =>{
        if(!response.ok){
            throw new Error(`Error de red: ${response.status}`);
        }
        return response.json();
    }).then(resultados =>{
        datosResultados = resultados;
        var tabla = document.createElement('table');
        tabla.setAttribute("border", 1);
        var cabecera = construirCabecera();
        tabla.id = "tablaEmpleados";
        tabla.appendChild(cabecera);
        for (let i = 0; i < resultados.length; i++) {
            let fila = construirFila(resultados[i], i);
            tabla.appendChild(fila);
        }
        document.getElementById("tabla").innerHTML = "";
        document.getElementById("tabla").appendChild(tabla);
    }).catch(error => {
        console.error('Error de fetch:', error);
    });
}

function anadirDepartamento(selector, dep_no) {
    resultadosDep.forEach(departamento => {
        let opcion = document.createElement("option");
        opcion.value = departamento.dept_no;
        opcion.innerText = departamento.dnombre;

        if (dep_no == departamento.dept_no) {
            opcion.selected = true;
        }
        selector.appendChild(opcion);
    });
}

function insertarFila() {
    let tabla = document.getElementById("tablaEmpleados");
    linea = document.createElement('tr');
    linea.id = "nuevoempleado";

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "emp_no";
    campo.type = "number";
    campo.setAttribute("readonly", true);
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "apellido";
    campo.type = "text";
    campo.onblur = annadirFila;
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "oficio";
    campo.type = "text";
    campo.onblur = annadirFila;
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "dir";
    campo.type = "number";
    campo.onblur = annadirFila;
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "fecha_alt";
    campo.type = "text";
    campo.onblur = annadirFila;
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "salario";
    campo.type = "number";
    campo.onblur = annadirFila;
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "comision";
    campo.type = "number";
    campo.onblur = annadirFila;
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "dept_no";
    campo.type = "number";
    campo.onblur = annadirFila;
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    tabla.appendChild(linea);
}

function annadirFila(evento) {
    let todo = evento.target;
    let esteCampo = todo.classList[0];
    let valor = todo.value;

    try {
        fetch("annadirEmpleados.php?q=" + numFilas + "&campo=" + esteCampo + "&valor=" + valor,{method: "GET"})
        .then(response => {
            if(response.ok){
                todo.parentElement.parentElement.remove();
            }else{
                throw new Error(`Error de red: ${response.status}`);
            }
        });
    } catch (error) {
        console.error(error);
    }
}

function actualizarFila(evento, n) {
    let todo = evento.target;
    let esteCampo = todo.classList[0];
    let valor = todo.value;
    let id = datosResultados[n].emp_no;
    try {
        fetch("updateEmpleados.php?q=" + numFilas + "&campo=" + esteCampo + "&valor=" + valor + "&id=" + id,{method: "GET"})
        .then(response => {
            if(!response.ok){
                throw new Error(`Error de red: ${response.status}`);
            }
        });
    } catch (error) {
        console.error(error);
    }
}
