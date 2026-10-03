document.addEventListener('DOMContentLoaded', () => {
    const formCita = document.getElementById('formCita');
    const mensajeExito = document.getElementById('mensajeExito');

    if (formCita) {
        formCita.addEventListener('submit', (event) => {
            // Previene el envío POST del navegador y evita el error 405
            event.preventDefault();

            // Muestra el mensaje de éxito en pantalla
            if (mensajeExito) {
                mensajeExito.style.display = 'block';
                mensajeExito.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            // Limpia los campos del formulario
            formCita.reset();
        });
    }
});