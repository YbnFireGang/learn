var request = require('supertest');
var serve = require('../../index');

describe('test favorite', function () {
  it('test get favorite interface', function (done) {
    request(serve)
      .get('/get-favorite')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('test add favorite interface', function (done) {
    request(serve)
      .post('/add-favorite')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});