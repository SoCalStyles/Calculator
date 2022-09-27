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
const backspaceButton = document.querySelector('#backspace');

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

// functions for each operator
addButton.addEventListener('click', () => {
    if (windowTwo.textContent === '') {
    windowTwo.textContent = '+';
    } else if (windowThree.textContent === '') {
        windowTwo.textContent = '+';
    }  else {
    let answer = operate(windowTwo.textContent, windowOne.textContent, windowThree.textContent);
    windowOne.textContent = answer;
    windowTwo.textContent = '+';
    windowThree.textContent = '';
    }
});

subtractButton.addEventListener('click', () => {
    if (windowTwo.textContent === '') {
        windowTwo.textContent = '-';
        } else if (windowThree.textContent === '') {
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
        } else if (windowThree.textContent === '') {
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
    } else if (windowThree.textContent === '') {
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
        } else if (windowThree.textContent === '') {
            windowTwo.textContent = sign.textContent;
        } else {
            let answer = operate(windowTwo.textContent, windowOne.textContent, windowThree.textContent);
            windowOne.textContent = answer;
            windowTwo.textContent = sign.textContent;
            windowThree.textContent = '';
        };
    });
});
*/

// changes number from positive to negative and vice versa
positiveNegative.addEventListener('click', () => {
    if (windowTwo.textContent === '') {
        let array = windowOne.textContent.split('');
        console.log(array);
        if (array[0] === '-') {
            let removeNegative = array.shift();
            console.log(removeNegative);
            windowOne.textContent = array.join('');
        } else if (array[0] !== '-') {
            windowOne.textContent = `-${windowOne.textContent}`;
        }
    } else if (windowThree.textContent !== '') {
        let array = windowThree.textContent.split('');
        console.log(array);
        if (array[0] === '-') {
            let removeNegative = array.shift();
            console.log(removeNegative);
            windowThree.textContent = array.join('');
        } else if (array[0] !== '-') {
            windowThree.textContent = `-${windowThree.textContent}`;
        }
    }
});

/*
should take textContent and turn to array, then add +/- to front of array
*/

percentageButton.addEventListener('click', () => {
    if (windowTwo.textContent === '') {
        windowOne.textContent = (windowOne.textContent / 100);
    } else if (windowThree.textContent !== '') {
        windowThree.textContent = (windowThree.textContent / 100);
    }
});

// function that returns answer when equals is clicked
equalsButton.addEventListener('click', () => {
    if (windowThree.textContent !== '') {
        let answer = operate(windowTwo.textContent, windowOne.textContent, windowThree.textContent);
        const roundedAnswer = Math.round(answer * 10000)/10000;
        windowOne.textContent = roundedAnswer;
        windowTwo.textContent = '';
        windowThree.textContent = '';
        mode = 'answered';
    } else {
        return;
    };
});

// function that deletes last digit entered
backspaceButton.addEventListener('click', () => {
    let windowArray = [];
    if (windowTwo.textContent == '') {
        windowArray = windowOne.textContent.split('');
        windowArray.pop();
        windowOne.textContent = windowArray.join('');
    } else {
        windowArray = windowThree.textContent.split('');
        windowArray.pop();
        windowThree.textContent = windowArray.join('');
    };
});

// replace multiple sign button functions with just the one
// fix event listener for positiveNegative
// create foolproof for more than one decimal in a number
// fix numbers that are really long not fitting in display window
// add keyboard support



