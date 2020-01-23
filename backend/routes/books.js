const router = require('express').Router();
let Book = require('../models/book.model');

router.route('/').get((req,res) => {
  Book.find()
  .then(books => res.json(books))
  .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req,res) => {
  const username = req.body.username;
  const title = req.body.title;
  const author = req.body.author;
  const pages = req.body.pages;
  const date = req.body.date;
  const newBook = new Book({username,title,author,pages,date});

  newBook.save()
  .then(users => res.json('Book has been added'))
  .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').get((req,res) => {
  Book.findById(req.params.id).then(books => res.json(books)).catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req,res) => {
  Book.findByIdAndDelete(req.params.id).then(() => res.json('Book Deleted')).catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req,res) => {
  Book.findById(req.params.id).then(book => {
    book.title = req.body.title;
    book.author = req.body.author;
    book.pages = req.body.pages;
    book.date = req.body.date
    book.save().then(() => res.json('Successfully updated')).catch(err => res.status(400).json('Error: ' + err))
  });
});
module.exports = router;
