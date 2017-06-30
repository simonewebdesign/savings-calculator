const assert = require('assert')
const calculator = require('./calculator')

describe('calculator', () => {
  const initialSavings = 1000
  const monthlySavings = 200
  const interestRate = 3

  const result = calculator(initialSavings, monthlySavings, interestRate)
  const initial = result.shift()
  const final = result.pop()
  const expected = 124600

  it('has the correct initial result', () =>
    assert.equal(initial, initialSavings))

  it('has the correct final result', () =>
    assert.equal(final, expected))

})
