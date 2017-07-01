const assert = require('assert')
const calculator = require('./calculator')

describe('calculator', () => {
  const initialSavings = 100
  const monthlySavings = 20
  const interestRate = 1

  const result = calculator({initialSavings, monthlySavings, interestRate})
  const length = result.length
  const initial = result.shift()
  const final = result.pop()
  const expected = 800972

  it('has the correct initial result', () =>
    assert.equal(initial, initialSavings))

  it('has the correct final result', () =>
    assert.equal(final, expected))

  it('calculates exactly 600 months (50 years)', () =>
    assert.equal(length, 600))
})
