/*const prio = document.querySelector('#selPriority');
const dline = document.querySelector('#datDeadline');
const taak = document.querySelector('#txtTask');
const btn = document.querySelector('#btnSubmit');
const Taakveld = document.querySelector('#tasks');

btn.addEventListener('submit', function () {

    let ingegevenTaak = taak;
    console.log(ingegevenTaak.value);
    Taakveld.innerHTML = ingegevenTaak.value;
});*/

document.querySelector('#frmTask').addEventListener('submit', function (event) {
    event.preventDefault();

    const taakVeld = document.querySelector('#tasks');
    const taak = document.querySelector('#txtTask').value.trim();
    const prioriteit = document.querySelector('#selPriority').value;
    const deadline = document.querySelector('#datDeadline').value ? `(deadline: ${document.querySelector('#datDeadline').value})` : "";


    taakVeld.innerHTML += `<div class="task">
    <span class="priority priority--${prioriteit} material-icons">assignment</span>
    <p class="tasktext">${taak} <span class="deadline">${deadline}</span></p>
    <span class="complete material-icons">more_horiz</span>
    </div>`;

    document.querySelector('#txtTask').value = "";
    document.querySelector('#datDeadline').value = "";
    document.querySelector('#selPriority').value = "normal";
});

document.querySelector('#tasks').addEventListener('click', function (event) {
    if (event.target.classList.contains('complete')) {
        event.target.parentElement.remove();
    }
});
