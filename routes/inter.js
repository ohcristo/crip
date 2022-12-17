var express = require('express');
var router = express.Router();

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({uploadDir: './uploads'});

router.get('/', function(req, res, next) {
    res.render('interazione', { title: 'Interazione',nome:'Cristiano' });
  });

router.post('/test', function(req, res, next) {
  let nomeutente = req.body.Username
  res.render('test', { title: 'test',nome:'Cristiano' , cibo:'cioccolato',utente: nomeutente});
}); 

router.get('/inport', function(req, res, next) {
  res.render('inport', { title: 'Inport',nome:'Cristiano' });
});

router.post('/inport',multipartMiddleware, function(req, res, next) {
  res.send('<h2>File caricato</h2>')
});

module.exports = router;