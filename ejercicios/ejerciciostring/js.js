let regExp = /^[a-zA-Z0-9]*$/;
let cadena=stringSuccesor(prompt("Dime una frase y le sumo 1"));

document.write(cadena);

function stringSuccesor(cadena){
    let arrayCar;
    if(!regExp.test(cadena)){
        return cadena;
    }
    arrayCar=cadena.split("");
    let bandera = true;
    for (let i = arrayCar.length-1; 0 <= i ; i--) {

        if (bandera == false){
            break;
        }
        if(arrayCar[i]=='z'){
            arrayCar[i] ='a';
        }else if(arrayCar[i]=='Z'){
            arrayCar[i] ='A';
        }else if(arrayCar[i]=='9'){
            arrayCar[i] ='0';
        }else{
            arrayCar[i]=sumaleUno(arrayCar[i]);
            bandera=false;
        }
    }
    return arrayCar.join().replaceAll(",","");
}

function sumaleUno(caracter){
    let valor = caracter.charCodeAt(0);
    valor ++;
    return String.fromCharCode(valor);
}