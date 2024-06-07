const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onClickForm);

function onClickForm(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (password === "" || email === "") {
    alert("All form fields must be filled in");
  } else {
    const formEl = {
      email: email,
      password: password,
    };
    console.log(formEl);
    loginForm.reset();
  }
}
