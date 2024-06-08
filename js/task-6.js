function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const contols = document.querySelector("controls");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

function createBoxes(amount) {
  let size = 30;
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    const color = getRandomHexColor();
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = `${color}`;
    elements.push(divEl);
    size += 10;
  }
  boxes.append(...elements);
}

btnCreate.addEventListener("click", onCreateBtn);

function onCreateBtn() {
  const amount = parseInt(input.value, 10);
  destroyBoxes();

  if (!isNaN(amount) && amount > 0 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
function onDestroyBtn() {
  destroyBoxes();
}
btnDestroy.addEventListener("click", onDestroyBtn);
