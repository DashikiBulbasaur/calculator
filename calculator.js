// current problems:

let firstNumber = "";
let secondNumber = "";
let pressedOperator = false;
let pressedPeriod = false;
let giveResult = false;
let resultShown = false;
let pressedAdd = false;
let pressedSubtract = false;
let pressedMultiply = false;
let pressedDivide = false;

function checkAndReturnPreviousOps() {
  let listOfOps = [pressedAdd, pressedSubtract, pressedMultiply, pressedDivide];
  return listOfOps.findIndex((op) => op === true);
  // 0 = add
  // 1 = subtract
  // 2 = multiply
  // 3 = divide
  // -1 = none
}

function operateBasedOnPreviousOp() {
  // run op based on what was done before
  // and turn that variable false
  let result;
  switch (checkAndReturnPreviousOps()) {
    case 0:
      giveResult = true;
      pressedAdd = true;
      pressedSubtract = false;
      pressedMultiply = false;
      pressedDivide = false;
      result = matchAndOperate();
      result = result.toString();
      firstNumber = result;
      secondNumber = "";

      pressedAdd = false;
      pressedSubtract = false;
      pressedMultiply = false;
      pressedDivide = false;

      return result;
    case 1:
      giveResult = true;
      pressedAdd = false;
      pressedSubtract = true;
      pressedMultiply = false;
      pressedDivide = false;

      result = matchAndOperate();
      result = result.toString();
      firstNumber = result;
      secondNumber = "";

      pressedAdd = false;
      pressedSubtract = false;
      pressedMultiply = false;
      pressedDivide = false;

      return result;
    case 2:
      giveResult = true;
      pressedAdd = false;
      pressedSubtract = false;
      pressedMultiply = true;
      pressedDivide = false;

      result = matchAndOperate();
      result = result.toString();
      firstNumber = result;
      secondNumber = "";

      pressedAdd = false;
      pressedSubtract = false;
      pressedMultiply = false;
      pressedDivide = false;

      return result;
    case 3:
      giveResult = true;
      pressedAdd = false;
      pressedSubtract = false;
      pressedMultiply = false;
      pressedDivide = true;

      result = matchAndOperate();
      result = result.toString();
      firstNumber = result;
      secondNumber = "";

      pressedAdd = false;
      pressedSubtract = false;
      pressedMultiply = false;
      pressedDivide = false;

      return result;
    case -1:
      // should be impossible
      // this function is only ran when pressedOperator === true
      break;
    default:
      // should be impossible
      // only possible if the variables checked are somehow deleted
      break;
  }
}

function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

function matchAndOperate() {
  if (!Number.isFinite(parseInt(firstNumber)) || !Number.isFinite(parseInt(secondNumber))) {
    firstNumber = "";
    secondNumber = "";
    pressedOperator = false;
    pressedPeriod = false;
    giveResult = false;
    resultShown = true;
    pressedAdd = false;
    pressedSubtract = false;
    pressedMultiply = false;
    pressedDivide = false;
    return "ERROR";
  }

  if (pressedAdd) {
    return add(firstNumber, secondNumber);
  }

  if (pressedSubtract) {
    return subtract(firstNumber, secondNumber);
  }

  if (pressedMultiply) {
    return multiply(firstNumber, secondNumber);
  }

  if (pressedDivide) {
    return divide(firstNumber, secondNumber);
  }
}

function updateDisplay(variable) {
  // far todo: make a separate line above that shows the result, or the result + operator
  if (giveResult) {
    display.textContent = variable;
  } else {
    display.textContent += `${variable}`;
  }
}

function backspace() {}

const display = document.createElement("div");
display.classList.add("display");
display.textContent = "";

const oneButton = document.createElement("button");
oneButton.textContent = "1";
oneButton.addEventListener("click", () => {
  if (resultShown) {
    // basically initialize so the first number is updated
    display.textContent = "";
    resultShown = false;
    pressedOperator = false;
    giveResult = false;
    firstNumber = "";
    secondNumber = "";
    pressedPeriod = false;
    pressedAdd = false;
    pressedSubtract = false;
    pressedMultiply = false;
    pressedDivide = false;
  }

  if (!pressedOperator && !giveResult) {
    firstNumber += "1";
  } else {
    secondNumber += "1";
  }

  updateDisplay("1");
});

const twoButton = document.createElement("button");
twoButton.textContent = "2";
twoButton.addEventListener("click", () => {
  if (resultShown) {
    // basically initialize so the first number is updated
    display.textContent = "";
    resultShown = false;
    pressedOperator = false;
    giveResult = false;
    firstNumber = "";
    secondNumber = "";
    pressedPeriod = false;
    pressedAdd = false;
    pressedSubtract = false;
    pressedMultiply = false;
    pressedDivide = false;
  }

  if (!pressedOperator && !giveResult) {
    firstNumber += "2";
  } else {
    secondNumber += "2";
  }

  updateDisplay("2");
});

