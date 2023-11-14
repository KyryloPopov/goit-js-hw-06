let userName = "";
const inputField = document.querySelector("input#name-input");
inputField.addEventListener("input", nameRender);
function nameRender(event) {
  userName = event.target.value;
  const nameSpan = document.querySelector("span#name-output");
  if (userName !== "") {
    nameSpan.textContent = userName;
    return;
  }
  nameSpan.textContent = "Anonymous";
  return;
}
