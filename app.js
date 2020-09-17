var express=require('express')
var bodyParser=require('body-parser')
var taskRouter = require('./routes/tasks')
var dashboardRouter = require('./routes/dashboard')
var db=require('./helpers/database')

db.connection();
var app = express()



app.set('view engine','ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.redirect('/dashboard')
    //res.send('<h1>Home</h1>')
})



app.use('/tasks',taskRouter)
app.use('/dashboard',dashboardRouter)



module.exports = app