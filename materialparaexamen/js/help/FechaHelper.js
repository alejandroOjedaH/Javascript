/**
 * Clase FechaHelper que proporciona métodos útiles para trabajar con fechas.
 */
class FechaHelper {

    /**
    * Crea un objeto Date a partir de un día, mes y año dados en formato español (DD/MM/AAAA).
    * @param {number} dia - El día.
    * @param {number} mes - El mes.
    * @param {number} anio - El año.
    * @returns {Date} - Objeto Date creado a partir de los parámetros.
    * @example
    * FechaHelper.createDateEsp(31, 12, 2022); // Devuelve un objeto Date para el 31 de diciembre de 2022.
    */
    static createDateEsp(dia, mes, anio) {
        if (this.isFechaValida(dia, mes, anio)) {
            return new Date(`${mes}/${dia}/${anio}`);
        }
        return null;
    }

    /**
    * Convierte una fecha a una cadena de tiempo local en formato de hora específico de la región.
    * @param {Date} fecha - La fecha a convertir.
    * @returns {string} - Cadena de tiempo local en formato de hora específico de la región.
    * @example
    * const fecha = new Date();
    * FechaHelper.parseLocalHora(fecha); // Devuelve la hora local en formato específico de la región.
    */
    static parseLocalHora(fecha) {
        return new Date(fecha).toLocaleTimeString();
    }

    /**
    * Convierte una fecha a una cadena de fecha local en formato específico de la región.
    * @param {Date} fecha - La fecha a convertir.
    * @returns {string} - Cadena de fecha local en formato específico de la región.
    * @example
    * const fecha = new Date();
    * FechaHelper.parseLocalFecha(fecha); // Devuelve la fecha local en formato específico de la región.
    */
    static parseLocalFecha(fecha) {
        return new Date(fecha).toLocaleDateString();
    }

    static parseLocalFechaEsp(fecha) {
        const opciones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        return fecha.toLocaleDateString('es-ES', opciones);
    }
    /**
    * Convierte una fecha a una cadena de fecha y tiempo local en formato específico de la región.
    * @param {Date} fecha - La fecha a convertir.
    * @returns {string} - Cadena de fecha y tiempo local en formato específico de la región.
    * @example
    * const fecha = new Date();
    * FechaHelper.parseLocalFechaHora(fecha); // Devuelve la fecha y hora local en formato específico de la región.
    */
    static parseLocalFechaHora(fecha) {
        return new Date(fecha).toLocaleString();
    }

    /**
    * Verifica si una fecha es válida.
    * @param {number} dia - El día.
    * @param {number} mes - El mes.
    * @param {number} anio - El año.
    * @returns {boolean} - Devuelve true si la fecha es válida, de lo contrario devuelve false.
    * @example
    * FechaHelper.isFechaValida(31, 12, 2022); // Devuelve true si la fecha es válida.
    */
    static isFechaValida(dia, mes, anio) {
        const fecha = new Date(anio, mes - 1, dia);
        return fecha.getFullYear() === anio && fecha.getMonth() === mes - 1 && fecha.getDate() === dia;
    }


    /**
    * Verifica si una persona es mayor de edad basándose en su fecha de nacimiento.
    * @param {string} fechaNacimiento - La fecha de nacimiento en formato de cadena ('YYYY-MM-DD').
    * @returns {boolean} - Devuelve true si la persona es mayor de edad, de lo contrario devuelve false.
    * @example
    * FechaHelper.isMayorEdad('2000-01-01'); // Devuelve true si la persona nació antes de hace 18 años.
    */
    static isMayorEdad(fechaNacimiento) {
        const hoy = new Date();
        const nacimiento = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const m = hoy.getMonth() - nacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
        return edad >= 18;
    }

    /**
    * Compara dos fechas y devuelve true si la primera fecha es anterior a la segunda.
    * @param {Date} fecha1 - La primera fecha a comparar.
    * @param {Date} fecha2 - La segunda fecha a comparar.
    * @returns {boolean} - Devuelve true si la primera fecha es anterior a la segunda, de lo contrario, devuelve false.
    * @example
    * const fechaAntigua = new Date('2022-01-01');
    * const fechaReciente = new Date('2022-12-31');
    * FechaHelper.isFechaAnterior(fechaAntigua, fechaReciente); // Devuelve true
    */
    static isFechaAnterior = (fecha1, fecha2) => {
        return fecha1 < fecha2;
    }
}