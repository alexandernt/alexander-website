const bodyParser = require('body-parser');

exports.welcome = function (req, res, next) {
    userName = req.body.userSubsName
    res.render('welcome', {userName})
};