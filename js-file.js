// The main variables

let currentInputs = "";
let secondInputs = "";
let previousInputs = "";
let operator = null;
let calculationCompleted = false;

let screen = document.querySelector(".screen");
let btnNumbers = document.querySelectorAll(".number");
let clearBtn = document.querySelector(".clear");
let percentageBtn = document.querySelector(".percentage");
let toggleBtn = document.querySelector(".toggle_num_type");
let operation = document.querySelectorAll(".operation");
let equalsTo = document.querySelector(".equals_to");
let decimalBtn = document.querySelector(".decimal");

// console.log(btnNumbers);
// console.log(operation);

// update screen content
const updateScreen = () => {
  screen.textContent = currentInputs;
};

//percentage
percentageBtn.addEventListener("click", () => {
  screen.textContent = screen.textContent / 100;
});

const makeNegativeOrPositiveNumber = () => {
  // Parse the current screen content as a float
  let currentValue = parseFloat(screen.textContent);

  // Negate the value
  currentValue = -currentValue;

  // Update the screen and currentInputs with the new value
  screen.textContent = currentValue.toString();
  currentInputs = currentValue.toString(); // Ensure currentInputs reflects the change
};

toggleBtn.addEventListener("click", makeNegativeOrPositiveNumber);

// clear screen content
clearBtn.addEventListener("click", () => {
  screen.textContent = 0;
  currentInputs = "";
  previousInputs = "";
  operator = null;
  decimalBtn.disabled = false;
  calculationCompleted = false;
});

//update screen content for currentInputs
btnNumbers.forEach((btnNumber) => {
  btnNumber.addEventListener("click", () => {
    if (calculationCompleted) {
      currentInputs = ""; // Clear the current input if coming off a calculation
      calculationCompleted = false; // Reset the flag
    }
    currentInputs += btnNumber.textContent;
    updateScreen();
  });
});

decimalBtn.addEventListener("click", () => {
  if (!currentInputs.includes(".")) {
    currentInputs += ".";
    updateScreen();
    decimalBtn.disabled = true;
  }
});

// reinitialize previousInputs and reset firstInput when an Operator is clicked
operation.forEach((operation) => {
  operation.addEventListener("click", () => {
    if (currentInputs !== "" && previousInputs !== "" && operator) {
      currentInputs = String(operate(previousInputs, currentInputs, operator));
      updateScreen();
      operator = operation.textContent;
      previousInputs = currentInputs;
      currentInputs = "";
      decimalBtn.disabled = false;
    } else if (currentInputs !== "") {
      operator = operation.textContent;
      previousInputs = currentInputs;
      currentInputs = "";
      decimalBtn.disabled = false;
    }
  });
});

// the main calculations
const operate = (a, b, arithmeticSign) => {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (arithmeticSign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return 0;
  }
};

const totals = () => {
  if (currentInputs !== "" && previousInputs !== "" && operator) {
    // currentInputs = operate(previousInputs, currentInputs, operator);
    const result = operate(previousInputs, currentInputs, operator);
    currentInputs = String(result);
    updateScreen();
    operator = null;
    previousInputs = "";
    calculationCompleted = true;
  }
};

equalsTo.addEventListener("click", () => {
  totals();
});
