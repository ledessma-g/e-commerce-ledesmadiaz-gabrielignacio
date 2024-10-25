document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.querySelector('.loading-screen');

    if (loadingScreen) {
        loadingScreen.classList.add('hidden');

        loadingScreen.addEventListener('transitionend', () => {
            loadingScreen.style.display = 'none';
        });
    }
});