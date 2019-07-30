const router = require("express").Router();
const bcrypt = require("bcryptjs");
const regValidate = require("../cofig/validate/regValidate");
const bookValidate = require("../cofig/validate/bookValidate");
const User = require("../models/User");
const Book = require("../models/Book");

router.post("/auth/register", (req, res) => {
  const { errors, isValid } = regValidate(req.body);
  if (!isValid) return res.status(401).json(errors);

  const { email, password } = req.body;
  User.findOne({ email }).then(user => {
    if (user) return res.status(401).json({ error: "Email is already taken" });

    const newUser = new User({
      email,
      password
    });
    console.log(newUser);

    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
});

router.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).then(user => {
    bcrypt
      .compare(password, user.password)
      .then(valid => {
        if (!valid)
          return res.status(400).json({ error: "Password is incorrect" });
        return res.status(200).json(user);
      })
      .catch(err => console.error(err));
  });
});

router.post("/add/book", (req, res) => {
  const { errors, isValid } = bookValidate(req.body);
  if (!isValid) return res.status(401).json(errors);
  Book.findOne({ title: req.body.title })
    .then(item => {
      if (item)
        return res.status(401).json({ error: "Book is already listed" });

      const { title, author, description, bookCover, published } = req.body;
      const newBook = new Book({
        title,
        author,
        description,
        bookCover,
        published
      });

      newBook
        .save()
        .then(book => res.json(book))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

module.exports = router;
