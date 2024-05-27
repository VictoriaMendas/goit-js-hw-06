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
// console.log(btnCreate);
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
  const amount = input.value;
  destroyBoxes();

  createBoxes(amount);
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
function onDestroyBtn() {
  destroyBoxes();
}
btnDestroy.addEventListener("click", onDestroyBtn);
