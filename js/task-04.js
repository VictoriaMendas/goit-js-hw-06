const buttonDec = document.querySelector("[data-action = 'decrement']");
const buttonInc = document.querySelector("[data-action = 'increment']");
const spanValue = document.querySelector("#value");

let counterValue = 0;
buttonDec.addEventListener("click", onClickDecrement);
buttonInc.addEventListener("click", onClickIncrement);

function onClickDecrement() {
  counterValue -= 1;
  spanValue.textContent = counterValue;
  console.log(counterValue);
}

function onClickIncrement() {
  counterValue += 1;
  spanValue.textContent = counterValue;
  console.log(counterValue);
}

// const [decrement, value, increment] =
//   document.querySelector("#counter").children;
// console.log(decrement.children);
