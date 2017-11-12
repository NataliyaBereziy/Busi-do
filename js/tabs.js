const buttons = document.querySelectorAll('#main-page ul li');
const tabs = document.querySelectorAll('#main-page .tabs .tabs-content');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => showTab(i));
}

function showTab(tabNumber) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.toggle('active', tabNumber === i);
        buttons[i].classList.toggle('active', tabNumber === i);
    }
}