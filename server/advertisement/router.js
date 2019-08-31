const { Router } = require('express')
const Advertisement = require('./model')
const auth = require('../auth/middleware')
const router = new Router()

router.get('/ad', (req, res, next) => {
  Advertisement
    .findAll()
    .then(ads => res.json(ads))
    .catch(next)
})

router.get('/ad/:adId', (req, res, next) => {
  Advertisement
    .findByPk(req.params.adId)
    .then(ad => res.json(ad))
    .catch(next)
})

router.post('/ad', auth, (req, res, next) => {
  Advertisement
    .create(req.body)
    .then(ad => res.json(ad))
    .catch(next)
})

router.put('/ad/:adId', auth, (req, res, next) => {
  Advertisement
    .findByPk(req.params.adId)
    .then(ad => ad.update(req.body))
    .then(ad => res.json(ad))
    .catch(next)
})

router.delete('/ad/:adId', auth, (req, res, next) => {
  Advertisement
    .destroy({
      where: {
        id: req.params.adId
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
