












const textArea = document.querySelector(".textoingreso");
const textoregreso = document.querySelector(".textoregreso")


function btnEncriptar(){
  const stringEncriptar = encriptar(textArea.value)
  textoregreso.value = stringEncriptar;
  textoregreso.value = "";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];                  
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length;i++){
      if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replace.All(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada
}




function encripstar(){ 
        
    var valor = document.getElementById("textoingreso").value;
    textoingreso.value = "";
    valor = valor.replace(/e/g,"enter");
    valor = valor.replace(/i/g,"imes");
    valor = valor.replace(/a/g,"ai");
    valor = valor.replace(/o/g,"ober");
    valor = valor.replace(/u/g,"ufat");
    window.location.href="index2.html";
    document.getElementById("textoregreso").value = valor;

  }