var Task=require('../models/Task')
exports.getDashboard = (req, res) => {
  Task.find()
    .countDocuments()
    .then(function (totalTask) {
      Task.find({ Completed: true })
        .countDocuments()
        .then(function (CompletedTask) {
          res.render("dashboard/index", {
            tasks: totalTask,
            Completed: CompletedTask,
          });
        });
    });
};