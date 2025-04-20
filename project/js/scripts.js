// DOM - Cursus JS
const form = document.querySelector('#chat-form');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const chatBox = document.querySelector('#chat-box');
const modal = document.querySelector('#gif-modal');
const gifContainer = document.querySelector('#gif-container');
const gifSearchInfo = document.querySelector('#gif-search-info');
const prevBtn = document.querySelector('#prev-gif');
const nextBtn = document.querySelector('#next-gif');
const selectBtn = document.querySelector('#select-gif');
const darkToggle = document.querySelector('#toggle-dark-mode');

// VARIABLE
const messages = JSON.parse(localStorage.getItem('messages')) || [];
let gifResults = [];
let gifIndex = 0;

//
// EVENTS 
//

// Thema opvragen en opzetten
if (localStorage.getItem('darkMode') === 'true') {
	document.body.classList.add('dark-mode');
}

// Info ophalen van localStorage 
messages.forEach(({ email, message }) => renderMessage(email, message));
emailInput.value = localStorage.getItem('email') || '';
messageInput.value = localStorage.getItem('message') || '';

// Forum ingaves opslaan
emailInput.addEventListener('input', () => {
	localStorage.setItem('email', emailInput.value);
});
messageInput.addEventListener('input', () => {
	localStorage.setItem('message', messageInput.value);
});

// Bericht verzenden + opslaan in localStorage
form.addEventListener('submit', function(e) {
	e.preventDefault();
	const email = emailInput.value.trim();
	const message = messageInput.value.trim();

	// Form checken + opslaan in localStorage
	if (email && message) {
		const newMsg = { email, message };
		messages.push(newMsg);
		localStorage.setItem('messages', JSON.stringify(messages));
		renderMessage(email, message);
		messageInput.value = '';
		localStorage.setItem('message', '');
	}
});

// WEB API's - Cursus JS + gravater docs + AI

function renderMessage(email, message) {
	const hash = md5(email.trim().toLowerCase());
	const avatar = `https://www.gravatar.com/avatar/${hash}?d=identicon`;

	// template bericht - Cursus JS
	const msgHTML = `
    <div class="message">
      <img src="${avatar}" title="${email}" />
      <span ondblclick="handleDoubleClick(event)">${message}</span>
    </div>
  `;
	chatBox.innerHTML += msgHTML;
	chatBox.scrollTop = chatBox.scrollHeight;
}

//
// GIF weergeven
// 

// geselecteerde tekst op zoeken in GIPHY API
window.handleDoubleClick = function(e) {
	e.preventDefault();
	const selectedText = window.getSelection().toString().trim();
	if (!selectedText) return;

	// AJAX met fetch API - Cursus JS + AI

	fetch(`https://api.giphy.com/v1/gifs/search?api_key=zar1USO7y3DrCdraCabC6UmVxgF0GoXc&q=${selectedText}&limit=10`)
		.then(res => res.json())
		.then(data => {
			gifResults = data.data;
			gifIndex = 0;
			gifSearchInfo.innerHTML = `You searched for: '<b>${selectedText}</b>' !`;
			updateGifDisplay();
			modal.style.display = 'block';
		});
};

// functie wordt gebruikt als nieuwe resultaat is via API + als er op "previous" of "next" wordt gebrukt 
// m.b.v. AI
function updateGifDisplay() {
	if (gifResults.length > 0) {
		const gifURL = gifResults[gifIndex].images.fixed_height.url;
		gifContainer.innerHTML = '<img src="' + gifURL + '" />';
	}
}

// De vorige geresulteerde GIF tonen - Cursus JS: syntax
prevBtn.addEventListener('click', () => {
	if (gifIndex > 0) {
		gifIndex--;
		updateGifDisplay();
	}
});

// De volgende geresulteerde GIF tonen - Cursus JS: syntax
nextBtn.addEventListener('click', () => {
	if (gifIndex < gifResults.length - 1) {
		gifIndex++;
		updateGifDisplay();
	}
});

// Geselecteerde GIF weergegeven 
selectBtn.addEventListener('click', () => {
	const gifURL = gifResults[gifIndex].images.fixed_height.url;
	const email = emailInput.value;
	const newMsg = { email, message: '<img src="' + gifURL + '" />' };
	messages.push(newMsg);
	localStorage.setItem('messages', JSON.stringify(messages));
	renderMessage(email, newMsg.message);
	modal.style.display = 'none';
});

// wegklikken van het venster - m.b.v. AI
window.addEventListener('click', (e) => {
	if (e.target === modal) {
		modal.style.display = 'none';
	}
});

// Thema omzetten (class toevoegen) + opslaan lin localStorage
darkToggle.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
	const isDark = document.body.classList.contains('dark-mode');
	localStorage.setItem('darkMode', isDark.toString());
});
