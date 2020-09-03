var http=require('http')
var app = require('./app')


var server=http.createServer(app)

var PORT=3000

server.listen(PORT,(req,res)=>{
    console.log('Server started at '+PORT)
})