var express=require('express')
var taskRouter = require('./routes/tasks')
var dashboardRouter = require('./routes/dashboard')

var app = express()



app.set('view engine','ejs')

app.get('/', (req, res) => {
    res.redirect('/dashboard')
    //res.send('<h1>Home</h1>')
})


app.use('/tasks',taskRouter)
app.use('/dashboard',dashboardRouter)






module.exports = app
