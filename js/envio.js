$(document).ready(function () {
    $('#submitButton').click(function (e) {
        e.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

        // Obtener los datos del formulario
        var formData = $('#contactForm').serialize();
        console.log(formData);

        // Realizar la petición AJAX
        $.ajax({
            type: 'POST',
            url: 'enviar.php', // URL donde procesarás los datos
            data: formData,
            success: function (response) {
                console.error('Envío ok');
            },
            error: function (xhr, status, error) {
                // Manejar errores de la petición
                console.error(xhr.responseText);
            }
        });
    });
});

var formatoEmailCorrecto = false;
var camposCompletos = false;

// Definir la función de validación del formulario
function validarFormulario() {
    // Obtener los valores de los campos
    var name = $('#name').val().trim();
    var email = $('#email').val().trim();
    var phone = $('#phone').val().trim();
    var message = $('#message').val().trim();
    

    // Verificar que todos los campos requeridos estén completos
    if(name !== '' && email !== '' && phone !== '' && message !== ''){
        camposCompletos = true;
    }else{
        camposCompletos = false;
    }

    // Verificar el formato del email usando una expresión regular simple
    formatoEmailCorrecto = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if(camposCompletos && formatoEmailCorrecto){
        $('#submitButton').prop('disabled', false);
        return true;
    }else{
        $('#submitButton').prop('disabled', true);
        return false;
    }
}

$(document).ready(function () {
    //cargo disabled por defecto
    $('#submitButton').prop('disabled', true);
});

