const validator = require("validator");
const isEmpty = require("is-empty");

const registerValidate = data => {
  let errors = {};
  let { title, author, description, bookCover, published } = data;

  title = !isEmpty(title) ? title : "";
  author = !isEmpty(author) ? author : "";
  description = !isEmpty(description) ? description : "";
  bookCover = !isEmpty(bookCover) ? bookCover : "";
  published = !isEmpty(published) ? published : "";

  if (validator.isEmpty(title)) {
    errors.title = "Field is required";
  } else if (!validator.isLength(title, { min: 3 })) {
    errors.title = "Title must be longer than 3 characters";
  }

  if (validator.isEmpty(author)) {
    errors.author = "Field is required";
  } else if (!validator.isLength(author, { min: 3 }))
    errors.author = "Author must be longer than 3 characters";

  if (validator.isEmpty(description)) {
    errors.description = "Field is required";
  } else if (!validator.isLength(description, { min: 10 })) {
    errors.description = "Description must be longer than 10 charcters";
  }

  if (validator.isEmpty(bookCover)) {
    errors.bookCover = "Field is required";
  }

  if (validator.isEmpty(published)) {
    errors.published = "Field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = registerValidate;
