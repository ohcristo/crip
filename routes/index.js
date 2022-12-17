var express = require('express');
var router = express.Router();
const users = require('../user.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Centro',nome:'Cristiano' });
});

router.get('/sign-in', function(req, res, next) {
  res.render('signin', { title: 'sign-in',nome:users.nome });
});

router.post('/sign-in', function(req, res, next) {
  let utero=req.body.uter;
  let passo=req.body.passuter;
  users[utero]["pass"]=passo;
  res.render('save',{utero:utero,passo:passo,title:'Salvataggio'});
});



module.exports = router;
