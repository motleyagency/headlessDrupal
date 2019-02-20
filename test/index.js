import app from '../server/server'

const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
describe('Connection to server', function () {
  describe('Connects to /', function () {
    it('returns status 200', function (done) {
      this.timeout(5000);
      chai.request(app)
        .get('/')
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
