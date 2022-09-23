const displayWindow = document.querySelector('#displayWindow');
const windowOne = document.querySelector('#window1');
const windowTwo = document.querySelector('#window2');
const windowThree = document.querySelector('#window3');

const numberButton = document.querySelectorAll('.numberButton');

const addButton = document.querySelector('#addButton');
const subtractButton = document.querySelector('#subtractButton');
const multiplyButton = document.querySelector('#multiplyButton');
const divideButton = document.querySelector('#divideButton');

const equalsButton = document.querySelector('#equalsButton');

const clearButton = document.querySelector('#clearButton');

let operator = '';
let mode = '';

// math functions
const addition = function(a, b) {
    return +(a) + +(b);
}

const subtraction = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b == 0) {
        alert("you can't just do that!");
        return a;
    }
    return a / b;
}

// takes an operator and 2 numbers and then calls one of the above functions
const operate = function(operator, number1, number2) {
    if (number1 === undefined) {
        windowOne.textContent = '';
    };
    if (number2 === undefined) {
        return a;
    };
    if (operator == '+') {
        return addition(number1, number2)
    } else if (operator == '-') {
        return subtraction(number1, number2)
    } else if (operator == '*') {
        return multiply(number1, number2);
    } else if (operator == '/') {
        return divide(number1, number2);
    };
};


// function that populates display when you click the number buttons
numberButton.forEach(button => {
    button.addEventListener('click', function() {
        if (windowTwo.textContent === '') {
            windowOne.textContent += button.textContent;
        } else {
            windowThree.textContent += button.textContent;
        };
    });
});

// function that clears display when clear button is clicked
clearButton.addEventListener('click', () => {
    windowOne.textContent = '';
    windowTwo.textContent = '';
    windowThree.textContent = ' ';
});

addButton.addEventListener('click', () => {
    if (windowTwo.textContent === '') {
    windowTwo.textContent = '+';
    } else {
    let answer = operate(windowTwo.textContent, windowOne.textContent, windowThree.textContent);
    windowOne.textContent = answer;
    windowTwo.textContent = '+';
    windowThree.textContent = '';
    }
});

subtractButton.addEventListener('click', () => {
    if (windowTwo.textContent === '') {
        windowTwo.textContent = '-';
        } else {
        let answer = operate(windowTwo.textContent, windowOne.textContent, windowThree.textContent);
        windowOne.textContent = answer;
        windowTwo.textContent = '-';
        windowThree.textContent = '';
        }
});

multiplyButton.addEventListener('click', () => {
    if (windowTwo.textContent === '') {
        windowTwo.textContent = '*';
        } else {
        let answer = operate(windowTwo.textContent, windowOne.textContent, windowThree.textContent);
        windowOne.textContent = answer;
        windowTwo.textContent = '*';
        windowThree.textContent = '';
        }
});

divideButton.addEventListener('click', () => {
    if (windowTwo.textContent === '') {
        windowTwo.textContent = '/';
        } else {
        let answer = operate(windowTwo.textContent, windowOne.textContent, windowThree.textContent);
        windowOne.textContent = answer;
        windowTwo.textContent = '/';
        windowThree.textContent = '';
        }
});

// function that returns answer when equals is clicked
equalsButton.addEventListener('click', () => {
    if (windowTwo.textContent == '' || windowThree.textContent == '') {
        return;
    }
    let answer = operate(windowTwo.textContent, windowOne.textContent, windowThree.textContent);
    windowOne.textContent = answer;
    windowTwo.textContent = '';
    windowThree.textContent = '';
    mode = 'answered';
});




