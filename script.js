document.getElementById('toggleContentLink').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace realice su acción predeterminada (navegar a una nueva página)

    var contentContainer = document.getElementById('contentContainer');

    // Cambia la clase para mostrar u ocultar el contenido
    if (contentContainer.classList.contains('hidden')) {
        contentContainer.classList.remove('hidden');
    } else {
        contentContainer.classList.add('hidden');
    }
});
