var mongoose=require('mongoose')

var TaskSchema=new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String},
    Completed:{type:Boolean,default:false}
},{
    timestamps:true
})

module.exports = mongoose.model('Task',TaskSchema)