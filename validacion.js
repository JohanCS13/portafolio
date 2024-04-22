//Haz tú validación en javascript acá

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    if (!nombre || !email || !asunto || !mensaje) {
        mostrarError("Por favor, complete todos los campos del formulario.");
        return false;
    }

    if (!validarEmail(email)) {
        mostrarError("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    return true;
}

function validarEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function mostrarError(mensaje) {
    alert(mensaje);
}