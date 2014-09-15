'use strict';

var express = require('express');
var request = require('request');
var concat = require('concat-stream');
var validUrl = require('valid-url');
var crypto = require('crypto');
var path = require('path');

var app = express();

var address = process.env.IP || '';
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.use('/digest', function(req, res, next) {
    if(validUrl.isUri(req.param('url'))) {
        next();
    } else {
        res.status(400);
        next(new Error('Invalid URL'));
    }
});

app.get('/', function(req, res) {
    res.render('index', { url: '' });
});

app.get('/digest', function(req, res) {
    var md5d = crypto.createHash('md5');
    var requestedUrl = req.param('url');

    request(requestedUrl).pipe(concat(function(data) {
        md5d.update(data);
        res.render('index', { url: requestedUrl, result: md5d.digest('hex') });
    }));
});

app.use(function(err, req, res, next) {
    if(err) {
        res.render('index', { url: '', result: err.message });
    }
});

var server = app.listen(port, address, function() {
    console.log('express listening at %s:%s', server.address().address, server.address().port);
});

app.server = server;
module.exports = app;

