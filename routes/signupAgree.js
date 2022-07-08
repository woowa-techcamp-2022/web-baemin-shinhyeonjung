var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('signupAgree');
});

module.exports = router;
