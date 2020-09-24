var express = require('express')
var router = express.Router()
var TaskController = require('../Controllers/TaskController') 



router.get('/', TaskController.getTask)

router.get('/add', TaskController.addTask)

router.get('/delete/:id',TaskController.deleteTask)

router.get('/status/:id',TaskController.updateStatus)

router.post('/store',[TaskController.taskValidation,TaskController.storeTask])

module.exports = router