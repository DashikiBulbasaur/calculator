// we will keep the numbers as strings, and convert when it's time to operate
let firstNumber = "";
let secondNumber = "";
let resultNumber = "";
let pressedOperator = false;
let pressedPeriod = false;
let giveResult = true;
let whichOperator = {
  add: [false, "add"],
  subtract: [false, "subtract"],
  multiply: [false, "multiply"],
  divide: [false, "divide"],
};

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

function matchOperation(operator) {
  switch (operator) {
    case "add":
      return add(firstNumber, secondNumber);
    case "subract":
      return subtract(firstNumber, secondNumber);
    case "multiply":
      return multiply(firstNumber, secondNumber);
    case "divide":
      return divide(firstNumber, secondNumber);
    default:
      return "ERROR";
  }
}

function operate(operator) {
  if (!Number.isFinite(parseInt(firstNumber)) || !Number.isFinite(parseInt(secondNumber))) {
    return "ERROR";
  }

  return matchOperation(operator);
}

function updateDisplay(variable) {
  // far todo: make a separate line above that shows the result, or the result + operator
  // example:
  // numpad: 183 + 1 + 2
  // main: 2
  // sub top: 184 +, after pressing the second operator
  //
  // numpad: 183 + 1 =
  // main: 184
  // top: none
  //
  // numpad: 183 + 1 = + 2
  // main: 2
  // top: 184 +
  if (giveResult) {
    display.textContent = variable;
  } else if (pressedOperator) {
    display.textContent += variable;
  } else {
    display.textContent += ` ${variable} `;
  }
}

function backspace() {}

const display = document.createElement("div");
display.classList.add("display");
display.textContent = "1 + 2";

const oneButton = document.createElement("button");
oneButton.textContent = "1";
oneButton.addEventListener("click", () => {
  if (!pressedOperator) {
    firstNumber += "1";
  } else {
    secondNumber += "1";
  }

  updateDisplay("1");
});

const twoButton = document.createElement("button");
twoButton.textContent = "2";
twoButton.addEventListener("click", () => {
  if (!pressedOperator) {
    firstNumber += "2";
  } else {
    secondNumber += "2";
  }

  updateDisplay("2");
});

const threeButton = document.createElement("button");
threeButton.textContent = "3";
threeButton.addEventListener("click", () => {
  if (!pressedOperator) {
    firstNumber += "3";
  } else {
    secondNumber += "3";
  }

  updateDisplay("3");
});

const fourButton = document.createElement("button");
fourButton.textContent = "4";
fourButton.addEventListener("click", () => {
  if (!pressedOperator) {
    firstNumber += "4";
  } else {
    secondNumber += "4";
  }

  updateDisplay("4");
});

const fiveButton = document.createElement("button");
fiveButton.textContent = "5";
fiveButton.addEventListener("click", () => {
  if (!pressedOperator) {
    firstNumber += "5";
  } else {
    secondNumber += "5";
  }

  updateDisplay("5");
});

const sixButton = document.createElement("button");
sixButton.textContent = "6";
sixButton.addEventListener("click", () => {
  if (!pressedOperator) {
    firstNumber += "6";
  } else {
    secondNumber += "6";
  }

  updateDisplay("6");
});

const sevenButton = document.createElement("button");
sevenButton.textContent = "7";
sevenButton.addEventListener("click", () => {
  if (!pressedOperator) {
    firstNumber += "7";
  } else {
    secondNumber += "7";
  }

  updateDisplay("7");
});

const eightButton = document.createElement("button");
eightButton.textContent = "8";
eightButton.addEventListener("click", () => {
  if (!pressedOperator) {
    firstNumber += "8";
  } else {
    secondNumber += "8";
  }

  updateDisplay("8");
});

const nineButton = document.createElement("button");
nineButton.textContent = "9";
nineButton.addEventListener("click", () => {
  if (!pressedOperator) {
    firstNumber += "9";
  } else {
    secondNumber += "9";
  }

  updateDisplay("9");
});

const zeroButton = document.createElement("button");
zeroButton.textContent = "0";
zeroButton.addEventListener("click", () => {
  if (!pressedOperator) {
    firstNumber += "0";
  } else {
    secondNumber += "0";
  }

  updateDisplay("0");
});

