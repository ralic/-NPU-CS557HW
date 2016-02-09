/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CS557-HW2_Summer_2015
 * Author: raliclo
 * Filename: listcustomers.js
 * Date and Time: Feb 9, 2016 12:08:05 AM
 * Project Name: CS557-HW2-13108-Weishun
 */

var clist = getAllCustomer(); // it's in array format
var tb = document.getElementById("customerlist");
tb.content = "";
var tbadd = function (add) {
    tb.content += add;
};
tbadd("<tr>" +
        "<td>Email </td>" +
        "<td>Password</td>" +
        "<td>Full Name</td>" +
        "<td>Address</td>" +
        "<td>City</td>" +
        "<td>State</td>" +
        "<td>ZipCode</td>" +
        "<td>PhoneNo</td>" +
        "</tr>");


/*
 *
 * ORIGINAL DATA FORMAT
 //customer.email = userForm.emailaddress.value;
 //customer.password = userForm.password.value;
 //customer.fullname = userForm.fullname.value;
 //customer.address = userForm.address.value;
 //customer.city = userForm.city.value;
 //customer.state = userForm.state.value;
 //customer.country = userForm.country.value;
 //customer.zipcode = userForm.zipcode.value;
 //customer.phoneno = userForm.phoneno.value;
 */
var addall = function () {
    for (var i in clist) {
//        for (var j in clist[i]) {
        tbadd("<tr>" +
                "<td>" + clist[i].email + "</td>" +
                "<td>" + clist[i].password + "</td>" +
                "<td>" + clist[i].fullname + "</td>" +
                "<td>" + clist[i].address + "</td>" +
                "<td>" + clist[i].country + "</td>" +
                "<td>" + clist[i].state + "</td>" +
                "<td>" + clist[i].zipcode + "</td>" +
                "<td>" + clist[i].phoneno + "</td>" +
                "</tr>");
//        }
    }
};
addall();


//clist.map(tbadd("hi"));
var tbupdate = function () {
    tb.innerHTML = tb.content;
    tb.content = "";
};
tbupdate();
// For testing purpose
var listall = function () {
    for (var i in clist) {
        for (var j in clist[i]) {
//            console.log(i);
//            console.log(j);
//            console.log("Atribute--" + j);
            console.log("email -" + clist[i].email);
//            console.log(clist[i][j]);
        }
    }
};
//tb.innerHTML = "<tr>hi<td>hi2</td><td>hi3</td></Tr>";

/*
 var opts = document.createElement("option");
 opts.value = USstates[i];
 opts.textContent = USstates[i];
 */
