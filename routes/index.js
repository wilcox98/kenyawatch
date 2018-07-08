var express = require('express');
var ejs = require('ejs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	title: 'Kenyawatch'
  	});
});
router.get('/livetv', function(req, res, next) {
  res.render('livetv', {
  	title: 'Live TV'
  	});
});

router.get('/liveradio', function(req, res, next) {
  res.render('liveradio', {
  	title: 'Live Radio '
  	});
});
//live tv
router.get('/livetv/citizen', function(req, res, next) {
  res.render('./livetv/citizen', {
  	title: 'Citizen'
  	});
});
router.get('/livetv/ktnnews', function(req, res, next) {
  res.render('./livetv/ktnnews', {
  	title: 'KTN News '
  	});
});
router.get('/livetv/ntv', function(req, res, next) {
  res.render('./livetv/ntv.html', {
  	title: 'NTV '
  	});
});
router.get('/livetv/ktn', function(req, res, next) {
  res.render('./livetv/ktn', {
  	title: 'KTN Home'
  	});
});
router.get('/livetv/k24', function(req, res, next) {
  res.render('./livetv/k24', {
  	title: 'K24 '
  	});
});

router.get('/livetv/ebru', function(req, res, next) {
  res.render('./livetv/ebru', {
  	title: 'Ebru Tv '
  	});
});
router.get('/livetv/kass', function(req, res, next) {
  res.render('./livetv/kass', {
  	title: 'Kass TV '
  	});
});
router.get('/livetv/kiss', function(req, res, next) {
  res.render('./livetv/kiss', {
  	title: 'Kiss TV '
  	});
});

router.get('/livetv//kbc', function(req, res, next) {
  res.render('./livetv/kbc', {
  	title: 'KBC TV '
  	});
});

//live radio routes

router.get('/liveradio/kiss100', function(req, res, next) {
  res.render('./liveradio/kiss100', {
  	title: 'Kiss 100 '
  	});
});

router.get('/liveradio/kassfm', function(req, res, next) {
  res.render('./liveradio/kassfm', {
  	title: 'Kass FM '
  	});
});

router.get('/liveradio/classic', function(req, res, next) {
  res.render('./liveradio/classic', {
  	title: 'Classic 105 '
  	});
});

router.get('/liveradio/hbr', function(req, res, next) {
  res.render('./liveradio/hbr', {
  	title: 'HBR '
  	});
});

router.get('/liveradio/ghetto', function(req, res, next) {
  res.render('./liveradio/ghetto', {
  	title: 'Ghetto'
  	});
});

router.get('/liveradio/xfm', function(req, res, next) {
  res.render('./liveradio/xfm', {
  	title: 'X FM'
  	});
});

router.get('/liveradio/capital', function(req, res, next) {
  res.render('./liveradio/capital', {
  	title: 'Capital FM'
  	});
});

router.get('/liveradio/nation', function(req, res, next) {
  res.render('./liveradio/nation', {
  	title: 'Nation FM'
  	});
});

module.exports = router;
