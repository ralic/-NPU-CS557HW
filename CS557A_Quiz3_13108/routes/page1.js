var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log(req.body);
    res.render('page1', {title: 'Page1'});
});

module.exports = router;
