let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("result").value = currentNumber;
}

function selectOperator(op) {
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("result").value = "";
}

function calculate() {
  let result = "";
  let a = parseFloat(previousNumber);
  let b = parseFloat(currentNumber);

  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    if (b === 0) {
      alert("Error: Division by zero!");
    } else {
      result = a / b;
    }
  }

  currentNumber = result.toString();
  document.getElementById("result").value = currentNumber;
}