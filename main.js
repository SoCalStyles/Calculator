const displayWindow = document.querySelector('#displayWindow');
const windowOne = document.querySelector('#window1');
const windowTwo = document.querySelector('#window2');
const windowThree = document.querySelector('#window3');

const positiveNegative = document.querySelector('#positiveNegative');
const percentageButton = document.querySelector('#percentage');
const numberButton = document.querySelectorAll('.numberButton');

const addButton = document.querySelector('#addButton');
const subtractButton = document.querySelector('#subtractButton');
const multiplyButton = document.querySelector('#multiplyButton');
const divideButton = document.querySelector('#divideButton');

//const operatorButton = document.querySelectorAll('.operator');

const equalsButton = document.querySelector('#equalsButton');
const clearButton = document.querySelector('#clearButton');

let operator = '';
let mode = '';

// math functions
const addition = (a, b) => {return +(a) + +(b)}

const subtraction = (a, b) => {return a - b};

const multiply = (a, b) => {return a * b};

const divide = (a, b) => {
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
        if (mode == 'answered') {
            if (windowTwo.textContent == '') {
            windowOne.textContent = '';
            mode = '';
            };
        };
        if (windowTwo.textContent === '') {
            if (windowOne.textContent.length < 8) {
                windowOne.textContent += button.textContent;
            };
        } else {
            if (windowThree.textContent.length < 8) {
                windowThree.textContent += button.textContent;
            };
        };
    });
});

// function that clears display when clear button is clicked
clearButton.addEventListener('click', () => {
    windowOne.textContent = '';
    windowTwo.textContent = '';
    windowThree.textContent = '';
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

/*
operatorButton.forEach(sign => {
    sign.addEventListener('click', function() {
        if (windowTwo.textContent === '') {
            windowTwo.textContent = sign.textContent;
            } else {
            let answer = operate(windowTwo.textContent, windowOne.textContent, windowThree.textContent);
            windowOne.textContent = answer;
            windowTwo.textContent = sign.textContent;
            windowThree.textContent = '';
            }
    });
});
*/

// still not working
positiveNegative.addEventListener('click', () => {
    if (windowTwo.textContent === '') {
        let numArrayOne = windowOne.textContent.split('');
        let finderOne = numArrayOne.find(char => {
            if (char == '-') {
                windowOne.textContent = numArrayOne.shift().toString();
            } else {
                windowOne.textContent = `-${windowOne.textContent}`;
            }
        });
        windowOne.textContent = finderOne.toString('');
    } else {
        let numArrayThree = windowThree.textContent.split('');
        let finderThree = numArrayThree.find(char => {
            if (char == '-') {
                return false;
            } else {
                windowOne.textContent = `-${windowOne.textContent}`;
            }
            windowOne.textContent = finderThree.toString('');
        });
    }
});

/*
should take textContent and turn to array, then add +/- to front of array
*/

/*
percentageButton.addEventListener('click', () => {
    windowOne.textContent += '%';
    windowOnePercentage = windowOne.textContent/100;
    windowThreePercentage = windowThree.textContent/100
    
})
*/

// function that returns answer when equals is clicked
equalsButton.addEventListener('click', () => {
    let answer = operate(windowTwo.textContent, windowOne.textContent, windowThree.textContent);
    const roundedAnswer = Math.round(answer * 10000)/10000;
    windowOne.textContent = roundedAnswer;
    windowTwo.textContent = '';
    windowThree.textContent = '';
    mode = 'answered';
});

// replace multiple sign button functions with just the one
// need to fix using equals with no sign or second number
// fix event listener for percentage
// fix event listener for positiveNegative
// create foolproof for more than one decimal in a number
// add backspace button
// add keyboard support



