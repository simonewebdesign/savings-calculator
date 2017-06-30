const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('http://localhost:3001');

/* Acceptance tests for the API */

describe('The API endpoint', () => {
  it('should be a successful GET', done => {
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

  it('should be a successful POST', done => {
    const initialSavings = 1000

    server
    .post('/')
    .send({initialSavings: initialSavings,
           monthlySavings: 200,
           interestRate: 3})
    .set('Accept', /application\/json/)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err,res) => {
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      res.body.result[0].should.equal(initialSavings);
      done();
    });
  });

});
