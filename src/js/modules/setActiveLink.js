document.addEventListener('DOMContentLoaded', () => {
	setActiveLink();
});

function setActiveLink() {
	const headerMenuItems = document.querySelectorAll('.header__menu-item');
	const currentPath = window.location.href;

	headerMenuItems.forEach((item) => {
		if (item) {
			const itemPath = new URL(item.href).href;

			if (currentPath === itemPath) {
				item.classList.add('active');
			} else {
				item.classList.remove('active');
			}
		}
	});

	headerMenuItems.forEach((item) => {
		if (item) {
			item.addEventListener('click', () => {
				headerMenuItems.forEach((el) => el.classList.remove('active'));
				item.classList.add('active');
			});
		}
	});
}
