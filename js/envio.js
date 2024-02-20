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


function validarFormulario() {
    // Obtener los valores de los campos
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();

    // Verificar que todos los campos requeridos estén completos
    var camposCompletos = name !== '' && email !== '' && phone !== '' && message !== '';

    // Verificar el formato del email usando una expresión regular simple
    var formatoEmailCorrecto = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Habilitar o deshabilitar el botón de enviar según la validación
    var botonEnviar = document.getElementById('submitButton');
    botonEnviar.disabled = !(camposCompletos && formatoEmailCorrecto);
}

// Escuchar eventos de cambio en los campos del formulario
document.getElementById('name').addEventListener('input', validarFormulario);
document.getElementById('email').addEventListener('input', validarFormulario);
document.getElementById('phone').addEventListener('input', validarFormulario);
document.getElementById('message').addEventListener('input', validarFormulario);
