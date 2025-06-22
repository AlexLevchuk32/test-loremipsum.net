document.addEventListener('DOMContentLoaded', () => {
	setRangePercent();
});

function setRangePercent() {
	const rangeInput = document.querySelector('.order-form__range');

	if (rangeInput) {
		rangeInput.addEventListener('input', () => {
			const rangePercent = document.querySelector('.order-form__range-percent');

			rangePercent.textContent = rangeInput.value + ' %';
		});
	}
}
