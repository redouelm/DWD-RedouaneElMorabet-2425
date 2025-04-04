// declaraties (1p)
const btnLghtDrk = document.querySelector('#theme-toggle');
const backgrnd = document.querySelector('body');

// 1. thema toggle (1p)
btnLghtDrk.addEventListener('click', function(event) {
	event.preventDefault(); 
	backgrnd.classList.add('.body.dark');
});

// 2. reset alles (1p)
const btnRst = document.querySelector('#reset-btn');
const tskFields = document.querySelector('.task');
btnRst.addEventListener ('click', function(e) {
	e.preventDefault(); 
        
	tskFields.forEach(tskfield => {
		tskfield.innerHTML = '';
	});
});
    
// 3. dagdeel aanklikken (3p)


// 4. clear buttons (2p)


// 5. edit buttons - modal tonen (3p)
const liModal = document.querySelector('.task-edit');
const editModal = document.querySelector('#edit-modal');

liModal.addEventListener('click', function(e) {
	e.preventDefault();
	editModal.classList.remove('hidde'); 
}); 


// 6. modal verbergen met annuleren (1p)


// 7. modal verbergen met ESC (2p)
function handleKeyDown(e) {
	if (e.code == 'Esc') {
		editModal.classList.remove('hidde'); 
	}
}
document.addEventListener('keydown', handleKeyDown);


// 8. aantal karakters over, beperking tekstlengte (2p)

document.addEventListener('DOMContentLoaded', function() {
	const taMessage = document.querySelector('.modal-message');
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


// 9. modal bevestingen met ok (2p)


// 10. toetsnavigatie (2p)

