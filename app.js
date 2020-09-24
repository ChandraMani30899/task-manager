var express=require('express')
var bodyParser=require('body-parser')
var taskRouter = require('./routes/tasks')
var dashboardRouter = require('./routes/dashboard')
var authRouter = require('./routes/auth')
var db=require('./helpers/database')
var session = require('express-session')



var app = express()
db.connection()



app.use(session({
    secret:'abcd1234',
    cookie:{},
    resave:false,
    saveUninitialized:true
}))

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.redirect('/dashboard')
    //res.send('<h1>Home
})

app.use('/',authRouter)
app.use('/tasks',taskRouter)
app.use('/dashboard',dashboardRouter)



module.exports = app