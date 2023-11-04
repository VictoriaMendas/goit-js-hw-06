const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
inputName.addEventListener("input", onInputName);
function onInputName(event) {
  console.log(event.currentTarget.value);
  outputName.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
}
// 1. Прочитати згачення яке пишимо в інпуті
// 2. Записати це згачення в спан.
// 3. Перед записом в спан перевірити значення якцо порожній рядок записати Anonymous
