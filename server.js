console.log("hello world")

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/angular-proj'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/angular-proj/index.html'));});
app.listen(process.env.PORT || 8080);

// var express = require('express')
// var app = express()

// // enable CORS
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers',
//         'Content-Type, X-Requested-With, Origin');
//     res.header('Access-Control-Allow-Methods',
//         'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//     next();
// });

// //  returns the object as a function in which you pass app
// require('./src/app/controllers/quiz.controller.server')(app)
// require('./src/app/controllers/question.controller.server')(app)

// app.listen(process.env.PORT)