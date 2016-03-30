var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log(req); //undefind
    res.render('final', {title: 'Final'});
});

router.post('/', function (req, res, next) {
    console.log(req);
    res.render('page2', {title: 'Page2'});
});

module.exports = router;
