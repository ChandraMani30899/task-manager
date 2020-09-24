var Task = require("../models/Task");


exports.getTask = (req, res) => {
  Task.find().then(function (tasks) {
    res.render("tasks/index", {
      taskItems: tasks,
    });
  });
};


exports.addTask = (req, res) => {
         var error=req.session.errorMsg
         req.session.errorMsg=''
  res.render("tasks/add",{
    errorMsg:error
  });
};

exports.storeTask = (req,res)=>{
title=req.body.title
description=req.body.description

var task=new Task()

task.title=title
task.description=description

task.save().then(function(){
    res.redirect('/tasks')
})
}

exports.deleteTask = (req,res)=>{
    var id=req.params.id
    Task.findOneAndRemove({_id:id}).then(function(){
       res.redirect('/tasks')
      
    })   
}

exports.updateStatus = (req,res)=>{
  var id= req.params.id
      
  Task.findById(id).then(function(data){
        data.Completed=!data.Completed
         data.save().then(function(){
           res.redirect('/tasks')
         })

  })
}


/*******validorts**** */

exports.taskValidation = function(req,res,next){
   
    var title = req.body.title
    if(title == '')
    {req.session.errorMsg = 'Title Cannot Be blank'
      res.redirect('/tasks/add')
    }
    else{
      next()
    }
}