const threeButton = document.createElement("button");
threeButton.textContent = "3";
threeButton.addEventListener("click", () => {
  if (resultShown) {
    // basically initialize so the first number is updated
    display.textContent = "";
    resultShown = false;
    pressedOperator = false;
    giveResult = false;
    firstNumber = "";
    secondNumber = "";
    pressedPeriod = false;
    pressedAdd = false;
    pressedSubtract = false;
    pressedMultiply = false;
    pressedDivide = false;
  }

  if (!pressedOperator && !giveResult) {
    firstNumber += "3";
  } else {
    secondNumber += "3";
  }

  updateDisplay("3");
});

const fourButton = document.createElement("button");
fourButton.textContent = "4";
fourButton.addEventListener("click", () => {
  if (resultShown) {
    // basically initialize so the first number is updated
    display.textContent = "";
    resultShown = false;
    pressedOperator = false;
    giveResult = false;
    firstNumber = "";
    secondNumber = "";
    pressedPeriod = false;
    pressedAdd = false;
    pressedSubtract = false;
    pressedMultiply = false;
    pressedDivide = false;
  }

  if (!pressedOperator && !giveResult) {
    firstNumber += "4";
  } else {
    secondNumber += "4";
  }

  updateDisplay("4");
});

const fiveButton = document.createElement("button");
fiveButton.textContent = "5";
fiveButton.addEventListener("click", () => {
  if (resultShown) {
    // basically initialize so the first number is updated
    display.textContent = "";
    resultShown = false;
    pressedOperator = false;
    giveResult = false;
    firstNumber = "";
    secondNumber = "";
    pressedPeriod = false;
    pressedAdd = false;
    pressedSubtract = false;
    pressedMultiply = false;
    pressedDivide = false;
  }

  if (!pressedOperator && !giveResult) {
    firstNumber += "5";
  } else {
    secondNumber += "5";
  }

  updateDisplay("5");
});

const sixButton = document.createElement("button");
sixButton.textContent = "6";
sixButton.addEventListener("click", () => {
  if (resultShown) {
    // basically initialize so the first number is updated
    display.textContent = "";
    resultShown = false;
    pressedOperator = false;
    giveResult = false;
    firstNumber = "";
    secondNumber = "";
    pressedPeriod = false;
    pressedAdd = false;
    pressedSubtract = false;
    pressedMultiply = false;
    pressedDivide = false;
  }

  if (!pressedOperator && !giveResult) {
    firstNumber += "6";
  } else {
    secondNumber += "6";
  }

  updateDisplay("6");
});

const sevenButton = document.createElement("button");
sevenButton.textContent = "7";
sevenButton.addEventListener("click", () => {
  if (resultShown) {
    // basically initialize so the first number is updated
    display.textContent = "";
    resultShown = false;
    pressedOperator = false;
    giveResult = false;
    firstNumber = "";
    secondNumber = "";
    pressedPeriod = false;
    pressedAdd = false;
    pressedSubtract = false;
    pressedMultiply = false;
    pressedDivide = false;
  }

  if (!pressedOperator && !giveResult) {
    firstNumber += "7";
  } else {
    secondNumber += "7";
  }

  updateDisplay("7");
});

const eightButton = document.createElement("button");
eightButton.textContent = "8";
eightButton.addEventListener("click", () => {
  if (resultShown) {
    // basically initialize so the first number is updated
    display.textContent = "";
    resultShown = false;
    pressedOperator = false;
    giveResult = false;
    firstNumber = "";
    secondNumber = "";
    pressedPeriod = false;
    pressedAdd = false;
    pressedSubtract = false;
    pressedMultiply = false;
    pressedDivide = false;
  }

  if (!pressedOperator && !giveResult) {
    firstNumber += "8";
  } else {
    secondNumber += "8";
  }

  updateDisplay("8");
});

const nineButton = document.createElement("button");
nineButton.textContent = "9";
nineButton.addEventListener("click", () => {
  if (resultShown) {
    // basically initialize so the first number is updated
    display.textContent = "";
    resultShown = false;
    pressedOperator = false;
    giveResult = false;
    firstNumber = "";
    secondNumber = "";
    pressedPeriod = false;
    pressedAdd = false;
    pressedSubtract = false;
    pressedMultiply = false;
    pressedDivide = false;
  }

  if (!pressedOperator && !giveResult) {
    firstNumber += "9";
  } else {
    secondNumber += "9";
  }

  updateDisplay("9");
});

