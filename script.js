let display = document.getElementById("display");

// Menghapus semua input
function clearDisplay() {
  display.value = "0";
}

// Menambahkan angka
function appendNumber(number) {
  if (display.value === "0") {
    display.value = number;
  } else {
    display.value += number;
  }
}

// Menambahkan operator tanpa menghapus angka sebelumnya
function appendOperator(operator) {
  let lastChar = display.value.slice(-1);
  if (!["+", "-", "*", "÷"].includes(lastChar)) {
    display.value += operator;
  }
}

// Menghitung hasil perhitungan
function calculateResult() {
  try {
    let expression = display.value.replace("×", "*").replace("÷", "/");

    // Mengecek apakah ada pembagian dengan 0
    if (expression.includes("/0")) {
      display.value = "Error";
    } else {
      let result = eval(expression);
      display.value = result;
    }
  } catch {
    display.value = "Error";
  }
}

// Menghapus satu karakter dari input
function deleteLast() {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
}

// Menangani input dari keyboard
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (!isNaN(key) || key === ".") {
    appendNumber(key);
  } else if (["+", "-", "*", "/"].includes(key)) {
    appendOperator(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});


