let display = document.getElementById("display");

// Add number to display
function appendNumber(number) {
  // Prevent multiple decimal points
  const lastChar = display.value.slice(-1);
  if (number === '.' && lastChar === '.') return;

  display.value += number;
}

// Add operator (+ - * /)
function appendOperator(operator) {
  const lastChar = display.value.slice(-1);

  // Prevent operator as first character
  if (display.value === '') return;

  // Prevent consecutive operators
  if ("+-*/".includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

// Clear entire display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    let result = eval(display.value);
    if (result === Infinity || isNaN(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch {
    display.value = "Error";
  }
}

// Square root function
function squareRoot() {
  try {
    let result = Math.sqrt(eval(display.value));
    if (isNaN(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch {
    display.value = "Error";
  }
}

// Percentage function
function percentage() {
  try {
    let result = eval(display.value) / 100;
    if (isNaN(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch {
    display.value = "Error";
  }
}

// Keyboard input support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendKeyInput(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});

// Handle keyboard input safely
function appendKeyInput(key) {
  const lastChar = display.value.slice(-1);

  if (key === '.') {
    if (lastChar === '.') return;
  }

  if ("+-*/".includes(key)) {
    if (display.value === '') return;
    if ("+-*/".includes(lastChar)) {
      display.value = display.value.slice(0, -1) + key;
      return;
    }
  }

  display.value += key;
}
