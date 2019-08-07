const Sequelize = require('sequelize')
const db = require('../db')

const Advertisement = db.define(
  'ad',
  {
    title: Sequelize.STRING,
    price: Sequelize.INTEGER
  }
)

module.exports = Advertisement