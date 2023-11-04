const output = document.querySelector("#value");
const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");

decrementButton.addEventListener("click", onDescrementBtnClick);
incrementButton.addEventListener("click", onIncrementBtnClick);
let counterValue = 0;
function onDescrementBtnClick() {
  counterValue -= 1;
  output.textContent = counterValue;
}
function onIncrementBtnClick() {
  counterValue += 1;
  output.textContent = counterValue;
}
