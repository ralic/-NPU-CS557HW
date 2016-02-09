/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CS557_HWNo2_Summer_2015
 * Author: raliclo
 * Filename: signup_confirm.js
 * Date and Time: Feb 8, 2016 10:50:47 PM
 * Project Name: CS557-HW2-13108-Weishun
 */

window.onload = function () {
    showCustomer();
};
var showCustomer = function () {
    var localData = getCustomer();
    document.getElementById("showcustomer").innerHTML = JSON.stringify(localData);
};
