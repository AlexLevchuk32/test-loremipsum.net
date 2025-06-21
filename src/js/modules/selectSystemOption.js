document.addEventListener('DOMContentLoaded', () => {
	selectOption();
});

function selectOption() {
	const customSelect = document.querySelector('.order-form__select.custom-select');

	if (customSelect) {
		const selectInput = customSelect.querySelector('.custom-select__current');
		const selectItems = customSelect.querySelectorAll('.custom-select__item');

		customSelect.addEventListener('click', () => {
			console.log(customSelect);

			if (!customSelect.classList.contains('open')) {
				customSelect.classList.add('open');
			} else {
				customSelect.classList.remove('open');
			}
		});

		selectItems.forEach((item) => {
			item.addEventListener('click', () => {
				selectInput.textContent = item.textContent;
			});
		});
	}
}
