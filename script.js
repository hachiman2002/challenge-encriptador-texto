function borrarTextoCajaResultado(){
    let divSinTexto = document.querySelector('.sin_texto')

    if (divSinTexto == null){
        
    }else{
        divSinTexto.remove();
    }
}

function limpiarCajaTextoResultado(){
    let divConTexto = document.querySelector('.con_texto')
    if (divConTexto == null){
        
    }else{
        divConTexto.remove();
    }
}

function encriptarTexto(){
    borrarTextoCajaResultado();
    limpiarCajaTextoResultado();

    let textoUsuario = document.getElementById('texto_usuario').value;
    let textoEncriptado = '';
    let cajaTextoEncriptado = document.querySelector('.caja_texto_encriptado')

    if (parseInt(textoUsuario.length) <= 0){
        alert("No hay texto para encriptar")
    }else{
        for (let i = 0; i<textoUsuario.length; i++){
            
            textoEncriptado += textoUsuario[i];
            
            switch(textoUsuario[i]){
                case 'a':
                    textoEncriptado += 'i';//ai
                    break;

                case 'e':
                    textoEncriptado += 'nter';//enter
                    break;

                case 'i':
                    textoEncriptado += 'mes';//imes
                    break;

                case 'o':
                    textoEncriptado += 'ber';//ober
                    break;

                case 'u':
                    textoEncriptado += 'fat';//ufat
                    break;
            }
            
        }
        console.log("Texto encriptado:",textoEncriptado);
    }
    
    cajaTextoEncriptado.innerHTML += `
        <div class="con_texto">
            <p class="parrafo_texto_resultado">${textoEncriptado}</p>
        </div>
        `;
}

function desencriptarTexto() {
    // Funciones para borrar y limpiar las cajas de texto desencriptado
    borrarTextoCajaResultado();
    limpiarCajaTextoResultado();

    // Obtención del valor del texto encriptado ingresado por el usuario
    let textoEncriptado = document.getElementById('texto_usuario').value;
    let textoDesencriptado = '';
    let cajaTextoDesencriptado = document.querySelector('.caja_texto_encriptado');

    // Verificación si el texto encriptado está vacío
    if (textoEncriptado.length <= 0) {
        alert("No hay texto para desencriptar");
    } else {
        // Desencriptar el texto utilizando replace con expresiones regulares
        textoDesencriptado = textoEncriptado
            .replace(/ai/g, 'a')
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        
        console.log("Texto desencriptado:", textoDesencriptado);
    }

    // Inserción del texto desencriptado en la caja de texto desencriptado
    cajaTextoDesencriptado.innerHTML += `
        <div class="con_texto">
            <p class="parrafo_texto_resultado">${textoDesencriptado}</p>
        </div>
    `;
}

function copiarTexto(){
 
}