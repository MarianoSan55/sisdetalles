
class Ventana {
    
    searchKey(buscador){
        //  Buscador por letras
        (function ($) {
            $('#'+buscador).keyup(function () {
                var rex = new RegExp($(this).val(),'i');
                $('#resultadoB div').hide();
                $('#resultadoB div').filter(function () {
                    return rex.test($(this).text()+ $(this).siblings('div').text());
                }).show();
            })
        }($));
        // Fin buscador
    }
    
    
    recuperarDatos(id,url,callback){
        $.ajax({
            url: url,
            dataType: "json",
            cache: false,
            processData: false,
            contentType: false,
            type: 'GET',
            success: function(php_response){
                alert("Ingreso Correcto");
                callback (result);
            },
            error: function(){
                alert("error en la comunicación con el servidor");
            }
        })

     }
    
    
}