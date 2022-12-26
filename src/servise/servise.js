const express = require('express')
const router = express.Router()

const customerController = require('../customer API/customerController')

const cardController = require('../cart API/cartController')

const middleware = require('../Middleware/auth')

router.post('/Customer', customerController.createCustomer)

router.post('/login', customerController.login)

router.get('/Customer', customerController.findCustomer)

router.delete('/Customer/:customerId/Delete', middleware.authentication, middleware.authorisation, customerController.delete)

router.post('/Card',cardController.createCard)

router.get('/Card',cardController.list)



module.exports = router