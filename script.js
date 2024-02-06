function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muñeco");

    let textCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if(texto.length != 0){
        document.getElementById("texto").value = textCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muneco.src = "./img/encriptado.jpg";
    }else{
        muneco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}


function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muñeco");
    let textCifrado = texto
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");

    

    if(texto.length != 0){
        document.getElementById("texto").value = textCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muneco.src = "./img/desencriptado.jpg";
    }else{
        muneco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}