var mongoose = require('mongoose')


exports.connection  = function(){
mongoose.connect(
  "mongodb://localhost:27018/taskManager",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (!err) {
      console.log("DB Connected!");
    }
  }
)
}
