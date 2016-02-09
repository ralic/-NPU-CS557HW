/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CS557_HWNo2_Summer_2015
 * Author: raliclo
 * Filename: signup.js.js
 * Date and Time: Feb 3, 2016 4:28:19 PM
 * Project Name: CS557-HW2-13108-Weishun
 */

//localStorage.removeItem("counts");
if (localStorage.counts === undefined) {
    localStorage.counts = Number("0");
}
var validate = function (userForm) {
    var errs = 0;
    // Check email
    var div = document.getElementById("emailmsg");
    div.style.color = "red";
    if (div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    regex = /(^\w+\@\w+\.\w+)/;
    match = regex.exec(userForm.emailaddress.value);
    if (!match)
    {
        div.appendChild(document.createTextNode("Invalid Email"));
        userForm.emailaddress.focus();
        errs++;
    }
    // Check password
    div = document.getElementById("passwdmsg");
    div.style.color = "red";
    if (div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if (userForm.password.value.length <= 5)
    {
        div.appendChild(document.createTextNode("The password should be of at least size 6"));
        userForm.password.focus();
        errs++;
    }
    div = document.getElementById("repasswdmsg");
    div.style.color = "red";
    if (div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if (userForm.password.value !== userForm.repassword.value)
    {
        div.appendChild(document.createTextNode("The two passwords don't match"));
        userForm.password.focus();
        errs++;
    }
    // Check user
    div = document.getElementById("usrmsg");
    div.style.color = "red";
    if (div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if (userForm.fullname.value.length === 0)
    {
        div.appendChild(document.createTextNode("Name cannot be blank"));
        userForm.fullname.focus();
        errs++;
    }
    // Check zipcode
    div = document.getElementById("zipmsg");
    div.style.color = "red";
    if (div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if (userForm.zipcode.value.length === 0)
    {
        div.appendChild(document.createTextNode("ZipCode cannot be blank"));
        userForm.zipcode.focus();
        errs++;
    } else {
        var vZip = function (e) {
            return /^\d{5}(-\d{4})?$/.test(e);
        };
        if (!vZip(document.getElementsByName('zipcode')[0].value)) {
            div.appendChild(document.createTextNode("Error found in ZIP Code format(XXXXX or XXXXX-XXXX)"));
            userForm.zipcode.focus();
            errs++;
        }
    }
    // Check US-Phone Number
    div = document.getElementById("phonemsg");
    div.style.color = "red";
    if (div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if (userForm.phoneno.value.length === 0)
    {
        div.appendChild(document.createTextNode("PhoneNo cannot be blank"));
        userForm.zipcode.focus();
        errs++;
    } else {
        var vPhone = function (e) {
            return /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/.test(e);
        };
        if (!vPhone(document.getElementsByName('phoneno')[0].value)) {
            div.appendChild(document.createTextNode("Error found in PhoneNo format (XXX)XXX-XXXX"));
            userForm.zipcode.focus();
            errs++;
        }
    }
    return errs === 0 ? true : false;
};


/*
 * Function to add customer info from form object
 * And store it as customerrData in String format at localStorage
 */
var addcustomer = function (userForm) {
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
var getCustomer = function () {
    if (localStorage.customerData !== undefined) {
        var response = JSON.parse(localStorage.customerData);
        return response;
    }
//    var customerString = "";
//    customerString = localStorage.getItem("customerData");
//    return customerString;
    return '<h1>Error found in getting new customer info</h1>';
};


/*
 * Function to recall customerrDataAll from localStorage
 */
var getAllCustomer = function () {
    if (localStorage.customerDataAll !== undefined) {
        var response = JSON.parse(localStorage.customerDataAll);
        return response;
    }
//    var customerString = "";
//    customerString = localStorage.getItem("customerDataAll");
//    return customerString;
    return '<h1>Error found in getting all customer info</h1>';
};

