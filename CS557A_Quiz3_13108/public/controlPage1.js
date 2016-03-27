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


gopage2 = function () {
    event.preventDefault();
    // Define variables in user object
    user.firstname = document.querySelector('#firstname').value;
    // Storage user object in localStorage
    localStorage.setItem('user', JSON.stringify(user));
    window.open("./page2", "_self");
};

window.onload = function () {

    if (localStorage.user !== undefined) {
        user = JSON.parse(localStorage.user);
    } else {
        user = {};
    }
    document.getElementById('next').addEventListener('click', gopage2);
};

console.log("Page1 Loaded");
