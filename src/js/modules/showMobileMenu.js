document.addEventListener('DOMContentLoaded', () => {
	showHideMobileMenu();
});

function showHideMobileMenu() {
	const burgerIcon = document.querySelector('.header__burger-btn');
	// const

	if (burgerIcon) {
		const mobileMenu = document.querySelector('.header__menu');
		const menuItems = mobileMenu.querySelectorAll('.header__menu-item');
		const overlay = document.querySelector('.overlay');

		burgerIcon.addEventListener('click', () => {
			if (
				!burgerIcon.classList.contains('active') &&
				!mobileMenu.classList.contains('active')
			) {
				addAciveClass();
			} else {
				removeActiveClass();
			}
		});

		overlay.addEventListener('click', () => {
			if (overlay.classList.contains('active')) {
				removeActiveClass();
			}
		});

		menuItems.forEach((item) => {
			item.addEventListener('click', () => {
				removeActiveClass();
			});
		});

		function addAciveClass() {
			burgerIcon.classList.add('active');
			mobileMenu.classList.add('open');
			overlay.classList.add('active');
			document.body.classList.add('lock');
		}

		function removeActiveClass() {
			burgerIcon.classList.remove('active');
			mobileMenu.classList.remove('open');
			overlay.classList.remove('active');
			document.body.classList.remove('lock');
		}
	}
}
