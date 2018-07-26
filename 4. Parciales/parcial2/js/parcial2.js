//Parcial #2
//Problema #1

$(document).ready(function(){
    $("#boton1").click(function(){
      $("#miModal").modal();
      var a = $('#txt1').val();
      var b = $('#txt2').val();
      var c = $('#txt3').val();
      if(a == '' || b == '' || c == ''){
          $("p").append("Faltan datos");
      }else{
      $("p").append("Texto #1: " + a + "<br>Texto #2: " + b + "<br>Texto #3: " + c);
      }
      $("#btnClose, #Close").click(function(){
        $("p").empty();
      });
    });
  });



//Problema #2
$(document).ready(function(){
    $("#boton2").click(function(){
        $("#miModalTabla").modal();
        var i = $('#txt4').val();
        mat(i);

        function mat(i){
            var mi = i;
            var mat = [], x = 0;
            if(i%2 == 0){
                for(var n = 0; n < mi; n++){
                    mat[n] = [];
                    for(var m = 0; m < mi; m++){
                        x = Math.floor(Math.random() * 100) + 1;
                        mat[n][m] = x;
                        if(n != m){
                            mat[n][m] = x;
                        }else if (n == m){
                            mat[n][n] = x * 23;
                        }
                        if(m == n){
                            if(x % x){
                                var r = Math.floor(mat.length/2);
                                mat[r][r] = 23;
                            }
                        }
                    }
                }
            }
            console.log(mat);
            $("[id = mb2]").html(' ' + mat + '\n');
        }
    });
});

//Problema #3

$(document).ready(function(){
    $("#boton3").click(function(){
        $("#miModal").modal();
        var d = $('#txt5').val();
        if(d === 1 || d === 0){
            $("p").append("No es un número palindromo");
        }else if(d < 0){
            $("p").append("Debe ser un número positivo");
        }

        var valor = 1;

        while (d / valor > 10){
            valor = valor * 10;
        }

        while (d > 0){
            if(Math.floor(d / valor) === d % 10){
                d = Math.floor((d % valor)/10);
                valor = Math.floor(valor / 100);
                $("p").append("Es palindromo");
            }else{
                $("p").append("No es palindromo");
            }

        }
        //$("p").append("Es palindromo");
        $("#btnClose, #Close").click(function(){
            $("p").empty();
          });
    });
});