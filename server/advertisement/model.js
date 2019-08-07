const Sequelize = require('sequelize')
const db = require('../db')

const Advertisement = db.define(
  'ad',
  {
    url: Sequelize.STRING,
    title: Sequelize.STRING,
    email: Sequelize.STRING,
    price: Sequelize.INTEGER,
    description: Sequelize.STRING,
    phone: Sequelize.INTEGER
  }
)

module.exports = Advertisement