const express = require('express')
const { createmessage } = require('../controllers/contact.controller')

const router = express.Router()
router.route('/contact').post(createmessage)
module.exports = router