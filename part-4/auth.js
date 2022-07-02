/* ----------- DECLARE DOME ELEMENTS ----------- */
const DOM = document;
const firstNameInp = DOM.getElementById("first-name-input");
const lastNameInp = DOM.getElementById("last-name-input");
const emailInp = DOM.getElementById("email-input");
const passwordInput = DOM.getElementById("password-input");
const emailInpLogin = DOM.getElementById("email-input-login");
const passwordInputLogin = DOM.getElementById("password-input-login");
const signupBtn = DOM.getElementById("signup-button");
const loginBtn = DOM.getElementById("button-login");

let firstName = "";
let lastName = "";
let email = "";
let password = "";

const database = JSON.parse(localStorage.getItem("database")) || []; // ! if null => []

console.log(database);

/* ----------- EVENT LISTENERS ----------- */

const signupCallback = () => {
  firstName = firstNameInp.value;
  lastName = lastNameInp.value;
  email = emailInp.value;
  password = passwordInput.value;

  // VALIDATION
  const validationResult = validInformation(
    firstName,
    lastName,
    email,
    password
  );

  if (validationResult === false) {
    return; // ! Exit function if validation fails
  }

  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password, // ES6 😍
  };

  database.push(user);
  localStorage.setItem("database", JSON.stringify(database));
  emptyInputs();
};

const loginCallBack = () => {
  email = emailInpLogin.value;
  password = passwordInputLogin.value;
  const validationResult = validInformation(
    undefined,
    undefined,
    email,
    password
  );
  if (validationResult === false) {
    return;
  }
  const user = {
    email,
    password,
  };
  checkDatabase(user);
};

function checkDatabase(user) {
  const isFound = database.find((u) => u.email === user.email);
  if (isFound === undefined) {
    return alert("user doesn't exist");
  }
  database.forEach((u) => {
    if (u.email === user.email) {
      if (u.password === user.password) {
        alert("You can enter");
      } else {
        alert("wrong password");
      }
    }
  });
}

const validInformation = (firstName, lastName, email, password) => {
  if (firstName !== undefined && firstName.length <= 2) {
    alert("first name should have at least 2 carecters");
    return false;
  }
  if (lastName !== undefined && lastName.length <= 2) {
    alert("last name should have at least 2 carecters");
    return false;
  }
  if (email.length < 5) {
    alert("email should have at least 5 carecters");
    return false;
  }
  if (password.length <= 8) {
    alert("password should have at least 8 carecters");
    return false;
  }
  return true;
};

const emptyInputs = function () {
  firstNameInp.value = "";
  lastNameInp.value = "";
  emailInp.value = "";
  passwordInput.value = "";
};

if (signupBtn !== null) {
  signupBtn.addEventListener("click", signupCallback);
}
if (loginBtn !== null) {
  loginBtn.addEventListener("click", loginCallBack);
}
