const { Router } = require('express')
const bcrypt = require('bcrypt')
const router = new Router()
const User = require('./model')

router.post('/user', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(userAccount => {
      if (userAccount) {
        res.status(409).send({
          message: "This email was already used to register. Please choose another email to sign up."
        })
      }
      else {
        const user = {
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10),
          role: req.body.role === 'admin' ? 'admin' : 'user'
        }

        User
          .create(user)
          .then(userAccount => res.json(userAccount))
          .catch(next)
      }
    })
})

router.get('/user', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next)
})

router.get('/user/:userId/', (req, res, next) => {
  User
    .findByPk(req.params.userId)
    .then(user => res.json(user))
    .catch(next)
})

router.put('/user/:userId', (req, res, next) => {
  User.findByPk(req.params.userId)
    .then(user => user.update(req.body))
    .then(user => res.json(user))
    .catch(next)
})

router.delete('/user/:userId', (req, res, next) => {
  User.destroy({ where: { id: req.params.userId } })
    .then(numDeleted => {
      if (numDeleted) {
        return res.status(204).end()
      }
      else {
        return res.status(404).end()
      }
    })
    .catch(next)
})

module.exports = router