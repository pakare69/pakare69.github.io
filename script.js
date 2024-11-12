// Función para mostrar la sección correspondiente cuando se hace clic en un enlace de navegación
function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.container section').forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar solo la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
}
