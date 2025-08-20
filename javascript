let display = document.getElementById("display");
let history = document.getElementById("history");

function appendValue(value) {
  display.value += value;
}
function clearDisplay() {
  display.value = "";
  history.innerText = "";
}
function deleteLast() {
  display.value = display.value.slice(0, -1);
}
function calculate() {
  try {
    let expression = display.value;
    let result = eval(expression); // 👈 evaluates the math
    history.innerText = expression + " =";
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}



