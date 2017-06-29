const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('http://localhost:3001');

/* Acceptance tests for the API */

describe('The API endpoint', () => {
  it('should work', done => {
    server
    .get('/')
    .expect('Content-type', /json/)
    .expect(200)
    .end((err,res) => {
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      res.body.message.should.equal('Hello there!');
      done();
    });
  });

});
