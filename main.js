const displayWindow = document.querySelector('#displayWindow');
displayWindow.textContent = ' ';

const numberButton = document.querySelectorAll('.numberButton');

const addButton = document.querySelector('#addButton');
const subtractButton = document.querySelector('#subtractButton');
const multiplyButton = document.querySelector('#multiplyButton');
const divideButton = document.querySelector('#divideButton');

const equalsButton = document.querySelector('#equalsButton');

const clearButton = document.querySelector('#clearButton');

// displayValue += button

// function that populates display when you click the number buttons

numberButton.forEach(button => {
    button.addEventListener('click', function() {
        displayWindow.textContent += button.textContent;
    });
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
    a = +(displayWindow.textContent);
    // takes an operator and 2 numbers and then calls one of the 
    // above functions on the numbers
}

