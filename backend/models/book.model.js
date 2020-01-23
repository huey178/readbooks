const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  title: {
    type: String,
    minlength: 3,
    required: true

},
  author: {
    type: String,
    minlength: 3,
    required: true
  },
  pages: {
    type: Number,
    minlength: 1,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
  },
  {
    timestamps: true
  }
);

const Book = mongoose.model('Book', bookSchema);


  module.exports = Book;
