const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('http://localhost:3001');

/* Acceptance tests for the API */

describe('The API', () => {
  it('POST /api/calculate-earnings', done => {
    const initialSavings = 1000
    const reqParams = {
      initialSavings: initialSavings,
      monthlySavings: 200,
      interestRate: 3
    }
    server
    .post('/api/calculate-earnings')
    .send(reqParams)
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
