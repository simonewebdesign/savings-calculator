const assert = require('assert')
const calculator = require('./calculator')

describe('a calculation', () => {
  const initialSavings = 100
  const monthlySavings = 20
  const interestRate = 1
  const interestFrequency = 'Monthly'

  const result = calculator({initialSavings, monthlySavings, interestRate, interestFrequency})
  const length = result.length
  const initial = result.shift()
  const final = result.pop()
  const expected = 15738.88

  it('has the correct initial result', () =>
    assert.equal(initial, initialSavings))

  it('has the correct final result', () =>
    assert.equal(final, expected))

  it('returns exactly 601 months (1st month + 50 years)', () =>
    assert.equal(length, 601))
})

describe('another calculation', () => {
  const initialSavings = 25000
  const monthlySavings = 600
  const interestRate = 1.5
  const interestFrequency = 'Monthly'

  const result = calculator({initialSavings, monthlySavings, interestRate, interestFrequency})
  const length = result.length
  const initial = result.shift()
  const final = result.pop()
  const expected = 589254.01

  it('has the correct initial result', () =>
    assert.equal(initial, initialSavings))

  it('has the correct final result', () =>
    assert.equal(final, expected))

  it('returns exactly 601 months (1st month + 50 years)', () =>
    assert.equal(length, 601))
})

describe('interest compounded monthly', () => {
  const initialSavings = 50000
  const monthlySavings = 2000
  const interestRate = 2
  const interestFrequency = 'Monthly'

  const result = calculator({initialSavings, monthlySavings, interestRate, interestFrequency})
  const length = result.length
  const initial = result.shift()
  const final = result.pop()
  const expected = 2198457.10

  it('has the correct initial result', () =>
    assert.equal(initial, initialSavings))

  it('has the correct final result', () =>
    assert.equal(final, expected))

  it('returns exactly 601 months (1st month + 50 years)', () =>
    assert.equal(length, 601))
})
