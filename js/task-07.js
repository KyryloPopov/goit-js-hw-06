const slider = document.querySelector("input#font-size-control");
slider.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  const fontSize = event.target.value;
  const textSpan = document.querySelector("span#text");
  textSpan.style.fontSize = `${fontSize}px`;
}
