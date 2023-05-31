let textoIngreso = document.querySelector(".textoIngreso")
let textoRegreso = document.querySelector(".textoRegreso")

var valorTextoIngreso = "";
var valorTextoRegreso = "";
var textoAcopiar = "";
var mensaje1 = document.getElementById(".mensaje1")
var mensaje2 = document.getElementById(".mensaje2")

function btnEncriptar(){
    let valorTextoRegreso = encriptar();
    textoRegreso.style.background = "none";
    textoIngreso.value = "";
    mensaje1.style.visibility = "none";
    mensaje2.style.visibility = "none";
}

function btnDesencriptar(){
    let valorTextoIngreso = desencriptar();
    textoRegreso.value = "";
    
}

function encriptar(){
    let valorTextoRegreso = textoIngreso.value;
    textoRegreso.value = valorTextoRegreso
    .replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/a/g,"ai")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");
    return valorTextoRegreso;
}

function desencriptar(){
    let valorTextoIngreso = textoRegreso.value;
    textoIngreso.value = valorTextoIngreso
    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");
    return valorTextoIngreso;

}




function btncopiar() {
    var textoAcopiar = document.getElementById(".textoRegreso");
    textoAcopiar.select();
    document.execCommandId("copy");
}

