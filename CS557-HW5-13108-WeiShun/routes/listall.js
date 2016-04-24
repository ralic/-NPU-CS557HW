var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
//    console.log(req.body);
    res.render('listall');
});

module.exports = router;
