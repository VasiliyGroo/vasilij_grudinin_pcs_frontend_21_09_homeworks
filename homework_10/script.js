'use strict';

let flagClickButton;
let flagEmailValid;
let flagPasswordValid;
let flagCheckboxValid;

const email = document.getElementById("email");
const passw = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const button = document.getElementById("btn");
let emailErrorHidden = document.getElementById("email-error");
let passwordErrorHidden = document.getElementById("password-error");
let checkboxErrorHidden = document.getElementById("checkbox-error");
let labelEmail = document.getElementById("label-email");
let starEmail = document.getElementById("star-email");
let labelPassword = document.getElementById("label-password");
let starPassword = document.getElementById("star-password");
let checkboxMark = document.getElementById("checkbox-mark");
let starCheckbox = document.getElementById("star-checkbox");
email.addEventListener("input", inputHandler);
passw.addEventListener("input", inputHandler);
checkbox.addEventListener("click", inputHandler);


button.addEventListener("click", (event) => {
  event.preventDefault();
  flagClickButton = true;
  inputHandler();
  printUserData(flagEmailValid, flagPasswordValid, flagCheckboxValid);
});

function inputHandler() {
  if (flagClickButton) {
    if (email.value === "") {
      setRed(
        emailErrorHidden,
        labelEmail,
        email,
        starEmail,
        "Поле обязательно для заполнения"
      );
    } else {
      UnSetRed(emailErrorHidden, labelEmail, email, starEmail);

      if (validateEmail(email.value) == false) {
        setRed(
          emailErrorHidden,
          labelEmail,
          email,
          starEmail,
          "Email невалидный"
        );
        flagEmailValid = false;
      } else {
        flagEmailValid = true;
      }
    };

    if (passw.value === "") {
      setRed(
        passwordErrorHidden,
        labelPassword,
        passw,
        starPassword,
        'Поле обязательно для заполнения'
      );

    } else {
      UnSetRed(passwordErrorHidden, labelPassword, passw, starPassword);
      if (!validatePassword(passw.value)) {
        setRed(
          passwordErrorHidden,
          labelPassword,
          passw,
          starPassword,
          'Пароль должен содержать как минимум 8 символов'
        );
        flagPasswordValid = false;
      } else {
        flagPasswordValid = true;
      }
    };

    if (!checkbox.checked) {
      setRedCheckbox(checkboxErrorHidden, checkboxMark, starCheckbox);
      flagCheckboxValid = false;
    } else {
      UnSetRedCheckbox(checkboxErrorHidden, checkboxMark, starCheckbox);
      flagCheckboxValid = true;
    }
  }
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function validatePassword(password) {
  if (password.length < 8) {
    return false;
  } else {
    return true;
  }
};

function printUserData(EmailValid, PasswordValid, CheckboxValid) {
  if (EmailValid === true && PasswordValid === true && CheckboxValid === true) {
    const dataUser = {
      email: email?.value,
      password: passw?.value,
    };
    console.log(dataUser);
    clearInputData();
  }
};

function clearInputData() {
  flagClickButton = false;
  email.value = '';
  passw.value = '';
  checkbox.checked = false;
};

function setRed(item1, item2, item3, item4, text) {
  item1.textContent = text;
  item1.hidden = false;
  item2.classList.add('color-text-error');
  item3.classList.add('color-border-error');
  item4.classList.add('color-text-error');
};

function UnSetRed(item1, item2, item3, item4) {
  item1.hidden = true;
  item2.classList.remove('color-text-error');
  item3.classList.remove('color-border-error');
  item4.classList.remove('color-text-error');
};

function setRedCheckbox(item1, item2, item3) {
  item1.hidden = false;
  item2.classList.add('color-border-error');
  item3.classList.add('color-text-error');
};

function UnSetRedCheckbox(item1, item2, item3) {
  item1.hidden = true;
  item2.classList.remove('color-border-error');
  item3.classList.remove('color-text-error');
};
