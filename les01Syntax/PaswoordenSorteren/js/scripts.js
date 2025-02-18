function isCorrectPassword(pw) {
    if (pw.length < 9) return false;
    if (pw.includes('@')) return false;
    if (pw === 'password') return false;
    return true;
}

// Alle wachtwoorden
const passwords = ['klepekteo', 'test', 'Azerty123', 'rogier@work', 'password', 'MisterNasty12', 'pwn20red'];

// Print alle wachtwoorden
console.log('Alle wachtwoorden:');
passwords.forEach((pw, index) => {
    console.log(`${index + 1}. ${pw}`);
});
console.log();

// Lijsten maken voor correcte en incorrecte wachtwoorden
let welOk = [];
let nietOk = [];

passwords.forEach(pw => {
    if (isCorrectPassword(pw)) {
        welOk.push(pw);
    } else {
        nietOk.push(pw);
    }
});

// Print de twee lijsten
console.log("%cOk: " + welOk.join(','), "color: darkgreen");
console.log("%cNiet ok: " + nietOk.join(','), "color: darkred");