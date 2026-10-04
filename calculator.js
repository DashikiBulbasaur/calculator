const display = document.createElement("div");
display.classList.add("display");
display.textContent = "1 + 2";

const oneButton = document.createElement("button");
oneButton.textContent = "1";
oneButton.addEventListener("click", () => {
  if (giveResult) {
    firstNumber += "1";
  }
});
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
const zeroButton = document.createElement("button");
zeroButton.textContent = "0";
const periodButton = document.createElement("button");
periodButton.textContent = ".";

const addButton = document.createElement("button");
addButton.textContent = "+";
addButton.addEventListener("click", () => {
  if (!giveResult) {
    // operate, maybe an operate() function or the actual separate functions
    // perpahs the operation definition can be done here
  } else {
    // update the display
  }
});

const subtractButton = document.createElement("button");
subtractButton.textContent = "-";
const multiplyButton = document.createElement("button");
multiplyButton.textContent = "*";
const divideButton = document.createElement("button");
divideButton.textContent = "/";

const equalsButton = document.createElement("button");
equalsButton.textContent = "=";
equalsButton.addEventListener("click", () => {
  // operate
});

const backspaceButton = document.createElement("button");
backspaceButton.textContent = "BACKSPACE";
backspaceButton.addEventListener("click", () => {
  // starting from the second number, if not null/empty, remove the variables and change display
});

const clearButton = document.createElement("button");
clearButton.textContent = "CLEAR";
clearButton.addEventListener("click", () => {
  // clear the display and the numbers, and !giveResult
});

const calculatorContainer = document.createElement("div");
calculatorContainer.classList.add("calculator");
const mainNumpadContainer = document.createElement("div");
mainNumpadContainer.classList.add("numbers");
const operatorContainer = document.createElement("div");
operatorContainer.classList.add("operators");
const resultContainer = document.createElement("div");
resultContainer.classList.add("results");

mainNumpadContainer.append(
  oneButton,
  twoButton,
  threeButton,
  fourButton,
  fiveButton,
  sixButton,
  sevenButton,
  eightButton,
  nineButton,
  zeroButton,
  periodButton,
  equalsButton,
);

operatorContainer.append(addButton, subtractButton, multiplyButton, divideButton);
resultContainer.append(backspaceButton, clearButton);

Array.from(mainNumpadContainer.children).forEach((element) => {
  element.classList.add("numberButton");
});
Array.from(operatorContainer.children).forEach((element) => {
  element.classList.add("operatorButton");
});
Array.from(resultContainer.children).forEach((element) => {
  element.classList.add("resultButton");
});

calculatorContainer.append(display, mainNumpadContainer, operatorContainer, resultContainer);

let firstNumber;
let secondNumber;
let giveResult = false;

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