const periodButton = document.createElement("button");
periodButton.textContent = ".";
periodButton.addEventListener("click", () => {
  // disable after one period is already done, and reactivate once an operator/result is clicked
  if (!pressedOperator) {
    firstNumber += ".";
  } else {
    secondNumber += ".";
  }

  updateDisplay(".");
});

const addButton = document.createElement("button");
addButton.textContent = "+";
addButton.addEventListener("click", () => {
  if (!pressedOperator) {
    // update display
    pressedOperator = true;
    updateDisplay("+ ");
    whichOperator.add[0] = true;
  } else {
    // do operation
    giveResult = true;
    Object.keys(whichOperator).forEach((operator) => {
      whichOperator[operator][0] = false;
    });
    let result = operate("add");
    firstNumber = result.toString();
    secondNumber = "";
    result = result.toString();
    updateDisplay(result + " + ");
    pressedOperator = true;
    giveResult = false;
  }
});

const subtractButton = document.createElement("button");
subtractButton.textContent = "-";
subtractButton.addEventListener("click", () => {
  if (!pressedOperator) {
    // update display
    pressedOperator = true;
    updateDisplay("- ");
    whichOperator.subtract[0] = true;
  } else {
    // do operation
    giveResult = true;
    Object.keys(whichOperator).forEach((operator) => {
      whichOperator[operator][0] = false;
    });
    let result = operate("subtract");
    firstNumber = result.toString();
    secondNumber = "";
    result = result.toString();
    updateDisplay(result + " - ");
    pressedOperator = true;
    giveResult = false;
  }
});

const multiplyButton = document.createElement("button");
multiplyButton.textContent = "*";
multiplyButton.addEventListener("click", () => {
  if (!pressedOperator) {
    // update display
    pressedOperator = true;
    updateDisplay("* ");
    whichOperator.multiply[0] = true;
  } else {
    // do operation
    giveResult = true;
    Object.keys(whichOperator).forEach((operator) => {
      whichOperator[operator][0] = false;
    });
    let result = operate("multiply");
    firstNumber = result.toString();
    secondNumber = "";
    result = result.toString();
    updateDisplay(result + " * ");
    pressedOperator = true;
    giveResult = false;
  }
});

const divideButton = document.createElement("button");
divideButton.textContent = "/";
divideButton.addEventListener("click", () => {
  if (!pressedOperator) {
    // update display
    pressedOperator = true;
    updateDisplay("/ ");
    whichOperator.divide[0] = true;
  } else {
    // do operation
    giveResult = true;
    Object.keys(whichOperator).forEach((operator) => {
      whichOperator[operator][0] = false;
    });
    let result = operate("divide");
    firstNumber = result.toString();
    secondNumber = "";
    result = result.toString();
    updateDisplay(result + " / ");
    pressedOperator = true;
    giveResult = false;
  }
});

const equalsButton = document.createElement("button");
equalsButton.textContent = "=";
equalsButton.addEventListener("click", () => {
  // check to see which operation to do, then turn every operator to false, then do operation and display
  let operation = Object.keys(whichOperator).find((key) => {
    whichOperator[key] === true;
  });

  giveResult = true;
  pressedOperator = false;
  pressedPeriod = false;
  updateDisplay(operate(operation).toString());

  Object.keys(whichOperator).forEach((operator) => {
    whichOperator[operator] = false;
  });

  giveResult = false;
});

const backspaceButton = document.createElement("button");
backspaceButton.textContent = "BACKSPACE";
backspaceButton.addEventListener("click", () => {
  // starting from the second number, if not null/empty, remove the variables and change display
});

const clearButton = document.createElement("button");
clearButton.textContent = "CLEAR";
clearButton.addEventListener("click", () => {
  // !giveResult
  display.textContent = "";
  firstNumber = "";
  secondNumber = "";
  pressedOperator = false;
  giveResult = false;
  pressedPeriod = false;
  Object.keys(whichOperator).forEach((operator) => {
    whichOperator[operator] = false;
  });
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
