/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CS557_HWNo2_Summer_2015
 * Author: raliclo
 * Filename: signup.js.js
 * Date and Time: Feb 3, 2016 4:28:19 PM
 * Project Name: CS557-HW2-13108-Weishun
 */
'use strict';
var $$ = function (ele) {
    var ans = document.getElementById(ele);
    return ans;
};
var txt = function (info) {
    var ans = document.createTextNode(info);
    return ans;
};
window.onload = function () {

//localStorage.removeItem("counts");
    if (localStorage.counts === undefined) {
        localStorage.counts = Number("0");
    }

    window.validate = function (userForm) {
        var errs = 0;
        // Check email
        var div = $$("emailmsg");
        var removecc = function () {
            if (div.hasChildNodes()) {
                div.removeChild(div.firstChild);
            }
        };
        div.style.color = "red";
        removecc();
        var regex = /(^\w+\@\w+\.\w+)/;
        var match = regex.exec(userForm.emailaddress.value);
        if (!match)
        {
            div.appendChild(txt("Invalid Email"));
            //        userForm.emailaddress.focus();
            errs++;
        }

        // Check password
        div = $$("passwdmsg");
        div.style.color = "red";
        if (userForm.password.value.length <= 5)
        {
            div.appendChild(txt("The password should be of at least size 6"));
            //        userForm.password.focus();
            errs++;
        }
        div = $$("repasswdmsg");
        div.style.color = "red";
        removecc();
        if (userForm.password.value !== userForm.repassword.value)
        {
            div.appendChild(txt("The two passwords don't match"));
            errs++;
        }

        // Check user
        div = $$("usrmsg");
        div.style.color = "red";
        removecc();
        if (userForm.fullname.value.length === 0)
        {
            div.appendChild(txt("Name cannot be blank"));
            //        userForm.fullname.focus();
            errs++;
        }

        // Check zipcode
        div = $$("zipmsg");
        div.style.color = "red";
        removecc();
        if (userForm.zipcode.value.length === 0)
        {
            div.appendChild(txt("ZipCode cannot be blank"));
            errs++;
        } else {
            var vZip = function (e) {
                return /^\d{5}(-\d{4})?$/.test(e);
            };
            if (!vZip(document.getElementsByName('zipcode')[0].value)) {
                div.appendChild(txt("Error found in ZIP Code format(XXXXX or XXXXX-XXXX)"));
                errs++;
            }
        }

        // Check US-Phone Number
        div = $$("phonemsg");
        div.style.color = "red";
        removecc();
        if (userForm.phoneno.value.length === 0)
        {
            div.appendChild(txt("PhoneNo cannot be blank"));
            errs++;
        } else {
            var vPhone = function (e) {
                return /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/.test(e);
            };
            if (!vPhone(document.getElementsByName('phoneno')[0].value)) {
                div.appendChild(txt("Error found in PhoneNo format (XXX)XXX-XXXX"));
                errs++;
            }
        }
        return errs === 0 ? true : false;
    };
    /*
     * Function to add customer info from form object
     * And store it as customerrData in String format at localStorage
     */
    window.addcustomer = function (userForm) {
        localStorage.counts++;
        var customer = {};
        customer.id = localStorage.counts;
        customer.email = userForm.emailaddress.value;
        customer.password = userForm.password.value;
        customer.fullname = userForm.fullname.value;
        customer.address = userForm.address.value;
        customer.city = userForm.city.value;
        customer.state = userForm.state.value;
        customer.country = userForm.country.value;
        customer.zipcode = userForm.zipcode.value;
        customer.phoneno = userForm.phoneno.value;
        // Convert the customer object into JSON data and save as local customerData
        var JSONobj = JSON.stringify(customer);
        localStorage.setItem("customerData", JSONobj);
        // Create variable "customers" to store all new objects
        var customers = [];
        // Recall localstorage if localCustomerDataAll exists
        if (localStorage.customerDataAll !== undefined)
        {
            customers = JSON.parse(localStorage.customerDataAll);
        }
        // Add new new customer into localstorage, in String format.
        customers.push(customer);
        localStorage.setItem("customerDataAll", JSON.stringify(customers));
        //    alert(localStorage.customerData);
        return true;
    };
    /*
     * Function to recall customerrData from localStorage
     */
    window.getCustomer = function () {
        if (localStorage.customerData !== undefined) {
            var response = JSON.parse(localStorage.customerData);
            return response;
        }
        return '<h1>Error found in getting new customer info</h1>';
    };

    window.showCustomer = function (eleid) {
        var localData = getCustomer();
        document.getElementById(eleid).innerHTML = JSON.stringify(localData);
    };
// PAGE Plugin Controller
    var plugin = function (eleid, func) {
        if (document.getElementById(eleid)) {
            eval(func);
        }
    };
    plugin("statepop0", 'window.statesPop_byID("statepop0")');
    plugin("showcustomer", 'window.showCustomer("showcustomer")');
};