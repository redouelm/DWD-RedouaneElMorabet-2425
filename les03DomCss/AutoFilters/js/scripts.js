const btns = document.querySelectorAll('.filter');
const foto = document.querySelector('img');
const slider = document.querySelector('input[type="range"]');
const sliderValue = document.querySelector('#slider-label span:last-of-type');


btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(btn.textContent);


        const filterNaam = btn.textContent;
        foto.classList.add(filterNaam);
    });
});


slider.addEventListener('input', function () {
    foto.style.opacity = this.value;
    sliderValue.textContent = Math.round(this.value * 100) + "%"; // Update tekst
});
