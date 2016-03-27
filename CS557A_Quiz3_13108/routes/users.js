var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('page1', {title: 'Page1'});
});

module.exports = router;
