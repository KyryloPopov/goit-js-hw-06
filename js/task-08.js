const formLogin = document.querySelector("form.login-form");
formLogin.addEventListener("submit", submitData);

let Users = [];

function submitData(event) {
  event.preventDefault();

  const newUser = {
    email: "",
    password: "",
  };

  const inputs = event.target.querySelectorAll("input");
  if (!validation(inputs)) {
    alert("Всі поля повинні бути заповнені!");
    return;
  }
  fillObject(newUser, inputs);
  Users.push(newUser);
  console.log(Users);
  event.target.reset();
}

function validation(inputs) {
  for (const input of inputs) {
    if (!input.value) {
      return false;
    }
  }
  return true;
}

function fillObject(obj, inputs) {
  inputs.forEach((input) => {
    obj[input.name] = input.value;
  });
}
