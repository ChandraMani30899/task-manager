var Task = require("../models/Task");


exports.getTask = (req, res) => {
  Task.find().then(function (tasks) {
    res.render("tasks/index", {
      taskItems: tasks,
    });
  });
};


exports.addTask = (req, res) => {
  res.render("tasks/add");
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
    Task.findOneAndRemove(id).then(function(){
       res.redirect('/tasks')
    })   
}

