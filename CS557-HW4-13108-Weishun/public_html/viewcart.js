/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CS557-HW4_Summer_2015
 * Author: raliclo
 * Filename: listcustomers.js
 * Date and Time: Feb 9, 2016 12:08:05 AM
 * Project Name: CS557-HW4-13108-Weishun
 */

window.onload = function () {
// localhost was in JSON format.
    var clist = JSON.parse(localStorage.localcart);
    var tb = document.getElementById("CartList");
    tb.content = "";
    var tbadd = function (add) {
        tb.content += add;
    };
    tbadd("<tr>" +
            "<td>OrderID  </td>" +
            "<td>ImgQuality  </td>" +
            "<td>Quantity</td>" +
            "<td>ItemTypes   </td>" +
            "<td>GlossyFinish</td>" +
            "<td>ShipDate</td>" +
            "</tr>");
    /*
     *
     * ORIGINAL DATA FORMAT
     order.itemtype = document.getElementById('ItemTypes').value;
     order.qty = document.getElementById('Quantity').value;
     order.imgQ = document.getElementById('ImgQuality').value;
     order.finish = document.getElementById('GlossyFinish').value;
     */

    var addall = function () {
        for (var i in clist) {
//        for (var j in clist[i]) {
            tbadd("<tr>" +
                    "<td>" + clist[i].id + "</td>" +
                    "<td>" + clist[i].itemtype + "</td>" +
                    "<td>" + clist[i].qty + "</td>" +
                    "<td>" + clist[i].imgQ + "</td>" +
                    "<td>" + clist[i].finish + "</td>" +
                    "<td>" + clist[i].shipdate + "</td>" +
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
                console.log("email -" + clist[i].email);
            }
        }
    };

//tb.innerHTML = "<tr>hi<td>hi2</td><td>hi3</td></Tr>";

    /*
     var opts = document.createElement("option");
     opts.value = USstates[i];
     opts.textContent = USstates[i];
     */
};