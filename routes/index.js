var express = require('express');
var router = express.Router();
var carsRoute = require('./cars');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/cars', carsRoute);

module.exports = router;
