/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: controller.js
 * Date and Time: Mar 26, 2016 6:04:46 PM
 * Project Name: CS557A_Quiz3_13108
 */
/*
 * Copyright 2016 raliclo.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


gopage1 = function () {
    window.open("./page1", "_self");
};

gofinal = function () {
    event.preventDefault();
    // Define variables in user object
    user.lastname = document.querySelector('#lastname').value;
    // Storage user object in localStorage
    localStorage.setItem('user', JSON.stringify(user));
    // construct an HTTP request
    xhr = new XMLHttpRequest();
    xhr.open("POST", "/final", true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    // send the collected data as JSON
    // If data is not JSON object yet.
    // xhr.send(JSON.stringify(data));
    function readBody(xhr) {
        var data;
//        if (!xhr.responseType || xhr.responseType === "text") {
//            data = xhr.responseText;
//        } else if (xhr.responseType === "document") {
//            data = xhr.responseXML;
//        } else {
        data = xhr.response;
//        }
        return data;
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(readBody(xhr));
        }
    };
    xhr.user = user;
    xhr.send(user);
    window.open("./final", "_self");
};

window.onload = function () {

    if (localStorage.user !== undefined) {
        user = JSON.parse(localStorage.user);
    } else {
        // Make user an object
        user = {};
    }
    document.getElementById('next').addEventListener('click', gofinal);
};
console.log("Page2 Loaded");