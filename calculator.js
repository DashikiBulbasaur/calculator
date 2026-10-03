const display = document.createElement("div");
display.classList.add("display");

const oneButton = document.createElement("button");
oneButton.textContent = "1";
const twoButton = document.createElement("button");
twoButton.textContent = "2";
const threeButton = document.createElement("button");
threeButton.textContent = "3";
const fourButton = document.createElement("button");
fourButton.textContent = "4";
const fiveButton = document.createElement("button");
fiveButton.textContent = "5";
const sixButton = document.createElement("button");
sixButton.textContent = "6";
const sevenButton = document.createElement("button");
sevenButton.textContent = "7";
const eightButton = document.createElement("button");
eightButton.textContent = "8";
const nineButton = document.createElement("button");
nineButton.textContent = "9";

const addButton = document.createElement("button");
addButton.textContent = "+";
const subtractButton = document.createElement("button");
subtractButton.textContent = "-";
const multiplyButton = document.createElement("button");
multiplyButton.textContent = "*";
const divideButton = document.createElement("button");
divideButton.textContent = "/";

const equalsButton = document.createElement("button");
equalsButton.textContent = "=";
const backspaceButton = document.createElement("button");
backspaceButton.textContent = "BACKSPACE";
const clearButton = document.createElement("button");
clearButton.textContent = "CLEAR";

const calculatorContainer = document.createElement("div");
calculatorContainer.classList.add("calculator");
const numbersContainer = document.createElement("div");
numbersContainer.classList.add("numbers");
const operatorContainer = document.createElement("div");
operatorContainer.classList.add("operators");
const resultContainer = document.createElement("div");
resultContainer.classList.add("results");

numbersContainer.append(
  oneButton,
  twoButton,
  threeButton,
  fourButton,
  fiveButton,
  sixButton,
  sevenButton,
  eightButton,
  nineButton,
);

operatorContainer.append(addButton, subtractButton, multiplyButton, divideButton);
resultContainer.append(equalsButton, backspaceButton, clearButton);

Array.from(numbersContainer.children).forEach((element) => {
  element.classList.add("numberButton");
});
Array.from(operatorContainer.children).forEach((element) => {
  element.classList.add("operatorButton");
});
Array.from(resultContainer.children).forEach((element) => {
  element.classList.add("resultButton");
});

calculatorContainer.append(display, numbersContainer, operatorContainer, resultContainer);

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
  return num1 / num2;
}

function matchOperation(num1, operator, num2) {
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
    default:
      return "ERROR";
  }
}

function operate(num1, operator, num2) {
  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    return "ERROR";
  }

  return matchOperation(num1, operator, num2);
}

function clear() {}

document.body.appendChild(calculatorContainer);
