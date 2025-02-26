const inpNaam = document.querySelector('#InpNaam');
const inpBod = document.querySelector('#InpBod');
const btnEnter = document.querySelector('#btnEnter');
const lblMessage = document.querySelector('#lblMessage');

let hoogsteBod = 0;
let hoogsteBieder = '';

btnEnter.addEventListener('click', function () {
    const naam = inpNaam.value;
    const bod = parseFloat(inpBod.value);

    if (bod > hoogsteBod) {
        hoogsteBod = bod;
        hoogsteBieder = naam;
        lblMessage.innerHTML = 'U heeft momenteel het hoogste bod';
        inpNaam.value = '';
        inpBod.value = '';
        
    }else{
        lblMessage.innerHTML = `Jammer! ${hoogsteBieder} heeft een hoger bod`;
    }
});

