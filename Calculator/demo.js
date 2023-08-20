let currentInput = " ";
let currentOperator = " ";
let previousInput = " ";

function appendNumber(value) {
  currentInput += value;
  updateDisplay();
}

function add() {
  currentOperator = "+";
  previousInput = currentInput;
  currentInput = " ";
}

function calculate() {
  if (currentOperator === "+") {
    currentInput = (
      parseFloat(previousInput) + parseFloat(currentInput)
    ).toString();
  }

  currentOperator = " ";
  previousInput = " ";
  updateDisplay();
}

function clearDisplay() {
  currentInput = " ";
  currentInput = " ";
  previousInput = " ";
  updateDisplay();
}
function updateDisplay() {
  document.getElementById("display").innerText = currentInput || "0";
}
