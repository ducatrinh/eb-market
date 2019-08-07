const { Router } = require('express')
const bcrypt = require('bcrypt')
const router = new Router()
const User = require('./model')

router.post('/user', (req, res, next ) => {
  console.log('req.body.password:', TEST)
  if(!req.body.password) {
    res.json('Put your password') 
      return "err"
   }
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  }
  User
    .create(user)
    .then( userResponse => res.json( userResponse ))
    .catch(next)
})

module.exports = router