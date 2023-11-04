const changeColorButton = document.querySelector(".change-color");
const outputSpan = document.querySelector(".color");
changeColorButton.addEventListener("click", onChangeColorButtonClick);
function onChangeColorButtonClick(event) {
  const color = getRandomHexColor();
  console.log(color);
  document.body.style.backgroundColor = color;
  outputSpan.textContent = color;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
