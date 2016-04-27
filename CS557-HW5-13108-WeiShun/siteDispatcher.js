/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: siteDispatcher.js
 * Date and Time: Apr 24, 2016 3:28:54 AM
 * Project Name: CS557-HW5-13108-WeiShun
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


//Routing prerequsite in app
//var express = require('express');
//var app = express();

var index = require('./routes/index');
app.use('/', index);

var confirm = require('./routes/confirm');
app.use('/confirm', confirm);

var listall = require('./routes/listall');
app.use('/listall', listall);

// Error pages definitions
// Handle 404
app.use(function (req, res) {
    res.status(400);
    res.render('404.jade', {title: '404: File Not Found'});
});

// Handle 500
app.use(function (error, req, res, next) {
    res.status(500);
    res.render('500.jade', {title: '500: Internal Server Error', error: error});
});

// Handle others
app.use(function (err, req, res, next) {
    res.status(err.status);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
