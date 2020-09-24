var express = require('express')
var router = express.Router()

var AuthController = require('../Controllers/AuthController')



router.get('/login',AuthController.loginForm)
router.post('/login',[AuthController.loginFormValidator,AuthController.login])
router.get('/register',AuthController.registerForm)
router.post('/register',[AuthController.registerFormValidator,AuthController.register])
router.get('/logout',AuthController.logout)


module.exports  = router