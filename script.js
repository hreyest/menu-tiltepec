function showCategory(categoryId) {
    // Oculta todas las categorías
    document.querySelectorAll('.category').forEach(category => {
        category.classList.remove('active');
    });

    // Muestra la categoría seleccionada
    document.getElementById(categoryId).classList.add('active');
}

// Mostrar la categoría de entradas por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showCategory('especialidades');
 });