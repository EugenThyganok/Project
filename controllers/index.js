var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/admin');
});

module.exports = router;

//res.render('index', { title: 'Express' });
//
/*https://stackoverflow.com/questions/32707322/how-to-make-a-handlebars-helper-global-in-expressjs/42224612#42224612*/