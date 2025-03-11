const btns = document.querySelectorAll('.filter'); 
const foto = document.querySelector('img'); 
const slider = document.querySelector('input[type="range"]'); 
const sliderValue = document.querySelector('#slider-label span:last-of-type'); 


const filters = {
    "normal": "none",
    "grayscale": "grayscale(100%)",
    "sepia": "sepia(100%)",
    "hue": "hue-rotate(90deg)",
    "blur": "blur(5px)"
};

btns.forEach(btn => {
    btn.addEventListener('click', function(e) { 
        e.preventDefault();
        console.log(btn.textContent);

        
        const filterNaam = btn.textContent;
        foto.style.filter = filters[filterNaam] || "none"; 
    });
});


slider.addEventListener('input', function () {
    foto.style.opacity = this.value;
    sliderValue.textContent = Math.round(this.value * 100) + "%"; // Update tekst
});
