let citas = [];
let citasSonadas=[];
let dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
let meses = ["Enero","Febrero", "Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre", "Noviembre", "Diciembre"];
let fechaCalendario =new Date();

establecerReloj();
mostrarLista();
mostrarCalendario();
comprobarCita();

function establecerReloj(){
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    
    document.getElementById("reloj").innerText = hora+":"+minutos+":"+segundos;
    let t = setTimeout(function(){ establecerReloj() }, 1000);
}

function mostrarLista(){
    let lista = document.getElementById("listaCitas");
    let cadena="";
    citas.forEach(element => {
        cadena += "<li>"+element.fecha.getDate()+"/"+(element.fecha.getMonth()+1)+"/"+element.fecha.getFullYear()+" "+element.fecha.getHours()+":"+element.fecha.getMinutes() +" "+element.cita+"</li>";
    });
    
    if(citas.length!=0){
        lista.innerHTML = cadena;
    }
    let t = setTimeout(function(){ mostrarLista() }, 1000);
}

function anniadirCita(){
    let citasObj= {fecha, cita}
    let fechaCadena = document.getElementById("fecha");
    citasObj.fecha = new Date(fechaCadena.value);
    citasObj.cita = document.getElementById("cita").value;
    citas.push(citasObj);
}

function mostrarCalendario(){
    let contador=1;
    let calendario = document.getElementById("calendario");
    let calendarioCadena ="";
    let calendarioAux =new Date();
    calendarioAux.setDate(1);
    calendarioAux.setMonth(fechaCalendario.getMonth());
    calendarioAux.setFullYear(fechaCalendario.getFullYear());
    let totalDias = getDaysInMonth(calendarioAux.getMonth(),calendarioAux.getFullYear());
    document.getElementById("mesyanno").innerHTML= "<h2>Año: "+calendarioAux.getFullYear()+" Mes: "+meses[calendarioAux.getMonth()]+"</h2><br/>";


    calendarioCadena+="<tr>";
    for (let i = 0; i < dias.length; i++) {
        calendarioCadena += "<th>"+dias[i]+"</th>";
    }
    calendarioCadena+="</tr>";
    
    while(contador<=totalDias){
        calendarioCadena+="<tr>";
            for (let i = 0; i < 7; i++) {
                if(calendarioAux.getDay() != i || contador>totalDias){
                    calendarioCadena+="<td></td>";
                }     
                else if(calendarioAux.getDay() == i){
                    calendarioCadena+="<td class=\"celda\"><div class=\"numero\">"+calendarioAux.getDate()+"</div>";
                    calendarioCadena+="<div>";
                    citas.forEach(element => {
                        if(element.fecha.getFullYear()==calendarioAux.getFullYear() && element.fecha.getMonth()==calendarioAux.getMonth() && element.fecha.getDate()==calendarioAux.getDate()){
                            calendarioCadena+="<p class=\"cita\">"+element.fecha.getHours()+":"+element.fecha.getMinutes()+" "+element.cita+"</p>";
                        }
                    });
                    calendarioCadena+="</div>";
                    calendarioCadena+= "</td>";
                    if(calendarioAux.getDate()==totalDias){
                        saPasao=true;  
                    }
                    calendarioAux.setDate(calendarioAux.getDate()+1);
                    contador++;
                } 
            }
            calendarioCadena+="</tr>";
    }

    calendario.innerHTML=calendarioCadena;
    let t = setTimeout(function(){ mostrarCalendario() }, 1000);
}

function getDaysInMonth(mes, anno){
    let fecha =new Date(anno, mes);
    let fecha2;
    let num;

    if(mes==12){
        mes=1;
        anno++;
    }else{
        mes++;
    }
    fecha2=new Date(anno, mes);
    num=fecha2.getTime()-fecha.getTime();
    return Math.round(num/(1000*60*60*24));
}

function mesAnterior(){
    fechaCalendario.setMonth(fechaCalendario.getMonth()-1);
}
function mesSiguiente(){
    fechaCalendario.setMonth(fechaCalendario.getMonth()+1);
}
function cambiar(){
    let nuevaFecha = new Date(document.getElementById("fechaCambiar").value);
    fechaCalendario.setMonth(nuevaFecha.getMonth());
    fechaCalendario.setFullYear(nuevaFecha.getFullYear());
}

function comprobarCita(){
    let calendarioAux = new Date();
    for (let i = 0; i < citas.length; i++) {
        let element=citas[i];
        if(element.fecha.getFullYear()==calendarioAux.getFullYear() && element.fecha.getMonth()==calendarioAux.getMonth() && element.fecha.getDate()==calendarioAux.getDate() && element.fecha.getHours()==calendarioAux.getHours()&& element.fecha.getMinutes()==calendarioAux.getMinutes()&& !citasSonadas.includes(element)){
            citasSonadas.push(element);
            document.getElementById("campana").play();
            alert("Tienes una alarma para: "+element.cita);
        }
    }
    let t = setTimeout(function(){ comprobarCita() }, 1000);
}