const validator = require("validator");
const isEmpty = require("is-empty");

const registerValidate = data => {
  let errors = {};
  let { email, password, password2 } = data;

  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password : "";
  password2 = !isEmpty(password2) ? password2 : "";

  //Email
  if (validator.isEmpty(email)) {
    errors.email = "Field is required";
  } else if (!validator.isEmail(email)) {
    errors.email = "Email is invalid";
  }

  //Password
  if (validator.isEmpty(password)) {
    errors.password = "Field is required";
  } else if (!validator.isLength(password, { min: 6 })) {
    errors.password = "Password must be greater than 6 characters";
  }

  //Confirm password
  if (validator.isEmpty(password2)) {
    errors.password2 = "Field is required";
  } else if (!validator.equals(password, password2)) {
    errors.password2 = "Passwords dont match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = registerValidate;
