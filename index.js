$(document).ready(function () {
    $('#gracias').hide();
   
    $('#btnEnviar').click(function () {
        var nombre = $('#txtNombre').val();
        var mail = $('#txtMail').val();
        var telefono = $('#txtTelefono').val();
        var texto = $('#txt').val();

        if (nombre != "" && mail != "" && telefono != "") {
            var usuarioRequest = {
                Nombre: nombre,
                Email: mail,
                Telefono: telefono,
                TextArea: texto,
                IdPrograma: 2
            }
            $.ajax({
                type: 'POST',
                url: 'http://localhost:58924/api/usuarios/IngresoDatos',
                dataType: 'json',
                data: JSON.stringify(usuarioRequest),
                contentType: 'application/json; charset=utf-8',
                async: false,
                success: function (data) {
                    $('#formularioTexto').hide();
                    $('#formularioCampos').hide();
                    $('#gracias').show('slow');
                },
                error: function (xhr) {
                    alert('Problemas al ingresar los datos. Intente nuevamente.');
                }
            });
        } else {
            alert('Por favor llene todos los campos');
        }
        
    });
    
});