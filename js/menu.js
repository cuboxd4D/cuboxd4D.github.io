(function () {
    const openButton = document.querySelector('.nav__menu');
    const navMenu = document.querySelector('.nav__link--menu');
    const closeButton = document.querySelector('.nav__close');

    if (!openButton || !navMenu) return;

    const toggleMenu = () => {
        navMenu.classList.toggle('nav__link--show');
    };

    openButton.addEventListener('click', toggleMenu);

    if (closeButton) {
        closeButton.addEventListener('click', toggleMenu);
    }

    navMenu.querySelectorAll('.nav__links').forEach((link) => {
        link.addEventListener('click', () => navMenu.classList.remove('nav__link--show'));
    });
})();