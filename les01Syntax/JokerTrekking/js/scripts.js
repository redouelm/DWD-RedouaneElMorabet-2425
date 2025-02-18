const AANTAL_SPELERS = 10000;
const MIN_GETAL = 1000;
const MAX_GETAL = 9999;
const PRIJZEN = { 1: 2.5, 2: 10, 3: 100, 4: 500 };
//willekeurig getal genereren
function genereerWillekeurigGetal() {
    return Math.floor(Math.random() * (MAX_GETAL - MIN_GETAL + 1)) + MIN_GETAL;
}
//overeenkomende tellen
function telCijfers(getal, trekking) {
    let aantal = 0;
    while (getal % 10 === trekking % 10 && getal > 0) {
        aantal++;
        getal = Math.floor(getal / 10);
        trekking = Math.floor(trekking / 10);
    }
    return aantal;
}
const trekking = genereerWillekeurigGetal();
console.log('%c// trekking', 'color: #8b2344 ; font-size: 20px;');
console.log(`%cgetrokken getal: ${trekking}`, 'color: yellow');

let winsten = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
let totaleWinst = 0;
for (let i = 0; i < AANTAL_SPELERS; i++) {
    let spelerGetal = genereerWillekeurigGetal();
    let juisteCijfers = telCijfers(spelerGetal, trekking);
    winsten[juisteCijfers]++;
    if (juisteCijfers > 0) {
        totaleWinst += PRIJZEN[juisteCijfers] || 0;
    }
}
// Bereken gemiddelde winst
const gemiddeldeWinst = totaleWinst / AANTAL_SPELERS;
// Toon resultaten
console.log('%c\n// gokken', 'color: #8b2344; font-size: 20px;');
console.log(`aantal iteraties: ${AANTAL_SPELERS}`);
console.log('%c\n// resultaten', 'color: #8b2344; font-size: 20px;');
Object.keys(winsten).sort((a, b) => a - b).forEach(key => {
console.log(`${key} juist: ${winsten[key]}`);
});
console.log(`%cgemiddelde winst: €${gemiddeldeWinst.toFixed(3)}`, 'background: lightgray; padding: 8px; color: red; font-size: 16px');
