const inputField = document.querySelector("input#validation-input");
inputField.addEventListener("blur", fieldValidation);

function fieldValidation(event) {
  const neededLength = Number(event.target.dataset.length);
  const targetLength = event.target.value.length;
  if (neededLength === targetLength) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
    return;
  }
  event.target.classList.remove("valid");
  event.target.classList.add("invalid");
}
