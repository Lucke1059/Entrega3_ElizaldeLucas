// Funciones para el formulario de contacto y mensaje de WhatsApp
// Este script se encarga de validar el formulario de contacto y enviar un mensaje a WhatsApp con los datos ingresados por el usuario.
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formContacto');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const numero = document.getElementById('numero').value.trim();
        const correo = document.getElementById('correo').value.trim();

        if (!nombre || !numero || !correo) {
            mostrarAlertaCampos();
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            alert('Ingresá un correo electrónico válido 📧');
            return;
        }

        mostrarModalYEnviar(nombre, numero, correo);
    });
});

function mostrarModalYEnviar(nombre, numero, correo) {
    const modalElement = document.getElementById('modalExito');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    // Escuchar cuando el modal termine de mostrarse
    modalElement.addEventListener('shown.bs.modal', () => {
        setTimeout(() => {
            modal.hide(); // Cerramos el modal antes de redirigir
            enviarWhatsApp(nombre, numero, correo);
        }, 2500);
    }, { once: true }); // Solo una vez para evitar múltiples disparos
}


// Enviar mensaje por WhatsApp
function enviarWhatsApp(nombre, numero, correo) {
    const mensaje = `👋 ¡Hola! Quiero ponerme en contacto con ustedes.%0A
  📛 *Nombre:* ${nombre}%0A
  📞 *Número:* ${numero}%0A
  📧 *Correo:* ${correo}%0A
  🚀 Estoy interesado/a en sus servicios de desarrollo.`;

    const numeroWhatsApp = '5493482654236';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
}

// Mostrar alerta si faltan campos
function mostrarAlertaCampos() {
    const alerta = document.getElementById('alertaCampos');
    alerta.classList.remove('d-none');
    alerta.classList.add('show');

    setTimeout(() => {
        alerta.classList.add('d-none');
        alerta.classList.remove('show');
    }, 3000); // Oculta la alerta después de 3 segundos
}