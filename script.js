const texArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const defecto1 = document.querySelector(".sinmensaje p");
const defecto2 = document.querySelector(".sinmensaje h6");
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
    if(textoEncriptado!=""){
        mensaje.value = textoEncriptado;
        texArea.value = "";
        mensaje.style.backgroundBlendMode = "lighten";
        defecto1.style.display = "none";
        defecto2.style.display = "none";
    } else {
        alert("Ingrese texto")
    }

}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(texArea.value);
    if(textoDesencriptado!=""){
        mensaje.value = textoDesencriptado;
        texArea.value = "";
        mensaje.style.backgroundBlendMode = "lighten";
        defecto1.style.display = "none";
        defecto2.style.display = "none";
    } else {
        alert("Ingrese texto")
    }
}


function encriptar(stringEncriptada){
    if(stringEncriptada!=""){
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
    } else {
        return "";
    }
    
}

function desencriptar(stringDesencriptada){
    if(stringDesencriptada!=""){
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
    } else {
        return "";
    }

}

btn_copiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".mensaje");
    navigator.clipboard.writeText(contenido.value);
    mensaje.style.backgroundBlendMode = "normal";
    mensaje.value="";
    defecto1.style.display = "block";
    defecto2.style.display = "block";
    alert("Texto copiado en portapapeles");
    console.log("copiado");
})

btn_encriptar.onclick = btnEncriptar;

btn_desencriptar.onclick = btnDesencriptar;




