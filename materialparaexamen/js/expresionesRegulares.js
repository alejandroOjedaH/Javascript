
//Es un nuemero
function comprobar(cadena) {
    expresion = /^-?[0-9]*$/;
    if (expresion.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

//Solo letras
function comprobar(cadena) {
    expresion = /^[a-zA-ZáéíóúÁÉÍÓÚ]*$/;
    if (expresion.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

//Letras con espacios
function comprobar(cadena) {
    expresion = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
    if (expresion.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

//Nombres con apellidos
function comprobar(cadena) {
    expresion = /^[a-zA-ZáéíóúÁÉÍÓÚ']*\s?[a-zA-ZáéíóúÁÉÍÓÚ']*\s?[a-zA-ZáéíóúÁÉÍÓÚ']*$/;
    if (expresion.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

//Comprobar precios
function comprobar(cadena) {
    expresion = /^[0-9]*.[0-9]*$/;
    if (expresion.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

//Numero entero o natural
function comprobar(cadena) {
    expresion = /^[0-9]*.?[0-9]*$/;
    if (expresion.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

//Comprobar fecha
function comprobar(cadena) {
    expresion = /^(?:(?:0?[1-9]|1\d|2[0-8])(\/|-)(?:0?[1-9]|1[0-2]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:31(\/|-)(?:0?[13578]|1[02]))|(?:(?:29|30)(\/|-)(?:0?[1,3-9]|1[0-2])))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(29(\/|-)0?2)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/;
    if (expresion.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

//Comprobar hora
function comprobar(cadena) {
    expresion = /^([1-9]{1}|1[0-2]{1}):[0-5]{1}[0-9]$/;
    if (expresion.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

//Comprobar hora formato 24 horas
function comprobar(cadena) {
    expresion = /^([1-9]{1}|[1-2]{1}[0-2]{1}):[0-5]{1}[0-9]$/;
    if (expresion.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

//Validacion de contraseña
function comprobar(cadena) {
    expresion = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (expresion.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

//Validación de email
function comprobar(cadena) {
    expresion = /^[a-z0-9]{1,}@[a-z]{1,}.[a-z]{1,}$/;
    if (expresion.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

//Validacion de nombres de usuario
function comprobar(cadena) {
    expresion = /^[a-z0-9_-]{3,16}$/;
    if (expresion.test(cadena)) {
        return true;
    } else {
        return false;
    }
}