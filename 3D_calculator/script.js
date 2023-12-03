let buttons = document.querySelector('.button');
let btn = buttons.querySelectorAll('span');
let value = document.getElementById('value');
let backspaceBtn = document.getElementById('backspace');

buttons.addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
        handleButtonClick(e.target.innerHTML);
    }
});

document.addEventListener('keydown', function(e) {
    if (/^[0-9+\-*/.=]$/.test(e.key)) {
        e.preventDefault(); // Prevent typing in the input field
        handleButtonClick(e.key);
    } else if (e.key === 'Backspace') {
        let currentValue = value.innerHTML;
        value.innerHTML = currentValue.slice(0, -1);
    }
});

function handleButtonClick(buttonText) {
    if (buttonText === '=') {
        value.innerHTML = eval(value.innerHTML);
    } else if (buttonText === 'Clear') {
        value.innerHTML = "";
    } else if (buttonText === 'X') { // For the backspace button
        let currentValue = value.innerHTML;
        value.innerHTML = currentValue.slice(0, -1);
    } else {
        value.innerHTML += buttonText;
    }
}