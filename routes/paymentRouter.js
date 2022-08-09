const router = require('express').Router()
const paymentControllers = require('../controllers/paymentControllers')
const auth = require("../middleware/auth")
const authAdmin = require('../middleware/authAdmin')


router.route('/payment')
    .get(auth, authAdmin, paymentControllers.getPayments)
    .post(auth, paymentControllers.createPayments)



    module.exports = router