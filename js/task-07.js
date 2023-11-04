const textSize = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

textElement.style.fontSize = `${textSize.value}px`;
function onClick(event) {
  const fontSize = textSize.value + "px";
  textElement.style.fontSize = fontSize;
}
textSize.addEventListener("input", onClick);
