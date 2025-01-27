// Función para cargar el menú desde el archivo CSV
async function loadMenu() {
    const response = await fetch('menu.csv');
    const data = await response.text();
    const rows = data.split('\n').slice(1); // Ignorar la primera fila (encabezados)

    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = ''; // Limpiar el contenedor

    rows.forEach(row => {
        const [categoria, nombre, precio, imagen] = row.split(',');
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.dataset.categoria = categoria;

        menuItem.innerHTML = `
            <img src="images/${imagen}" alt="${nombre}">
            <h3>${nombre}</h3>
            <p>${precio}</p>
        `;

        menuContainer.appendChild(menuItem);
    });
}

// Función para mostrar una categoría específica
function showCategory(categoria) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        if (item.dataset.categoria === categoria) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Cargar el menú al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    loadMenu();
});