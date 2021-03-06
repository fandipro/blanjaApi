const express = require('express')
const router = express.Router()
const categoryRoute = require('./category')
const productRoute = require('./product')
const userRoute = require('./users')
const orderRoute = require('./order_details')

router
  .use('/category', categoryRoute)
  .use('/products', productRoute)
  .use('/users', userRoute)
  .use('/transaction', orderRoute)

module.exports = router
