const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) => {
  User.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error ' + err))
});

router.route('/add').post((req,res) => {
  const username = req.body.username;
  const newUser = new User({username});

  newUser.save()
  .then(() => res.json('User Added'))
  .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req,res) => {
  User.findByIdAndDelte(req.params.id).then(()=> 'User has been deleted').catch(err => 'Error: ' + err);
});

router.route('/:id').get((req,res) =>{
  User.findById(req.params.id).then(user => res.json(user)).catch(err => 'Error: ' + err);
});

module.exports = router;
