// Declaración de variables
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.getElementById("btn-copiar");
const texto = document.getElementById("texto");
const messageOutput = document.getElementById("message-output");
const validationMsg = document.getElementById("validation-msg");
const messageContainer = document.getElementById("message-container");

// Función de encriptar
function encriptarTexto(texto) {
    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) { // Solo minúsculas
            textoEncriptado += String.fromCharCode(((charCode - 97 + 1) % 26) + 97);
        } else {
            textoEncriptado += texto.charAt(i);
        }
    }

    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = "";

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) { // Solo minúsculas
            textoDesencriptado += String.fromCharCode(((charCode - 97 - 1 + 26) % 26) + 97);
        } else {
            textoDesencriptado += texto.charAt(i);
        }
    }

    return textoDesencriptado;
}


// Validación del texto ingresado
function validarTexto(texto) {
    let regex = /^[a-z\s]*$/; // Solo minúsculas y espacios
    return regex.test(texto);
}

// Mostrar mensajes en el campo de resultado
function mostrarMensaje(mensaje) {
    messageContainer.classList.add("active");
    messageOutput.innerText = mensaje;
    validationMsg.style.display = "none";
}

// Mostrar mensaje de validación
function mostrarMensajeDeValidacion() {
    validationMsg.style.display = "block";
}

// Eventos de botones
btnEncriptar.addEventListener("click", function() {
    let textoIngresado = texto.value;
    if (validarTexto(textoIngresado)) {
        let textoEncriptado = encriptarTexto(textoIngresado);
        mostrarMensaje(textoEncriptado);
    } else {
        mostrarMensajeDeValidacion();
    }
});

btnDesencriptar.addEventListener("click", function() {
    let textoIngresado = texto.value;
    if (validarTexto(textoIngresado)) {
        let textoDesencriptado = desencriptarTexto(textoIngresado);
        mostrarMensaje(textoDesencriptado);
    } else {
        mostrarMensajeDeValidacion();
    }
});

btnCopiar.addEventListener("click", function() {
    let textoCopiar = messageOutput.innerText;
    navigator.clipboard.writeText(textoCopiar).then(() => {
        alert("Texto copiado al portapapeles.");
    });
});
