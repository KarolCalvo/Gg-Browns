document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos del formulario (Jornada anterior)
    const formCita = document.getElementById('formCita');
    const mensajeExito = document.getElementById('mensajeExito');

    // Imprimir evidencia en la consola del formulario
    console.log("Elemento formCita encontrado:", formCita);
    console.log("Elemento mensajeExito encontrado:", mensajeExito);

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

    // 2. Elementos del menú móvil y accesibilidad (Jornada actual)
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Imprimir evidencia en la consola del menú
    console.log("Elemento menuToggle encontrado:", menuToggle);
    console.log("Elemento navLinks encontrado:", navLinks);

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Alterna la clase para mostrar u ocultar el menú en pantallas estrechas
            navLinks.classList.toggle('nav-activo');

            // Verifica si el menú quedó abierto
            const estaAbierto = navLinks.classList.contains('nav-activo');

            // Actualiza el atributo aria-expanded para cumplir con la accesibilidad (WCAG)
            menuToggle.setAttribute('aria-expanded', estaAbierto);
        });
    }
});