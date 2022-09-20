const displayWindow = document.querySelector('#displayWindow');
let displayValue = document.createElement('p');
displayValue = ' ';
displayWindow.appendChild(displayValue);


const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
const zeroButton = document.querySelector('#zero');
const decimalButton = document.querySelector('#decimal');

const addButton = document.querySelector('#addButton');
const subtractButton = document.querySelector('#subtractButton');
const multiplyButton = document.querySelector('#multiplyButton');
const divideButton = document.querySelector('#divideButton');

const equalsButton = document.querySelector('#equalsButton');

const clearButton = document.querySelector('#clearButton');

// displayValue += button

// functions that populate display when you click the number buttons
oneButton.addEventListener('click', () => {
    displayValue += 1;
});
twoButton.addEventListener('click', () => {
    displayValue += 2;
});
threeButton.addEventListener('click', () => {
    displayValue += 3;
});
fourButton.addEventListener('click', () => {
    displayValue += 4;
});
fiveButton.addEventListener('click', () => {
    displayValue += 5;
});
sixButton.addEventListener('click', () => {
    displayValue += 6;
});
sevenButton.addEventListener('click', () => {
    displayValue += 7;
});
eightButton.addEventListener('click', () => {
    displayValue += 8;
});
nineButton.addEventListener('click', () => {
    displayValue += 9;
});
zeroButton.addEventListener('click', () => {
    displayValue += 0;
});


const addition = function(a, b) {
    return a * b;
}

const subtraction = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function() {
    // takes an operator and 2 numbers and then calls one of the 
    // above functions on the numbers
}

