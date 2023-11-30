class DomHelper {
    /**
    * Crea un elemento div.
    * @param {string} text - Texto interno del elemento.
    * @param {string|null} id - ID del elemento (opcional).
    * @param {string|null} className - Clase del elemento (opcional).
    * @returns {HTMLDivElement} - Elemento div creado.
    */
    static createDiv(text, id = null, className = null) {
        let div = document.createElement("div");
        div.className = className;
        div.id = id;
        div.innerText = text;
        return div;
    }

    /**
    * Crea un elemento input.
    * @param {string} type - Tipo de input (e.g., 'text', 'checkbox').
    * @param {string} value - Valor del input.
    * @param {string|null} id - ID del elemento (opcional).
    * @param {string|null} className - Clase del elemento (opcional).
    * @returns {HTMLInputElement} - Elemento input creado.
    */
    static createInput(type, value, id = null, className = null) {
        let input = document.createElement("input");
        input.type = type;
        input.className = className;
        input.id = id;
        input.value = value;
        return input;
    }

    /**
    * Crea un elemento button.
    * @param {string} text - Texto interno del botón.
    * @param {string|null} id - ID del elemento (opcional).
    * @param {string|null} className - Clase del elemento (opcional).
    * @returns {HTMLButtonElement} - Elemento button creado.
    */
    static createButton(text, id = null, className = null) {
        let button = document.createElement("button");
        button.className = className;
        button.id = id;
        button.innerText = text;
        return button;
    }

    static createLabel(className, id, text) {
        let label = document.createElement("label");
        label.className = className;
        label.id = id;
        label.innerText = text;
        return label;
    }

    /**
    * Crea un elemento select con opciones.
    * @param {string|null} className - Clase del elemento.
    * @param {string} id - ID del elemento.
    * @param {HTMLOptionElement[]} options - Array de elementos option.
    * @returns {HTMLSelectElement} - Elemento select creado con opciones.
    */
    static createSelect(className, id, options) {
        let select = document.createElement("select");
        select.className = className;
        select.id = id;
        options.forEach(option => {
            select.appendChild(option);
        });
        return select;
    }

    /**
    * Crea un elemento option para usar en un select.
    * @param {string} value - Valor del option.
    * @param {string} text - Texto interno del option.
    * @returns {HTMLOptionElement} - Elemento option creado.
    */
    static createOption(value, text) {
        let option = document.createElement("option");
        option.value = value;
        option.innerText = text;
        return option;
    }

    /**
    * Crea un elemento table con encabezados y filas.
    * @param {string[]} headers - Array de encabezados.
    * @param {string[][]} rows - Array bidimensional de filas.
    * @param {string|null} id - ID del elemento (opcional).
    * @param {string|null} className - Clase del elemento (opcional).
    * @returns {HTMLTableElement} - Elemento table creado.
    */
    static createTable(headers, rows, id = null, className = null) {
        let table = document.createElement("table");
        table.className = className;
        table.id = id;
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        let tr = document.createElement("tr");
        headers.forEach(header => {
            let th = document.createElement("th");
            th.innerText = header;
            tr.appendChild(th);
        });
        thead.appendChild(tr);
        table.appendChild(thead);
        rows.forEach(row => {
            let tr = document.createElement("tr");
            row.forEach(element => {
                let td = document.createElement("td");
                td.innerText = element;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        return table;
    }

    /**
    * Crea un elemento img.
    * @param {string} src - Fuente de la imagen.
    * @param {string|null} id - ID del elemento (opcional).
    * @param {string|null} className - Clase del elemento (opcional).
    * @returns {HTMLImageElement} - Elemento img creado.
    */
    static createImg(src, id = null, className = null) {
        let img = document.createElement("img");
        img.className = className;
        img.id = id;
        img.src = src;
        return img;
    }

    /**
    * Crea un elemento de texto (p, span, etc.).
    * @param {string} type - Tipo de elemento de texto.
    * @param {string} text - Texto interno del elemento.
    * @param {string|null} id - ID del elemento (opcional).
    * @param {string|null} className - Clase del elemento (opcional).
    * @returns {HTMLElement} - Elemento de texto creado.
    */
    static createText(type, text, id = null, className = null) {
        let textNode = document.createElement(type);
        textNode.innerText = text;
        textNode.id = id;
        textNode.className = className;
        return textNode;
    }

    /**
    * Agrega varios elementos hijos a un elemento padre.
    * @param {HTMLElement} parent - Elemento padre al que se agregarán los hijos.
    * @param {HTMLElement[]} children - Array de elementos hijos.
    */
    static appendChildren(parent, children) {
        children.forEach(child => {
            parent.appendChild(child);
        });
    }

    /**
    * Agrega un elemento hijo a un elemento padre.
    * @param {HTMLElement} parent - Elemento padre al que se agregará el hijo.
    * @param {HTMLElement} child - Elemento hijo que se agregará.
    */
    static appendChild(parent, child) {
        parent.appendChild(child);
    }

    /**
    * Inserta un elemento antes de otro en el árbol DOM.
    * @param {HTMLElement} elemento - Elemento que se va a insertar.
    * @param {HTMLElement} referenciaElemento - Elemento antes del cual se va a insertar.
    */
    static insertBefore(elemento, referenciaElemento) {
        referenciaElemento.parentNode.insertBefore(elemento, referenciaElemento);
    }
}