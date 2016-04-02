var express = require('express');
var router = express.Router();



var inherit = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};

var Order = function () {
    this.id = Math.floor(Math.random() * 1000);
    this.itemname;
    this.quantity;
    this.message = "";
    this.setitem = function (item) {
        if (item !== '') {
            this.itemname = item;
            return true;
        } else {
            this.message = this.message + "Please enter item name . ";
            return false;
        }
    };
    this.setqty = function (qty) {
        qty = parseInt(qty);
        if (!isNaN(qty)) {
            this.quantity = qty;
            this.message = "You chosse to buy Item:" + this.itemname + " Qty:" + this.quantity;
            return true;
        } else {
            this.message = this.message + "Please enter item qty correctly. ";
            return false;
        }
    };
};
inherit(Object, Order);

/* GET home page. */
router.all('/', function (req, res, next) {
    var message = '';
    if (req.method === 'POST') {
        if (req.session.cart === undefined) {
            req.session.cart = [];
        }
        neworder = new Order();
        for (var i in req.session.cart) {
            while (req.session.cart[i].id === neworder.id) {
                neworder.id = Math.floor(Math.random() * 1000);
            }
        }
        if (neworder.setitem(req.body.itemname) && neworder.setqty(req.body.quantity)) {
            req.session.cart.push(neworder);
        }
        message = neworder.message;
        console.log(req.session.cart);
    }
    res.render('order', {title: 'Order Form', message: message});
//    'The item has been added to the cart!'
});

module.exports = router;
