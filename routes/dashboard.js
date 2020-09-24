var express = require('express')
var router = express.Router()
var DashboardController = require('../Controllers/DashboardController')

router.get('/',DashboardController.getDashboard)

module.exports = router