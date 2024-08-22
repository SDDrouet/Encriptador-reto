let textoDocumento = document.getElementById('texto_salida');
let btnCopy = document.getElementById('btn_copy');

btnCopy.addEventListener('click', () => {
    let text = textoDocumento.value;
    navigator.clipboard.writeText(text);
  
    alert(`Salida copiada al portapapeles!`);
});