// DOM 
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

const messages = JSON.parse(localStorage.getItem('messages')) || [];
let gifResults = [];
let gifIndex = 0;

// EVENTS 

// Initial Load
if (localStorage.getItem('darkMode') === 'true') {
	document.body.classList.add('dark-mode');
}
messages.forEach(({ email, message }) => renderMessage(email, message));
emailInput.value = localStorage.getItem('email') || '';
messageInput.value = localStorage.getItem('message') || '';

// Form Inputs opslaan
emailInput.addEventListener('input', () => {
	localStorage.setItem('email', emailInput.value);
});
messageInput.addEventListener('input', () => {
	localStorage.setItem('message', messageInput.value);
});

// Submit Message
form.addEventListener('submit', function(e) {
	e.preventDefault();
	const email = emailInput.value.trim();
	const message = messageInput.value.trim();

	if (email && message) {
		const newMsg = { email, message };
		messages.push(newMsg);
		localStorage.setItem('messages', JSON.stringify(messages));
		renderMessage(email, message);
		messageInput.value = '';
		localStorage.setItem('message', '');
	}
});

// WEB API's

function renderMessage(email, message) {
	const hash = md5(email.trim().toLowerCase());
	const avatar = `https://www.gravatar.com/avatar/${hash}?d=identicon`;

	//

	const msgHTML = `
    <div class="message">
      <img src="${avatar}" title="${email}" />
      <span ondblclick="handleDoubleClick(event)">${message}</span>
    </div>
  `;
	chatBox.innerHTML += msgHTML;
	chatBox.scrollTop = chatBox.scrollHeight;
}

// GIF 
window.handleDoubleClick = function(e) {
	e.preventDefault();
	const selectedText = window.getSelection().toString().trim();
	if (!selectedText) return;

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

function updateGifDisplay() {
	if (gifResults.length > 0) {
		const gifURL = gifResults[gifIndex].images.fixed_height.url;
		gifContainer.innerHTML = '<img src="' + gifURL + '" />';
	}
}

prevBtn.addEventListener('click', () => {
	if (gifIndex > 0) {
		gifIndex--;
		updateGifDisplay();
	}
});

nextBtn.addEventListener('click', () => {
	if (gifIndex < gifResults.length - 1) {
		gifIndex++;
		updateGifDisplay();
	}
});

selectBtn.addEventListener('click', () => {
	const gifURL = gifResults[gifIndex].images.fixed_height.url;
	const email = emailInput.value;
	const newMsg = { email, message: '<img src="' + gifURL + '" />' };
	messages.push(newMsg);
	localStorage.setItem('messages', JSON.stringify(messages));
	renderMessage(email, newMsg.message);
	modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
	if (e.target === modal) {
		modal.style.display = 'none';
	}
});

darkToggle.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
	const isDark = document.body.classList.contains('dark-mode');
	localStorage.setItem('darkMode', isDark.toString());
});
