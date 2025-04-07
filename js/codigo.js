document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los enlaces del menú de navegación
    const navLinks = document.querySelectorAll('nav a');
    
    // Añadir evento click a cada enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir el comportamiento por defecto
            alert(`Has hecho clic en: ${this.textContent}`);
        });
    });
});