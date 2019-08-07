const Sequelize = require('sequelize')
const db = require('../db')

const Advertisement = db.define(
  'ad',
  {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.FLOAT,
    url: Sequelize.STRING,
    email: Sequelize.STRING,
    phoneNumber: Sequelize.STRING
  }
)

module.exports = Advertisement