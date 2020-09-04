var express = require('express')
var router = express.Router()

router.get('/', (req, res)=> {
 
     res.render('tasks/index')
})

router.get('/add', (req, res)=>{
    res.render('tasks/add')
})


module.exports = router