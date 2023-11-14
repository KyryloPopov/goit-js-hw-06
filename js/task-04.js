let counterValue = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", renderValue);
});

function renderValue(event) {
  const action = event.target.dataset.action;
  const value = document.querySelector("span#value");
  if (action === "decrement") {
    counterValue--;
    value.textContent = counterValue;
    return;
  }
  counterValue++;
  value.textContent = counterValue;
  return;
}
