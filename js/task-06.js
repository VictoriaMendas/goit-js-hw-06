const input = document.querySelector("#validation-input");

input.addEventListener("blur", onClickInput);

function onClickInput(event) {
  const enteredLength = input.value.length;
  const inputLength = input.getAttribute("data-length");

  if (Number(inputLength) === enteredLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onOutput);

function onOutput(event) {
  const inputValue = event.target.value;
  console.log(event.currentTarget.dataset);
  const expectedLength = Number(inputEl.getAttribute("data-length"));

  if (inputValue.length === expectedLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}

/ /
/
/
/
/
/
/

/ const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputValue = event.currentTarget.value.length;
  const dataLengthValue = Number(event.currentTarget.dataset.length);

  if (inputValue === dataLengthValue) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
}
