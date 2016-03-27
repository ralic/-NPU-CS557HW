var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('page2', {title: 'Page2'});
});

module.exports = router;
