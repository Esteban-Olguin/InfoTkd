/*==================== SEND FORM ====================*/
var contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    var formData = new FormData(contactForm);
    var xhr = new XMLHttpRequest();

    xhr.open("POST", contactForm.action, true);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        if (xhr.status === 200) {
            // Envío exitoso
            contactForm.reset();
            Swal.fire({
                icon: "success",
                title: "¡Correo enviado!",
                text: "El correo se envió exitosamente.",
                timer: 3000, // 3 segundos
                timerProgressBar: true,
                showConfirmButton: false
            });
        } else {
            // Error en el envío
            Swal.fire({
                icon: "error",
                title: "¡Error!",
                text: "Hubo un problema al enviar el correo. Por favor, inténtalo nuevamente.",
                timer: 3000, // 3 segundos
                timerProgressBar: true,
                showConfirmButton: false
            });
        }
    };

    xhr.send(formData);
});
