/* ----------- DECLARE DOME ELEMENTS ----------- */
const DOM = document;
const firstNameInp = DOM.getElementById("first-name-input");
const lastNameInp = DOM.getElementById("last-name-input");
const emailInp = DOM.getElementById("email-input");
const passwordInput = DOM.getElementById("password-input");
const signupBtn = DOM.getElementById("signup-button");

let firstName = "";
let lastName = "";
let email = "";
let password = "";

const database = []; // ! our database

/* ----------- EVENT LISTENERS ----------- */

const callback = () => {
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
  emptyInputs();
};

const validInformation = (firstName, lastName, email, password) => {
  if (firstName.length <= 2) {
    alert("first name should have at least 2 carecters");
    return false;
  }
  if (lastName.length <= 2) {
    alert("last name should have at least 2 carecters");
    return false;
  }
  if (email.length <= 5) {
    alert("email should have at least 2 carecters");
    return false;
  }
  if (email.length <= 8) {
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

signupBtn.addEventListener("click", callback);
