exports.loginForm = function(req,res){
    res.send('login Forms Form works')
}


exports.login = function(req,res){
    res.send('login works')
}

exports.registerForm = function (req, res) {
  res.send("register Form Works");
}

exports.register = function(req,res){
    res.send('register works')
}

exports.logout = function(req,res){
    res.send('logout works')
}

exports.loginFormValidator = function(req,res,next){
    next()
}
exports.registerFormValidator = function(req,res,next){
    next()
}