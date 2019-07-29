const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  bookCover: { type: String, required: true },
  published: { type: Date, required: true },
  added: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", schema);

module.exports = Book;
