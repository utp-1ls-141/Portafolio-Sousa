/* Escribir un programa que:

1. Lea dos textbox y concatene estas entradas y las muestre en un modal. (25pts.)
2. Lea un textbox "n" y genere una matriz cuadrada "n x n", donde la diagonal principal sean solo números
divisibles entre 3. Todos los números deben ser generados de manera pseudo-aleatoria.
La matriz debe desplegarse en un modal.

Ambos Problemas deben estar en 1 solo HTML.
El JS debe estar en un archivo separado.

*/

/*function trim (str)
{
     return str.replace (/^\s+|\s+$/g, '');
}

          function myFunction() {
            
            var a = document.getElementById('text1');
            var b = document.getElementById('text2');
            var x = a.value;
            var y = b.value;
            if (trim(x)=='' || trim(y)=='' )
            {
              alert('Faltan datos...')
            }else
            {
              alert('Texto #1: '+ x +"  "+ 'Texto #2: '+y);
              }
          } */

//Problema #1
$(document).ready(function(){
  $("#miBoton").click(function(){
    $("#miModal").modal();
    var a = $('#text1').val();
    var b = $('#text2').val();
    $("p").prepend("Texto #1: " + a + "<br>Texto #2: " + b);
    $("#btnClose, #Close").click(function(){
      $("p").empty();
    });
  });
});

//Problema #2
