var express = require('express')
var app = express()

// enable CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

//  returns the object as a function in which you pass app
require('./controllers/quiz.controller.server')(app)
require('./controllers/question.controller.server')(app)

app.listen(3000)
