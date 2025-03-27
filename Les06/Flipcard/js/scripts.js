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

let quoteNr = 0;

// 4. fav link toggle
// ...

// 5. flip
// ...

// 6. keyboard flip		
// ...

// 7. show contact form
// ...

// 8. hide contact form
// ...

// 9. show characters typed
// ...

// 10. formchecking
// ...
