const fontSizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

fontSizeControl.addEventListener("input", onClickInput);

spanText.style.fontSize = `${fontSizeControl.value}px`;
fontSizeControl.value = +spanText.style.fontSize;

function onClickInput(event) {
  const fontSize = event.currentTarget.value;

  spanText.style.fontSize = `${fontSize}px`;
}

const textSize = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

textElement.style.fontSize = `${textSize.value}px`;
function onClick(event) {
  const fontSize = textSize.value + "px";
  textElement.style.fontSize = fontSize;
}
textSize.addEventListener("input", onClick);
