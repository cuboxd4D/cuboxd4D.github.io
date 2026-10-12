(function () {
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value = 0;

    const changePosition = (add) => {
        value = (value + add + sliders.length) % sliders.length;
        sliders.forEach((slider, index) => {
            const isVisible = index === value;
            slider.classList.toggle('testimony__body--show', isVisible);
            slider.style.display = isVisible ? 'grid' : 'none';
        });
    };

    if (buttonNext) {
        buttonNext.addEventListener('click', () => changePosition(1));
    }

    if (buttonBefore) {
        buttonBefore.addEventListener('click', () => changePosition(-1));
    }

    if (sliders.length) {
        changePosition(0);
    }
})();