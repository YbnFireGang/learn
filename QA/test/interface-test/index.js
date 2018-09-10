const request = require('supertest');
const app = require('./server');
describe('request test', function () {
  it('/ test', function (done) {
    request(app)
      .get('http://localhost/')
      .set('Content-Type', 'application/json')
      .expect(200)
      .end(function (err, res) {
        console.info(err);
        done();
      });
  });
});