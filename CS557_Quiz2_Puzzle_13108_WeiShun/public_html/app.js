/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: app.js.js
 * Date and Time: Feb 20, 2016 5:13:26 PM
 * Project Name: Puzzle
 */
var ansarr = [];
var draggable = [];
var targets = [];
var counts = 0;
var timeout;

function timerstart() {
    draggable = document.querySelectorAll("[draggable]");
    targets = document.querySelectorAll("[data-drop-target]");
    for (var i = 0; i < draggable.length; i++) {
        draggable[i].addEventListener("dragstart", handleDragStart);
    }
    for (i = 0; i < targets.length; i++) {
        targets[i].addEventListener("dragover", handleOverDrop);
        targets[i].addEventListener("drop", handleOverDrop);
        targets[i].addEventListener("dragenter", handleDragEnterLeave);
        targets[i].addEventListener("dragleave", handleDragEnterLeave);
    }
    var textarr = [
        "Object-1",
        "Object-2",
        "Object-3",
        "Object-4",
        "Object-6",
        "Object-7",
        "Object-8",
        "Object-9"
    ];
    var createanswer = function (array) {
        var result = [];
        var length = array.length;
        for (var i = 0; i < 4; i++) {
            var itemN = (Math.floor(Math.random() * array.length));
            console.log(itemN);
            var item = array[itemN];
            console.log(item);
            result.push(item);
            array.splice(itemN, 1);
        }
        return result;
    };
    var dragarr = createanswer(textarr);
    for (i = 0; i < 4; i++) {
        draggable[i].innerHTML = dragarr[i];
    }
    var targetarr = createanswer(dragarr);
    for (i = 0; i < 4; i++) {
        targets[i].id = targetarr[i];
    }
    document.getElementById("info").innerHTML = "You have 10 sec to move objects to the right place !!";
    timeout = setTimeout(
            function () {
                alert("You lose !! Refresh the page to try again");
            }, 10000);
    counts = 0;
}

function handleDragStart(e) {
    e.dataTransfer.setData("text", this.id);
}
function handleDragEnterLeave(e) {
    if (e.type === "dragenter") {
        this.className = "drag-enter";
    } else {
        this.className = "";
    }
}
//var containers = [];
//containers = document.getElementsByClassName("container");

function handleOverDrop(e) {
    e.preventDefault();
    if (e.type !== "drop") {
        return;
    }
    var draggedId = e.dataTransfer.getData("text");
    var draggedEl = document.getElementById(draggedId);
    if (draggedEl.parentNode === this) {
        return;
    }
//    window.alert(draggedEl.textContent);
//    window.alert(e.target.id);
    if (e.target.id === draggedEl.textContent)
    {
        draggedEl.parentNode.removeChild(draggedEl);
        this.appendChild(draggedEl);
        counts++;
        if (counts === 4) {
            window.alert("You Win !");
            clearTimeout(timeout);
        }
    } else {
        document.getElementById("info").innerHTML = "Not this one, Try again !";
    }
    this.className = "";
}

window.onload = function () {
    document.getElementById("start").addEventListener("click", timerstart);
};

