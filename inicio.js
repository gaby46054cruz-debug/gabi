// Función para mostrar / ocultar el menú desplegable de la esquina
function toggleMenu() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

// Cierra el menú automáticamente si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}