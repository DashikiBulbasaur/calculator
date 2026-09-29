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
  };
}

function operate(num1, operator, num2) {
  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    return "ERROR";
  }

  return matchOperation(num1, operator, num2);
}

function clear() {

}
