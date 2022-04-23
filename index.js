const form = document.querySelector(".form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector(".free-trial-btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  //   first name validation
  if (firstName.value.trim() == "") {
    error(firstName, "first name can not be empty");
  } else {
    success(firstName);
  }

  //   last name validation
  if (lastName.value.trim() == "") {
    error(lastName, "last name can not be empty");
  } else {
    success(lastName);
  }

  //   Password validation
  if (password.value.trim() == "") {
    error(password, "Password can not be empty");
  } else {
    success(password);
  }

  //   Email validation
  if (email.value.trim() == "") {
    err(email, "looks like this is not an email");
  } else {
    success(email);
  }
});

function error(element, msg) {
  element.style.border = "3px hsl(0, 100%, 74%) solid";
  const parent = element.parentElement;
  const p = parent.querySelector("p");
  const x = parent.querySelector("img");
  const z = parent.querySelector("input");
  z.placeholder = "";
  x.style.display = "block";
  p.innerHTML = msg;
  p.style.color = "hsl(0, 100%, 74%)";
}

function success(element) {
  element.style.border = "3px hsl(154, 59%, 51%) solid";
}

function err(element, msg) {
  element.style.border = "3px hsl(0, 100%, 74%) solid";
  const parent = element.parentElement;
  const p = parent.querySelector("p");
  const x = parent.querySelector("img");
  const z = parent.querySelector("input");
  const y = (z.placeholder = "email@example/com");
  x.style.display = "block";
  p.innerHTML = msg;
  p.style.color = "hsl(0, 100%, 74%)";
  z.style.color = "hsl(0, 100%, 74%)";
}
