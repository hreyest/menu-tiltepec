     function toggleMenu() {
            var menu = document.getElementById('menu');
            menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
        }
        function hideMenu() {
            document.getElementById('menu').style.display = 'none';
        }
        document.addEventListener('click', function(event) {
            var menu = document.getElementById('menu');
            var button = document.querySelector('.menu-toggle');
            if (!menu.contains(event.target) && !button.contains(event.target)) {
                menu.style.display = 'none';
            }
        });

function showCategory(categoryId) {
    console.log("Cambiando a la categoría:", categoryId); // Verifica si el ID es correcto

    document.querySelectorAll('.category').forEach(category => {
        category.classList.remove('active');
    });

    let categoryElement = document.getElementById(categoryId);
    if (categoryElement) {
        categoryElement.classList.add('active');
    } else {
        console.warn("No se encontró la categoría:", categoryId);
    }
}