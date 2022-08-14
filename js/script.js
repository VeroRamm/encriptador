
/*`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "o" es convertida para "ober"`
`La letra "a" es convertida para "ai"`
`La letra "u" es convertida para "ufat"`*/


let txtEncriptado
function encriptar(){
   const texto = document.getElementById("areaTexto").value;
   txtEncriptado = texto.replace(/e/img, "enter" );
   txtEncriptado = txtEncriptado.replace(/i/img, "imes" );
   txtEncriptado = txtEncriptado.replace(/o/img, "ober" );
   txtEncriptado = txtEncriptado.replace(/a/img, "ai" );
   txtEncriptado = txtEncriptado.replace(/u/img, "ufat" );

      document.getElementById("default").style.display = "none";
      document.getElementById("visualizador").style.display = "flex";
      document.getElementById("lectura").innerHTML = txtEncriptado;
      document.getElementById("areaTexto").value = "";
}
function desencriptar(){
   const texto = document.getElementById("areaTexto").value;
   txtEncriptado = texto.replace(/enter/img, "e" );
   txtEncriptado = txtEncriptado.replace(/imes/img, "i" );
   txtEncriptado = txtEncriptado.replace(/ober/img, "o" );
   txtEncriptado = txtEncriptado.replace(/ai/img, "a" );
   txtEncriptado = txtEncriptado.replace(/ufat/img, "u" );
   
      document.getElementById("default").style.display = "none";
      document.getElementById("visualizador").style.display = "flex";
      document.getElementById("lectura").innerHTML = txtEncriptado;
   
}
function copiar(){
 let txtCopiar = document.querySelector("#lectura").value;
 
 navigator.clipboard.writeText(txtCopiar)
 .then(() => {
     console.log('Text copied to clipboard');
 })
 .catch(err => {
     console.error('Error in copying text: ', err);
 });



}