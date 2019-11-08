var express = require('express');
var router = express.Router();

const ctrlMain = require('../controller/main.js');
const ctrlindex = require('../controller/index.js');
const ctrlabout = require('../controller/about.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BookStore' });
});

router.get('/Booklist', ctrlMain.Booklist);
router.get('/About', ctrlabout.About);
router.get('/', ctrlindex.index);

module.exports = router;
