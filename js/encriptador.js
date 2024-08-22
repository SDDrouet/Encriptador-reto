const texto_entrada_element = document.getElementById('texto_entrada');
const texto_salida_element = document.getElementById('texto_salida');
const salida__campo__textArea = document.getElementById('salida__campo__textArea');
const salida__campo__imagenTexto = document.getElementById('salida__campo__imagenTexto');

function validarTexto(texto) {
    let esValido = true;
    // solo contiene letras minusculas
    const regex = /^[a-z\s]*$/;
    if (!regex.test(texto)) {
        esValido = false;
    }

    return esValido;

}

function encriptarTexto() {
    const texto = texto_entrada_element.value;

    if (!validarTexto(texto)) {
        alert('El texto solo puede contener letras minusculas y espacios');
        return;
    }

    salida__campo__imagenTexto.style.display = 'none';
    salida__campo__textArea.style.display = 'flex';
    const textoEncriptado = encriptar(texto);
    texto_salida_element.value = textoEncriptado;
}

function encriptar(texto) {
    let textoEncriptado = '';

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'a') {
            textoEncriptado += 'ai';            
        } else if (texto[i] === 'e') {
            textoEncriptado += 'enter';
        } else if (texto[i] === 'i') {
            textoEncriptado += 'imes';
        } else if (texto[i] === 'o') {
            textoEncriptado += 'ober';
        } else if (texto[i] === 'u') {
            textoEncriptado += 'ufat';
        } else {
            textoEncriptado += texto[i];
        }
    }

    return textoEncriptado;
}

function desencriptarTexto() {
    const texto = texto_entrada_element.value;

    if (!validarTexto(texto)) {
        alert('El texto solo puede contener letras minusculas y espacios');
        return;
    }

    salida__campo__imagenTexto.style.display = 'none';
    salida__campo__textArea.style.display = 'flex';

    const textoDesencriptado = desencriptar(texto);
    texto_salida_element.value = textoDesencriptado;
}

function desencriptar(texto) {
    let textoDesencriptado = '';

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'a') {
            textoDesencriptado += 'a';
            i++;
        } else if (texto[i] === 'e') {
            textoDesencriptado += 'e';
            i += 4;
        } else if (texto[i] === 'i') {
            textoDesencriptado += 'i';
            i += 3;
        } else if (texto[i] === 'o') {
            textoDesencriptado += 'o';
            i += 3;
        } else if (texto[i] === 'u') {
            textoDesencriptado += 'u';
            i += 3;
        } else {
            textoDesencriptado += texto[i];
        }
    }

    return textoDesencriptado;
}

texto_salida_element.addEventListener('input', () => {
    const texto = texto_salida_element.value

    if (texto === "") {
        salida__campo__textArea.style.display = 'none';
        salida__campo__imagenTexto.style.display = 'flex';
    }
});