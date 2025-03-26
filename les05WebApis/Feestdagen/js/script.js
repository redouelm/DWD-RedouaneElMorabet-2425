// ===========================================
// DOM
// ===========================================

const datePic = document.querySelector('#datepicker');
const sbmt = document.querySelector('#buttonCheck');
const rslt = document.querySelector('#resultaat');

const API_KEY = ''; 
const COUNTRY_CODE = 'BE'; 

// ===========================================
// FUNCTIONS
// ===========================================

async function checkHoliday() {
	const selectedDate = datePic.value; // Haal de datum op

	if (!selectedDate) {
		rslt.textContent = '⚠️ Kies eerst een datum!';
		return;
	}

	// API URL genereren
	const url = `https://holidays.abstractapi.com/v1/?api_key=${API_KEY}&country=${COUNTRY_CODE}&year=${selectedDate.split('-')[0]}&month=${selectedDate.split('-')[1]}&day=${selectedDate.split('-')[2]}`;


	const response = await fetch(url);
	const data = await response.json();

	if (data.length > 0) {
		rslt.textContent = `🎉 ${selectedDate} is een feestdag! 🎉 `;
	} else {
		rslt.textContent = `❌ ${selectedDate} is geen feestdag.`;
	}
}

// ===========================================
// EVENTS
// ===========================================
 
sbmt.addEventListener('click', function(e) {
	e.preventDefault();
	console.log(sbmt.textContent);
	checkHoliday();
});