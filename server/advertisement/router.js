const { Router } = require('express')
const Advertisement = require('./model')
const router = new Router()

// Get all ads
router.get('/', (req, res, next) => {
  Advertisement
    .findAll()
    .then(ads => res.json(ads))
    .catch(next)
})

// Get detail of an ad
router.get('/:adId', (req, res, next) => {
  Advertisement
    .findByPk(req.params.adId)
    .then(ad => res.json(ad))
    .catch(next)
})

// POST ad to sell
router.post('/', (req, res, next) => {
  Advertisement
    .create(req.body)
    .then(ad => res.json(ad))
    .catch(next)
})

// PUT to edit ads to a certain user
router.put('/:adId', (req, res, next) => {
  Advertisement
    .findByPk(req.params.adId)
    .then(ad => {
      if (ad) {
        return ad.update(req.body)
          .then(ad => res.json(ad))
      }
      return res.status(404).end()
    })
    .catch(next)
})

// Delete an ad
router.delete('/:adId', (req, res, next) => {
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
