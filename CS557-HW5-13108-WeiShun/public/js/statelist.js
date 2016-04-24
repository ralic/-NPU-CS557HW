/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CS557_HWNo2_Summer_2015
 * Author: raliclo
 * Filename: statelist.js
 * Date and Time: Feb 8, 2016 4:10:37 PM
 * Project Name: CS557-HW2-13108-Weishun
 */

// statesPop_byID


var statesPop_byID = function (e) {
    var USstates = ["AL",
        "AK",
        "AZ",
        "AR",
        "CA",
        "CO",
        "CT",
        "DE",
        "FL",
        "GA",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY"];
    for (var i in USstates) {
        // Generate option tags
        // Format : <option value="AL">AL</option>
        var opts = document.createElement("option");
        opts.value = USstates[i];
        opts.textContent = USstates[i];
        document.getElementById(e).appendChild(opts);
//        console.log(i);
//        console.log(states[i]);
    }
    USstates = null;
};