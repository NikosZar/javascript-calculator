// build functions to add, subtract, multiply, divide
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return (num1 / num2).toFixed(2);
}

// const operator = operator;
// const value1 = num1;
// const value2 = num2;

function operate(num1, operator, num2) {
    if (operator === '+') {return add(num1, num2)}
    else if (operator === '-') {return subtract(num1, num2)}
    else if (operator === '*') {return multiply(num1, num2)}
    else if (operator === '/') {return divide(num1, num2)}
}

//Selectors
const display = document.querySelector(".display");
const buttonZero = document.querySelector(".zero");
const buttonOne = document.querySelector(".one");
const buttonTwo = document.querySelector(".two");
const buttonThree = document.querySelector(".three");
const buttonFour = document.querySelector(".four");
const buttonFive = document.querySelector(".five");
const buttonSix = document.querySelector(".six");
const buttonSeven = document.querySelector(".seven");
const buttonEight = document.querySelector(".eight");
const buttonNine = document.querySelector(".nine");
const buttonClear = document.querySelector(".clear-btn");
let displayValue = '';

// Button event listeners
buttonZero.addEventListener("click", () => {
    displayValue += 0
    display.textContent = displayValue;
})

buttonOne.addEventListener("click", () => {
    displayValue += 1
    display.textContent = displayValue;
})

buttonTwo.addEventListener("click", () => {
    displayValue += 2
    display.textContent = displayValue;
})

buttonThree.addEventListener("click", () => {
    displayValue += 3
    display.textContent = displayValue;
})

buttonFour.addEventListener("click", () => {
    displayValue += 4
    display.textContent = displayValue;
})

buttonFive.addEventListener("click", () => {
    displayValue += 5
    display.textContent = displayValue;
})

buttonSix.addEventListener("click", () => {
    displayValue += 6
    display.textContent = displayValue;
})

buttonSeven.addEventListener("click", () => {
    displayValue += 7
    display.textContent = displayValue;
})

buttonEight.addEventListener("click", () => {
    displayValue += 8
    display.textContent = displayValue;
})

buttonNine.addEventListener("click", () => {
    displayValue += 9
    display.textContent = displayValue;
})

buttonClear.addEventListener("click", () => {
    displayValue = '';
    display.textContent = displayValue;
})

// if an operator button is pressed, save the value that is in the display as num1
const operatorButtons = document.querySelectorAll(".operator")