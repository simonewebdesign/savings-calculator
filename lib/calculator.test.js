const assert = require('assert')
const calculator = require('./calculator')

describe('calculator', () => {
  it('returns the correct result', () => {
    const initialSavings = 1000
    const monthlySavings = 200
    const interestRate = 3
    const expected = 124600

    assert.equal(
      calculator(initialSavings, monthlySavings, interestRate),
      expected
    )
  })
})
