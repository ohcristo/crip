var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('interazione', { title: 'Interazione',nome:'Cristiano' });
  });

router.post('/test', function(req, res, next) {
  let nomeutente = req.body.Username
  res.render('test', { title: 'test',nome:'Cristiano' , cibo:'cioccolato',utente: nomeutente});
}); 

module.exports = router;