var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('interazione', { title: 'Interazione',nome:'Cristiano' });
  });

module.exports = router;