const { Router } = require('express')
const Ads = require('../image/model')
const router = new Router()
const auth = require('../auth/middleware')


// Get all ads
router
  .get('/ads', ( req, res, next ) => {
  Ads
    .findAll()
    .then( adsResponse => res.json( adsResponse ))
    .catch(next)
})

// Get detail of an ads
router
  .get('/ads/:userId', ( req, res, next ) => {
  Ads
    .findByPk(req.params.userId)
    .then(adsResponse => {
      if (!adsResponse) {
        res.status(404).end()
      } else {
        res.json(adsResponse)
      }
    })
    .catch(next)
})

// POST ads to sell
router
  .post('/ads', auth, ( req, res, next ) => {
  Ads
    .create(req.body)
    .then( adsResponse => res.json( adsResponse ))
    .catch(next)
})

module.exports = router