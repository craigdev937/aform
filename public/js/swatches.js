var swatches = document.querySelectorAll('.swatches span');
var root = document.querySelector(':root');

swatches.forEach((swatch) => {
    swatch.addEventListener('click', (event) => {
        root.style.setProperty('--theme-color', event.target.style.background);
    })
});

