const quotes = [
	'Leven ons vraag jonge goa ouder. Schatkist ad aardschok bepaalden producten ik gomboomen.',
	'Planters schatten overgaat troepjes en baksteen behouden in',
	'Om eerder groene gronds de soegei bamboe in dreigt af',
	'Schaal zoodat bakjes te slotte en'
];

const pictures = [
	'img/profile1a.jpg',
	'img/profile1b.jpg',
	'img/profile1c.jpg'
];

// DOM

const hdr = document.querySelector('.page__header');
const clrInput = document.querySelector('#inpHeaderColor');


// 1. header background color
clrInput.addEventListener('input', function() {
	hdr.style.backgroundColor = clrInput.value;
});


// 2. random picture
const rndNmbr = Math.floor(Math.random() * pictures.length);
console.log(rndNmbr);
const imgPhoto = document.querySelector('.front__picture');

imgPhoto.src = pictures[rndNmbr];


// 3. next quote
const entrNxt = document.querySelector('.quote__next');
const blockQt = document.querySelector('.front__quote');

let quoteNr = 0;

function NextQuote() {
	quoteNr = quoteNr + 1;
	if (quoteNr < quotes.length) {
		blockQt.innerHTML = quotes[quoteNr];
	} else {
		quoteNr = 0;
		blockQt.textContent = quotes[quoteNr];
	}
}

entrNxt.addEventListener('click', NextQuote);


// 4. fav link toggle
const favIcon = document.querySelector('.lnkFav i'); 
favIcon.addEventListener('click', function(event) {
	event.preventDefault(); // Voorkomt dat de link ergens naartoe navigeert
	favIcon.classList.toggle('fa-star-o'); 
	favIcon.classList.toggle('fa-star');   
});

// 5. flip
const divCard = document.querySelector('.card-container');
const lnksFlip = document.querySelectorAll('.card__flip');
function handleLnkFlipClick(e) {
	e.preventDefault();
	divCard.classList.toggle('flip');
}
lnksFlip.forEach(lnk => {
	lnk.addEventListener('click', handleLnkFlipClick);
});

// 6. keyboard flip		
function handleKeyDown(e) {
	if (e.code == 'ArrowRight') {
		divCard.classList.add('flip');
	}
	if (e.code == 'ArrowLeft') {
		divCard.classList.remove('flip');
	}
}
document.addEventListener('keydown', handleKeyDown);

// 7. show contact form
const btnContact = document.querySelector('.lnkContact');
const contactModal = document.querySelector('#contactModal');
const closeModal = document.querySelector('.modal__close');

// Functie om de modal te openen
btnContact.addEventListener('click', function(e) {
	e.preventDefault();
	contactModal.classList.remove('hide'); 
});


// 8. hide contact form
closeModal.addEventListener('click', function() {
	contactModal.classList.add('hide'); 
});

// 9. show characters typed
document.addEventListener('DOMContentLoaded', function() {
	const taMessage = document.getElementById('taMessage');
	const charsLeftSpan = document.querySelector('.modal__charsleft');
	const maxChars = 500;

	taMessage.addEventListener('input', function() {
		const charsTyped = taMessage.value.length;
		const charsLeft = maxChars - charsTyped;
        
		charsLeftSpan.textContent = charsLeft;

		// voorkomen dat de gebruiker meer dan 500 typt
		if (charsLeft < 0) {
			taMessage.value = taMessage.value.substring(0, maxChars);
			charsLeftSpan.textContent = 0;
		}
	});
});

// 10. formchecking
// Selecteer elementen
const frmContact = document.querySelector('.modal__form');
const inpEmail = frmContact.querySelector('#inpEmail');
const taMessage = frmContact.querySelector('#taMessage');
const msgEmail = frmContact.querySelector('#errEmail');
const msgMessage = frmContact.querySelector('#errMessage');

// Event handler voor het verzenden van het formulier
function handleContactFormSubmit(e) {
	e.preventDefault();
	let numErrors = 0;

	// Wis vorige foutmeldingen
	msgEmail.innerHTML = '';
	msgMessage.innerHTML = '';

	// Controleer e-mail
	if (!inpEmail.value.includes('@')) {
		msgEmail.innerHTML = 'E-mail moet een @ bevatten';
		numErrors++;
	}
	if (inpEmail.value.trim() === '') {
		msgEmail.innerHTML = 'E-mail mag niet leeg zijn';
		numErrors++;
	}

	// Controleer bericht
	if (taMessage.value.trim() === '') {
		msgMessage.innerHTML = 'Bericht mag niet leeg zijn';
		numErrors++;
	}

	// Als alles correct is, reset formulier en toon bericht
	if (numErrors === 0) {
		inpEmail.value = '';
		taMessage.value = '';		
		contactModal.classList.add('hide');
	}
}

// Schakel HTML5-validatie uit
frmContact.setAttribute('novalidate', 'novalidate');

// Voeg event listener toe aan het formulier
frmContact.addEventListener('submit', handleContactFormSubmit);
