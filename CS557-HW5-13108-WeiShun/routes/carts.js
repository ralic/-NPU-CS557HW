var express = require('express');
var router = express.Router();


/* GET home page. */
router.all('/', function (req, res, next) {
    var cartTgt = [];
    if (req.session.cart !== undefined) {
        cartTgt = req.session.cart;
    }

//    Just for debug
//    console.log(req.body); // Check request body
//    console.log(cartTgt); // Check session object
//    console.log("delete:" + req.body.delete);
//    console.log("update:" + req.body.update);


    // delete item based request
    if (req.body.delete !== undefined) {

//        Just for Debug
//        console.log(typeof deleteID); //It's undefined if not using Number function.
//        console.log(typeof cartTgt[0].id);
//        console.log("Enter Delete Function");

        deleteID = Number(req.body.delete); //DeleteID become a number
        for (var i in cartTgt) {
//            console.log(deleteID + " " + cartTgt[i].id);
            if (deleteID === cartTgt[i].id) {
                cartTgt.splice(i, 1);
            }
        }
    }
    // Reset qty based request
    if (req.body.update !== undefined) {
        updateID = Number(req.body.update);
        for (var i in cartTgt) {
            if (updateID === cartTgt[i].id) {
                cartTgt[i].quantity = Number(req.body.quantity);
            }
        }
    }
    res.render('cart', {title: 'Your Cart', cart: cartTgt});
});

module.exports = router;
