const input = document.getElementById("input");
const buttons = document.querySelectorAll("#calculator button");

let result;
let op;
let opPending;

buttons.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    const inputValue = Number(input.value);

    if (!result) {
      op = evt.target.dataset.operation;
      opPending = true;
      result = inputValue;
      return;
    }
    if (opPending) {
      if (op === "+") {
        result += inputValue;
      }
      if (op === "-") {
        result -= inputValue;
      }
      if (op === "*") {
        result *= inputValue;
      }
      if (op === "/") {
        result /= inputValue;
      }
      if (op === "AC") {
      result = null;
      input.value = result;
      }
      input.value = result;
    }
    if (op === "=") {
      opPending = false;
      return;
    } else {
      result = 0;
      opPending = true;
    }
    op = evt.target.dataset.operation;
  });
});