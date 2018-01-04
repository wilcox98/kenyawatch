var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	title: 'Home'
  	});
});
router.get('/livetv', function(req, res, next) {
  res.render('livetv', {
  	title: 'Live TV' 
  	});
});
router.get('/ktnnews', function(req, res, next) {
  res.render('ktnnews', {
  	title: 'KTN News ' 
  	});
});
router.get('/ntv', function(req, res, next) {
  res.render('ntv.html', {
  	title: 'NTV ' 
  	});
});
router.get('/ktn', function(req, res, next) {
  res.render('ktn', {
  	title: 'KTN ' 
  	});
});
router.get('/k24', function(req, res, next) {
  res.render('k24', {
  	title: 'K24 ' 
  	});
});

router.get('/ebru', function(req, res, next) {
  res.render('ebru', {
  	title: 'K24 ' 
  	});
});
router.get('/kass', function(req, res, next) {
  res.render('kass', {
  	title: 'Kass TV ' 
  	});
});
router.get('/kiss', function(req, res, next) {
  res.render('kiss', {
  	title: 'Kiss TV ' 
  	});
});

router.get('/kbc', function(req, res, next) {
  res.render('kbc', {
  	title: 'KBC TV ' 
  	});
});

//live radio routes
router.get('/liveradio', function(req, res, next) {
  res.render('liveradio', {
  	title: 'Live Radio ' 
  	});
});

router.get('/kiss100', function(req, res, next) {
  res.render('kiss100', {
  	title: 'kiss 100 ' 
  	});
});

router.get('/kassfm', function(req, res, next) {
  res.render('kassfm', {
  	title: 'Kass FM ' 
  	});
});

router.get('/classic', function(req, res, next) {
  res.render('classic', {
  	title: 'classic 105 ' 
  	});
});

router.get('/hbr', function(req, res, next) {
  res.render('hbr', {
  	title: 'classic 105 ' 
  	});
});

router.get('/ghetto', function(req, res, next) {
  res.render('ghetto', {
  	title: 'Ghetto' 
  	});
});

router.get('/xfm', function(req, res, next) {
  res.render('xfm', {
  	title: 'X FM' 
  	});
});

router.get('/capital', function(req, res, next) {
  res.render('capital', {
  	title: 'Capital FM' 
  	});
});

router.get('/nation', function(req, res, next) {
  res.render('nation', {
  	title: 'Nation FM' 
  	});
});

module.exports = router;
