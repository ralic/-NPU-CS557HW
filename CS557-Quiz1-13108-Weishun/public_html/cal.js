/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_Quiz1_Summer_2015
 * Author: raliclo
 * Filename: calaculator.js.js
 * Date and Time: Feb 6, 2016 4:48:43 PM
 * Project Name: HTML5Application
 */

var answer = (Math.floor(Math.random() * 101));
var counter = 0;
var getClass = function (e) {
    var obj = document.getElementsByClassName(e);
    return obj;
};
var check = function (e) {
    counter++;
    updatecounts(counter);
    if (counter >= 10) {
        document.getElementById("circle").setAttribute("style", "background-color: black;height:50%;width:50%;");
        document.getElementById("circle").innerHTML = "GAME OVER";
        window.alert("GAME OVER, CLICK OK to Play Another Game");
        document.getElementById("circle").innerHTML = "";
        gameover();
    }
    if (e > answer) {
        note("TOO BIG");
        document.getElementById("circle").setAttribute("style", "background-color: red;height:75%;width:75%;");
    }
    if (e < answer) {
        note("TOO SMALL");
        document.getElementById("circle").setAttribute("style", "background-color: yellow;;height:37.5%;width:37.5%;");
    }
    if (Number(e) === answer) {
        document.getElementById("circle").setAttribute("style", "background-color: green;height:50%;width:50%;");
        window.alert("CORRECT");
    }
};
var note = function (e) {
    document.getElementById("info").innerHTML = e;
};
var updatecounts = function (e) {
    document.getElementById("times").innerHTML = "You tried " + e + " times";
};
var gameover = function () {
    document.getElementById("circle").setAttribute("style", "background-color: white;height:50%;width:50%;");
    answer = (Math.floor(Math.random() * 101));
    document.feedback.value = undefined;
    counter = 0;
};