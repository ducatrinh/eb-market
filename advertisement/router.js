const { Router } = require('express')
const Advertisement = require('./model')
const auth = require('../auth/middleware')
const router = new Router()

router.get('/api/ebad', (req, res, next) => {
  Advertisement
    .findAll()
    .then(ads => res.json(ads))
    .catch(next)
})

router.get('/api/ebad/:id', (req, res, next) => {
  Advertisement
    .findByPk(req.params.id)
    .then(ad => res.json(ad))
    .catch(next)
})

router.post('/api/ebad', auth, (req, res, next) => {
  Advertisement
    .create(req.body)
    .then(ad => res.json(ad))
    .catch(next)
})

router.put('/api/ebad/:id', auth, (req, res, next) => {
  Advertisement
    .findByPk(req.params.id)
    .then(ad => ad.update(req.body))
    .then(ad => res.json(ad))
    .catch(next)
})

router.delete('/api/ebad/:id', auth, (req, res, next) => {
  Advertisement
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(numDeleted => {
      if (numDeleted) {
        return res.status(204).end()
      }
      return res.status(404).end()
    })
    .catch(next)
})

module.exports = router
