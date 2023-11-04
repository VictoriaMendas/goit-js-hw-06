const formOfLogin = document.querySelector(".login-form");
formOfLogin.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  if (
    formOfLogin.elements.password.value === "" ||
    formOfLogin.elements.email.value === ""
  ) {
    return alert("Enter letters in stroke");
  }
  console.log({
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  });
  event.currentTarget.reset();
}

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password },
//   } = event.currentTarget;

//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login}, Password: ${password}`);
//   event.currentTarget.reset();
// }
