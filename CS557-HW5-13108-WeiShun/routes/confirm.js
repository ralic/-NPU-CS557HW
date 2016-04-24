var express = require('express');
var router = express.Router();

router.all('/', function (req, res, next) {
//    console.log(req);
    res.render('confirm');
});

module.exports = router;
