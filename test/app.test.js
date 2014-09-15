/*global describe, it:true*/
'use strict';

var test = require('supertest');
var jade = require('jade');
var app = require('../app/app');
var crypto = require('crypto');
var util = require('util');

describe('The application', function() {

    function getTestDigestUrl() {
        var address = app.server.address();
        return util.format('/digest?url=http://%s:%d', address.address, address.port);
    }

    function getExpectedDigest() {
        var content = jade.renderFile('./app/templates/index.jade', { url: '' });
        return crypto.createHash('md5').update(content).digest('hex');
    }

    it('should present a url form', function(done) {
        var expectedBody = jade.renderFile('./app/templates/index.jade', { url: '' });
        
        test(app).get('/')
            .expect(200)
            .expect(expectedBody)
            .end(done);
    });

    it('should provide a digest for a provided url', function(done) {
        test(app).get(getTestDigestUrl())
            .expect(200)
            .expect(new RegExp(getExpectedDigest()))
            .end(done);
    });

    it('should not accept an invalid url to digest', function(done) {
        test(app).get('/digest?url=xxx')
            .expect(400)
            .expect(new RegExp('Invalid URL'))
            .end(done);
    });
});