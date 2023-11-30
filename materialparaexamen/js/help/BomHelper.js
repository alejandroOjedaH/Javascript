class BomHelper {
    // Obtener la altura y anchura de la ventana del navegador
    static obtenerTamanioVentana() {
        return {
            altura: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            anchura: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        };
    }

    // Obtener la posición de desplazamiento actual de la ventana
    static obtenerPosicionDeDesplazamiento() {
        return {
            superior: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            izquierda: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        };
    }

    // Redirigir a una nueva URL
    static redirigir(url) {
        window.location.href = url;
    }

    // Recargar la página actual
    static recargarPagina() {
        window.location.reload();
    }

    // Mostrar un mensaje de confirmación
    static mostrarConfirmacion(mensaje) {
        return window.confirm(mensaje);
    }

    // Mostrar un mensaje de alerta
    static mostrarAlerta(mensaje) {
        window.alert(mensaje);
    }

    // Abrir una nueva ventana
    static abrirVentana(url = null, opciones) {
        //resizable=0, width=${alturaVentanas.value}, height=${anchoVentanas.value}
        window.open(url, null, opciones);
    }

    // Cerrar la ventana actual
    static cerrarVentana() {
        window.close();
    }

    // Obtener la información del navegador
    static obtenerInformacionNavegador() {
        return {
            nombre: navigator.appName,
            version: navigator.appVersion,
            plataforma: navigator.platform,
            userAgent: navigator.userAgent,
        };
    }
}
