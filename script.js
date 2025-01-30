		document.querySelectorAll('.menu li').forEach(item => {
			item.addEventListener('click', () => {
				item.querySelector('a').click();
			});
		});

        function toggleMenu() {
            var menu = document.getElementById('menu');
            menu.classList.toggle('active');
        }
        function hideMenu() {
            var menu = document.getElementById('menu');
            if (window.innerWidth < 600) {
                menu.classList.remove('active');
            }
        }
        function showCategory(categoryId) {
            document.querySelectorAll('.category').forEach(category => {
                category.classList.remove('active');
            });
            document.getElementById(categoryId).classList.add('active');
        }
        document.addEventListener('DOMContentLoaded', () => {
            showCategory('especialidades');
        });