const zeroButton = document.createElement("button");
zeroButton.textContent = "0";
zeroButton.addEventListener("click", () => {
  if (resultShown) {
    // basically initialize so the first number is updated
    display.textContent = "";
    resultShown = false;
    pressedOperator = false;
    giveResult = false;
    firstNumber = "";
    secondNumber = "";
    pressedPeriod = false;
    pressedAdd = false;
    pressedSubtract = false;
    pressedMultiply = false;
    pressedDivide = false;
  }

  if (!pressedOperator && !giveResult) {
    firstNumber += "0";
  } else {
    secondNumber += "0";
  }

  updateDisplay("0");
});

const periodButton = document.createElement("button");
periodButton.textContent = ".";
periodButton.addEventListener("click", () => {
  if (resultShown) {
    // basically initialize so the first number is updated
    display.textContent = "";
    resultShown = false;
    pressedOperator = false;
    giveResult = false;
    firstNumber = "";
    secondNumber = "";
    pressedPeriod = false;
    pressedAdd = false;
    pressedSubtract = false;
    pressedMultiply = false;
    pressedDivide = false;
  }

  // disable after one period is already done, and reactivate once an operator/result is clicked
  if (!pressedOperator && !giveResult) {
    firstNumber += ".";
  } else {
    secondNumber += ".";
  }

  updateDisplay(".");
});

periodButton.onclick = function () {
  // disables on click but other functions will be able to undisable it
  this.disabled = true;
};

const addButton = document.createElement("button");
addButton.textContent = "+";
addButton.addEventListener("click", () => {
  resultShown = false;

  if (!pressedOperator) {
    // update display
    pressedOperator = true;
    updateDisplay(" + ");
    pressedAdd = true;
    pressedSubtract = false;
    pressedMultiply = false;
    pressedDivide = false;
  } else {
    let result = operateBasedOnPreviousOp();
    result += " + ";
    updateDisplay(result);
    giveResult = false;
    pressedAdd = true;
  }

  periodButton.disabled = false;
});

const subtractButton = document.createElement("button");
subtractButton.textContent = "-";
subtractButton.addEventListener("click", () => {
  resultShown = false;

  if (!pressedOperator) {
    // update display
    pressedOperator = true;
    updateDisplay(" - ");
    pressedAdd = false;
    pressedSubtract = true;
    pressedMultiply = false;
    pressedDivide = false;
  } else {
    let result = operateBasedOnPreviousOp();
    result += " - ";
    updateDisplay(result);
    giveResult = false;
    pressedSubtract = true;
  }

  periodButton.disabled = false;
});

const multiplyButton = document.createElement("button");
multiplyButton.textContent = "*";
multiplyButton.addEventListener("click", () => {
  resultShown = false;

  if (!pressedOperator) {
    // update display
    pressedOperator = true;
    updateDisplay(" * ");
    pressedAdd = false;
    pressedSubtract = false;
    pressedMultiply = true;
    pressedDivide = false;
  } else {
    let result = operateBasedOnPreviousOp();
    result += " * ";
    updateDisplay(result);
    giveResult = false;
    pressedMultiply = true;
  }

  periodButton.disabled = false;
});

const divideButton = document.createElement("button");
divideButton.textContent = "/";
divideButton.addEventListener("click", () => {
  resultShown = false;

  if (!pressedOperator) {
    // update display
    pressedOperator = true;
    updateDisplay(" / ");
    pressedAdd = false;
    pressedSubtract = false;
    pressedMultiply = false;
    pressedDivide = true;
  } else {
    let result = operateBasedOnPreviousOp();
    result += " / ";
    updateDisplay(result);
    giveResult = false;
    pressedDivide = true;
  }

  periodButton.disabled = false;
});

const equalsButton = document.createElement("button");
equalsButton.textContent = "=";
equalsButton.addEventListener("click", () => {
  giveResult = true;
  resultShown = true;
  let result = matchAndOperate();
  firstNumber = result.toString();
  secondNumber = "";
  updateDisplay(result.toString());

  giveResult = false;
  pressedOperator = false;
  pressedPeriod = false;
  pressedAdd = false;
  pressedSubtract = false;
  pressedMultiply = false;
  pressedDivide = false;

  periodButton.disabled = false;
});

const backspaceButton = document.createElement("button");
backspaceButton.textContent = "BACKSPACE";
backspaceButton.addEventListener("click", () => {
  // starting from the second number, if not null/empty, remove the variables and change display
});

const clearButton = document.createElement("button");
clearButton.textContent = "CLEAR";
clearButton.addEventListener("click", () => {
  display.textContent = "";
  firstNumber = "";
  secondNumber = "";
  pressedOperator = false;
  pressedPeriod = false;
  giveResult = false;
  resultShown = false;
  pressedAdd = false;
  pressedSubtract = false;
  pressedMultiply = false;
  pressedDivide = false;
  periodButton.disabled = false;
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

document.body.appendChild(calculatorContainer);
