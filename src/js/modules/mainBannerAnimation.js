document.addEventListener('DOMContentLoaded', () => {
	animateMainBannerContent();
});

function animateMainBannerContent() {
	const mainBanner = document.querySelector('.main-banner');

	if (mainBanner) {
		mainBanner.classList.add('main-banner--animated');
	}
}
