var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Express' });
});

/* GET service page. */
router.get('/services', function (req, res, next) {
  res.render('services', { title: 'Express' });
});

router.get('/checkout-plans', function (req, res, next) {
  res.render('checkout-plans', { title: 'Express' });
});


/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Express' });
});

/* GET request quote page. */
router.get('/request-quote', function (req, res, next) {
  res.render('request-quote', { title: 'Express' });
});

module.exports = router;
