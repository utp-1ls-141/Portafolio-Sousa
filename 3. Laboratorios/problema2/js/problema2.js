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