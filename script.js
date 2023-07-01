const texArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btn_encriptar = document.querySelector(".btn-encriptar");
const btn_desencriptar = document.querySelector(".btn-desencriptar");
const btn_copiar = document.querySelector(".btn-copiar");

/*arreglos multidimensionales*/

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/


function btnEncriptar(){
    const textoEncriptado = encriptar(texArea.value);
    mensaje.value = textoEncriptado;
    texArea.value = "";
    mensaje.style.backgroundImage = "none";

}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(texArea.value);
    mensaje.value = textoDesencriptado;
    texArea.value = "";
    mensaje.style.backgroundImage = "none";

}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], 
                        ["i", "imes"], 
                        ["a", "ai"], 
                        ["o", "ober"],
                        ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++ ){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], 
                        ["i", "imes"], 
                        ["a", "ai"], 
                        ["o", "ober"],
                        ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++ ){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

btn_copiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".mensaje");
    navigator.clipboard.writeText(contenido.value);
    console.log("copiado");
})


function copiar (){
    var contenido = document.querySelector(".mensaje");
    navigator.clipboard.write(contenido.value);
    console.log("copiado2");
}


btn_encriptar.onclick = btnEncriptar;

btn_desencriptar.onclick = btnDesencriptar;




