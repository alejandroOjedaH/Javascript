/**
 * Clase Validator que proporciona métodos para validar diferentes tipos de datos.
 */
class Validator {

    /**
     * Valida un número de DNI español.
     * @param {string} dni - El número de DNI a validar.
     * @returns {boolean} - Devuelve true si el DNI es válido, de lo contrario devuelve false.
     * @example
     * Validator.testDNI('12345678Z'); // Devuelve true
     */
    static testDNI = (dni) => {
        const regExp = /^[0-9]{8}[A-Z]$/;
        dni = dni.toUpperCase();
        if (!regExp.test(dni)) {
            return false;
        }

        const letter = dni.substring(dni.length - 1);
        const number = dni.substring(0, dni.length - 1);
        const letterIndex = number % 23;

        const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const validLetter = letters[letterIndex];

        return validLetter === letter;
    }

    /**
    * Valida una fecha.
    * @param {number} dia - El día.
    * @param {number} mes - El mes.
    * @param {number} anio - El año.
    * @returns {boolean} - Devuelve true si la fecha es válida, de lo contrario devuelve false.
    * @example
    * Validator.testValidDate(31, 12, 2022); // Devuelve true
    */
    static testValidDate = (dia, mes, anio) => {
        const fecha = new Date(anio, mes - 1, dia);
        return fecha.getFullYear() === anio && fecha.getMonth() === mes - 1 && fecha.getDate() === dia;
    }

    /**
    * Valida una dirección de correo electrónico.
    * @param {string} email - La dirección de correo electrónico a validar.
    * @returns {boolean} - Devuelve true si el correo electrónico es válido, de lo contrario devuelve false.
    * @example
    * Validator.testEmail('usuario@example.com'); // Devuelve true
    */
    static testEmail = (email) => {
        const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regExp.test(email);
    }

    /**
     * Valida una contraseña según ciertos criterios.
     * @param {string} password - La contraseña a validar.
     * @returns {boolean} - Devuelve true si la contraseña es válida, de lo contrario devuelve false.
     * @example
     * Validator.testPassword('Abcdef12'); // Devuelve true
     */
    static testPassword = (password) => {
        const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return regExp.test(password);
    }

    /**
     * Valida que el texto contenga solo letras (mayúsculas y minúsculas) y espacios.
     * @param {string} text - El texto a validar.
     * @returns {boolean} - Devuelve true si el texto es válido, de lo contrario devuelve false.
     * @example
     * Validator.testOnlyLetters('Hello World'); // Devuelve true
     */
    static testOnlyLetters = (text) => {
        const regExp = /^[a-zA-Z\s]*$/;
        return regExp.test(text);
    }

    /**
     * Valida que el texto contenga solo letras mayúsculas.
     * @param {string} text - El texto a validar.
     * @returns {boolean} - Devuelve true si el texto es válido, de lo contrario devuelve false.
     * @example
     * Validator.testUpperCaseLetter('HELLO'); // Devuelve true
     */
    static testUpperCaseLetter = (text) => {
        const regExp = /^[A-Z]*$/;
        return regExp.test(text);
    }

    /**
    * Valida que el texto contenga solo letras minúsculas.
    * @param {string} text - El texto a validar.
    * @returns {boolean} - Devuelve true si el texto es válido, de lo contrario devuelve false.
    * @example
    * Validator.testLowerCaseLetter('hello'); // Devuelve true
    */
    static testLowerCaseLetter = (text) => {
        const regExp = /^[a-z]*$/;
        return regExp.test(text);
    }

    /**
    * Valida que el texto contenga solo números.
    * @param {string} text - El texto a validar.
    * @returns {boolean} - Devuelve true si el texto es válido, de lo contrario devuelve false.
    * @example
    * Validator.testNumber('12345'); // Devuelve true
    */
    static testNumber = (text) => {
        const regExp = /^[0-9]*$/;
        return regExp.test(text);
    }

    /**
    * Valida que el texto contenga al menos un carácter especial.
    * @param {string} text - El texto a validar.
    * @returns {boolean} - Devuelve true si el texto es válido, de lo contrario devuelve false.
    * @example
    * Validator.testSpecialCharacter('pass@word'); // Devuelve true
    */
    static testSpecialCharacter = (text) => {
        const regExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        return regExp.test(text);
    }

    /**
    * Valida que la longitud del texto sea al menos la especificada.
    * @param {string} text - El texto a validar.
    * @param {number} length - La longitud mínima requerida.
    * @returns {boolean} - Devuelve true si la longitud es válida, de lo contrario devuelve false.
    * @example
    * Validator.testLength('abc', 3); // Devuelve true
    */
    static testLength = (text, length) => {
        return text.length >= length;
    }

    /**
    * Valida un número de teléfono de 9 dígitos.
    * @param {string} numeroTelefono - El número de teléfono a validar.
    * @returns {boolean} - Devuelve true si el número de teléfono es válido, de lo contrario devuelve false.
    * @example
    * Validator.testTelefono('123456789'); // Devuelve true
    */
    static testTelefono = (numeroTelefono) => {
        const regExp = /^\d{9}$/;
        return regExp.test(numeroTelefono);
    }

    /**
     * Valida una URL.
    * @param {string} url - La URL a validar.
    * @returns {boolean} - Devuelve true si la URL es válida, de lo contrario devuelve false.
    * @example
    * Validator.testURL('https://www.ejemplo.com'); // Devuelve true
    */
    static testURL = (url) => {
        const regExp = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)([^\s]*)?$/;
        return regExp.test(url);
    }

    /**
    * Valida un código postal de 5 dígitos.
    * @param {string} postalCode - El código postal a validar.
    * @returns {boolean} - Devuelve true si el código postal es válido, de lo contrario devuelve false.
    * @example
    * Validator.testPostalCode('12345'); // Devuelve true
    */
    static testPostalCode = (postalCode) => {
        const regExp = /^\d{5}$/;
        return regExp.test(postalCode);
    }

    /**
    * Valida un número decimal con exactamente dos decimales.
    * @param {string} number - El número decimal a validar.
    * @returns {boolean} - Devuelve true si el número decimal es válido, de lo contrario devuelve false.
    * @example
    * Validator.testDecimalNumber('123.45'); // Devuelve true
    */
    static testDecimalNumber = (number) => {
        const regExp = /^\d+,\d{2}$/;
        return regExp.test(number);
    }

    /**
    * Valida un nombre de usuario.
    * @param {string} username - El nombre de usuario a validar.
    * @returns {boolean} - Devuelve true si el nombre de usuario es válido, de lo contrario devuelve false.
    * @example
    * Validator.testUsername('usuario_123'); // Devuelve true
    */
    static testUsername = (username) => {
        const regExp = /^[a-zA-Z0-9_]{4,}$/;
        return regExp.test(username);
    }
}