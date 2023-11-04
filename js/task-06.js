const textInput = document.querySelector("#validation-input");

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
textInput.addEventListener("blur", onInputBlur);
