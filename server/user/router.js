const { Router } = require('express')
const bcrypt = require('bcrypt')
const router = new Router()
const User = require('./model')

router.post('/user', (req, res, next ) => {
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

// GET to get ads of a certain user
router.get('/user/:userId/ads', (req, res, next) => {
  User
    .findByPk(req.params.userId)
    .then(user => {
      if (!user) {
        res.status(404).end()
      } else {
        res.json(user)
      }
    })
    .catch(next)
})
module.exports = router